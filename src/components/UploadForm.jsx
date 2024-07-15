'use client';
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";
import { IoMdCloudUpload } from "react-icons/io";
import Loading from './Loading'
export default function UploadForm() {

  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    
    if (files.length > 0) {
      const file = files[0];
      if (file.size > 50 * 1024 * 1024) {
        alert('File size exceeds 50 MB limit. Please choose a smaller file.');
        return;
      }
      else{
        setIsUploading(true);
      const res = await axios.postForm('/api/upload', {
        file,
      });
      setIsUploading(false);
      const newName = res.data.newName;
      router.push('/'+newName);
    // console.log(res.data)
      }
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex justify-center items-center">
          <div className="w-full flex flex-col text-center items-center justify-center ">
                <Loading/>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      <label className="bg-green-500 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-none text-lg font-medium items-center  hover:bg-blue-500 cursor-pointer  ">
        <IoMdCloudUpload />
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden"/>
      </label>
    </>
  );
}