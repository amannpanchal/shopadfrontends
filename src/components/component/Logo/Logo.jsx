import React from 'react'
import image from '../../../assets/logo.png'

const Logo = () => {
  return (
    <div
      
      style={{
        display: 'flex',
        justifyContent: "center",
        alignItems : "center"
      }}
    >
      <img
        
        style={{
          width : "100px"
        }}
        
        
        src={image} />
    </div>
  )
}

export default Logo