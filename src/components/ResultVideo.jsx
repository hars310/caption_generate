import SparklesIcon from "@/components/SparklesIcon";
import { transcriptionItemsToSrt } from "@/libs/awsTranscriptionHelpers";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL, fetchFile } from "@ffmpeg/util";
import { useEffect, useState, useRef } from "react";
// import roboto from './../fonts/Roboto-Regular.ttf';
// import robotoBold from './../fonts/Roboto-Bold.ttf';
import hind from './../fonts/Hind-Regular.ttf';
import hindBold from './../fonts/Hind-Bold.ttf';

export default function ResultVideo({ filename, transcriptionItems }) {
  const videoUrl =
    "https://harsh-caption-generator.s3.ap-southeast-2.amazonaws.com/" + filename;
    
  const [loaded, setLoaded] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#FFFFFF");
  const [outlineColor, setOutlineColor] = useState("#000000");
  const [progress, setProgress] = useState(1);
  const [downloadUrl, setDownloadUrl] = useState(null); // State to store download URL
  const ffmpegRef = useRef(new FFmpeg());
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = videoUrl;
    load();
  }, [videoUrl]);

  const load = async () => {
    const ffmpeg = ffmpegRef.current;
    const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });
    // await ffmpeg.writeFile('/tmp/roboto.ttf', await fetchFile(roboto));
    // await ffmpeg.writeFile('/tmp/roboto-bold.ttf', await fetchFile(robotoBold));
    await ffmpeg.writeFile('/tmp/hind.ttf',await fetchFile(hind))
    await ffmpeg.writeFile('/tmp/hind-bold.ttf',await fetchFile(hindBold));
    setLoaded(true);
  };

  function toFFmpegColor(rgb) {
    const bgr = rgb.slice(5, 7) + rgb.slice(3, 5) + rgb.slice(1, 3);
    return "&H" + bgr + "&";
  }

  const transcode = async () => {
    const ffmpeg = ffmpegRef.current;
    const srt = transcriptionItemsToSrt(transcriptionItems);
    await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
    await ffmpeg.writeFile("subs.srt", srt);
    videoRef.current.src = videoUrl;
    await new Promise((resolve, reject) => {
      videoRef.current.onloadedmetadata = resolve;
    });
    const duration = videoRef.current.duration;
    ffmpeg.on("log", ({ message }) => {
      const regexResult = /time=([0-9:.]+)/.exec(message);
      if (regexResult && regexResult?.[1]) {
        const howMuchIsDone = regexResult?.[1];
        const [hours, minutes, seconds] = howMuchIsDone.split(":");
        const doneTotalSeconds = hours * 3600 + minutes * 60 + seconds;
        const videoProgress = doneTotalSeconds / duration;
        setProgress(videoProgress);
      }
    });
    await ffmpeg.exec([
      "-i",
      filename,
      "-preset",
      "ultrafast",
      "-vf",
      `subtitles=subs.srt:fontsdir=/tmp:force_style='Fontname=Hind Bold,FontSize=30,MarginV=70,PrimaryColour=${toFFmpegColor(
        primaryColor
      )},OutlineColour=${toFFmpegColor(outlineColor)}'`,
      "output.mp4",
    ]);
    const data = await ffmpeg.readFile("output.mp4");
    const videoBlob = new Blob([data.buffer], { type: "video/mp4" });
    const url = URL.createObjectURL(videoBlob);
    setDownloadUrl(url); // Save download URL
    videoRef.current.src = url; // Set video source to the generated video
    setProgress(1);
  };

  const downloadVideo = () => {
    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'transcoded-video.mp4';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 my-4">
        <div className="flex items-center gap-2">
          Primary color: 
          <input
            className="bg-zinc-600 rounded-md"
            type="color"
            value={primaryColor}
            onChange={(ev) => setPrimaryColor(ev.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          Outline color:
          <input
            className="bg-zinc-600 rounded-md"
            type="color"
            value={outlineColor}
            onChange={(ev) => setOutlineColor(ev.target.value)}
          />
        </div>
      </div>
      
      <div className="my-4">
        <button
          onClick={transcode}
          className="bg-green-500 py-2 px-6 rounded-full inline-flex gap-2 border-none cursor-pointer"
        >
          <SparklesIcon />
          <span>Apply captions</span>
        </button>
      </div>

      {/* Download button */}
      {downloadUrl && (
        <div className="my-4">
          <button
            onClick={downloadVideo}
            className="bg-blue-500 text-white py-2 px-6 rounded-full inline-flex gap-2 border-none cursor-pointer"
          >
            <span>Download Transcoded Video</span>
          </button>
        </div>
      )}

      <div className="rounded-xl overflow-hidden relative">
        {progress && progress < 1 && (
          <div className="absolute inset-0 bg-black/80 flex items-center">
            <div className="w-full text-center">
              <div className="bg-bg-gradient-from/50 mx-8 rounded-lg overflow-hidden relative">
                <div
                  className="bg-bg-gradient-from h-8"
                  style={{ width: progress * 100 + "%" }}
                >
                  <h3 className="text-white text-xl absolute inset-0 py-1">
                    {parseInt(progress * 100)}%
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <video className="w-[70%] h-[60%] mt-4 rounded-lg" data-video={0} ref={videoRef} controls></video>
        </div>
      </div>
    </>
  );
}

