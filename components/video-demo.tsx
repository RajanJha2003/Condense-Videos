import Image from 'next/image'
import React from 'react'

const VideoDemo = () => {
  return (
    <div className='px-6 relative'>
        <Image width={400} height={700} src={"/demo3.gif"} className='h-full rounded-3xl w-full object-cover border-8 overflow-clip' alt='demo' />

    </div>
  )
}

export default VideoDemo