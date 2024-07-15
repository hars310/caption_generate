import SparklesIcon from "@/components/SparklesIcon";

export default function DemoSection() {
  return (
    <section className="flex justify-around mt-8 sm:mt-12 items-center">
      <div className="hidden sm:block bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video src="https://harsh-caption-generator.s3.ap-southeast-2.amazonaws.com/k2wlymn7m2i.mp4" preload muted autoPlay loop></video>
      </div>
      <div className="hidden sm:block">
        <SparklesIcon />
      </div>
      <div className="bg-gray-800/50 w-[240px] rounded-xl overflow-hidden">
        <video src="https://harsh-caption-generator.s3.ap-southeast-2.amazonaws.com/transcoded-video.mp4" preload muted autoPlay loop></video>
      </div>
    </section>
  );
}