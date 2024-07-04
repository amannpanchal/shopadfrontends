import React, { useState } from 'react';
import './ButtonHover.css';
import { IoDownloadOutline } from 'react-icons/io5';

const ButtonHover = ({ text,icon }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
        
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems : "center"
            }}
        >

      
        <button
            className={`gradient-button2 ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: 'center',
                    alignItems :"center"
                }}
            >
                {
                    icon && 
                <IoDownloadOutline
                        className="animated-icon" style={{
                            fontSize: '20px',
                            margin : "0"
                        
                    }} />
              }
            {text}
            </button>

        </div>
    );
};

export default ButtonHover;
