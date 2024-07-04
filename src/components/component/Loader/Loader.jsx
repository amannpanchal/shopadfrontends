import React from 'react'
import Logo from '../Logo/Logo'
import image from '../../../assets/logo.png'

const Loader = () => {
  return (
      <div
          style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100vw",
              height :" 100vh",
        backgroundColor: "white",
        display: 'flex',
        justifyContent: "center",
            alignItems : "center"
          }}
    >
      <img
        src={image}
        style={{
       
        }}
      
      />
      
    </div>
  )
}

export default Loader