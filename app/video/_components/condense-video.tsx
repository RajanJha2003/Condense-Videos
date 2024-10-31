"use client";

import React from 'react'

import { AnimatePresence, motion } from "framer-motion";
import CustomDropZone from './custom-dropzone';
import { acceptedVideoFiles } from '@/utils/formats';

const CondenseVideo = () => {

    const handleUpload=(file:File)=>{


    }
  return (
    <>
    <motion.div layout
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        key={"drag"}
        transition={{ type: "tween" }}
        className="border rounded-3xl col-span-5 flex w-full md:h-full bg-gray-50/35">
        <CustomDropZone handleUpload={handleUpload} acceptedFiles={acceptedVideoFiles}  />

    </motion.div>
    </>
  )
}

export default CondenseVideo