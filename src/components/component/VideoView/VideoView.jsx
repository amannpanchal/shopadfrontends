import React from 'react'
import './Video.css'
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const VideoView = (
  {
    heading, subHeading, topSideHeading,
    bottomSideHeading,
    backgroundImage
  }
) => {
  return (
    <div
      className='videoView'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover"
      }}
    >
      {
        topSideHeading &&
        <div
            className='topSideHeading'
        
           >
          {topSideHeading}
        </div>
      }

      <div className='videoCenter'>
        <MdOutlinePlayCircleFilled
          style={{
            fontSize: "100px",
            color: "white"
          }}
        />

        
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>

      </div>


      {
        bottomSideHeading && <div
          className='bottomSideHeading'
        >
          {bottomSideHeading}
        </div>

      }
    </div>
  )
}

export default VideoView
