import React from 'react'
import './GalleryImage.css'
const GalleryImage = ({ imageLink, bottomSideHeading }) => {
  return (
      <div
          className='imageContainer'
      >
          {
              bottomSideHeading && <div
                  className='bottomSideHeading'
              >
                  {bottomSideHeading}
              </div>
          }
          <img
              className='imageLink'
              src={imageLink}
          />

         
          
    </div>
  )
}

export default GalleryImage