import React, { useState } from 'react';
import './ButtonBackground.css';
import { FaPhoneVolume } from 'react-icons/fa';

const ButtonBackground = ({ text,icon,table }) => {
  const [hovered, setHovered] = useState(false);

  return (
    
    <button
      style={
      table ?
        
        {
        display: "flex",
        justifyContent: "center",
            alignItems: "center",
        fontSize : "12px"
          } :
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"

          }
      
      }
      
        className={`gradient-button ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
      {
        icon && <FaPhoneVolume />
      }
        {text}
      </button>
  );
};

export default ButtonBackground;
