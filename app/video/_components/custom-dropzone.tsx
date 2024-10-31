"use client";

import React, { useState } from 'react'
import ReactDropzone from "react-dropzone";
import { toast } from "sonner";

type CustomDropZoneProps ={

    handleUpload:(files:File)=>void;
    acceptedFiles: { [key: string]: string[] };
  disabled?: boolean;

}

const CustomDropZone = ({handleUpload,acceptedFiles,disabled}:CustomDropZoneProps) => {

    const [isHover, setIsHover] = useState<boolean>(false);
    const handleExitHover = (): void => setIsHover(false);

    const handleHover = (): void => setIsHover(true);

   
    const onDrop = (files: File[]) => {
      handleUpload(files[0]);
      handleExitHover();
    };
  
    const onError = () => {
      handleExitHover();
      toast.error("Error uploading your file(s)", {
        description: "Allowed files: Audio, Video and Images.",
        duration: 5000,
      });
    };
  
    const onDropRejected = () => {
      handleExitHover();
      toast.error("Error uploading your file(s)", {
        description: "Allowed files: Audio, Video and Images.",
        duration: 5000,
      });
    };


  return (
    <ReactDropzone
      disabled={disabled}
      onDragEnter={handleHover}
      onDragLeave={handleExitHover}
      onDrop={onDrop}
      accept={acceptedFiles}
      multiple={false}
      onError={onError}
      onDropRejected={onDropRejected}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`${
            isHover ? "border-black bg-gray-100/80" : "border-default-gray"
          } flex justify-center items-center flex-col cursor-pointer w-full py-6 ${
            disabled ? "cursor-not-allowed" : ""
          }`}
        >
          <input {...getInputProps()} />
          {/* <Projector /> */}
          <h3 className="text-center mt-5">
            Click to select video <br />
            or
            <br />
            drag video and drop
          </h3>
        </div>
      )}
    </ReactDropzone>
  )
}

export default CustomDropZone