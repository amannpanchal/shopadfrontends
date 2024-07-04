import React from 'react'
import Heading from '../../component/Heading/Heading'
import { data } from '../../../config/data'
import { Carousel } from 'antd'
import ResponsiveCarousel from '../../component/ResponsiveCarousel/ResonsiveCarousel'

const AmenitiesSection = () => {
  return (
    <div
      className='container'
    
    >
      <Heading
        heading={
          data?.amenities?.heading
        }
          />


      <ResponsiveCarousel
      images={ data?.amenities?.images}
      />

    </div>
  )
}

export default AmenitiesSection