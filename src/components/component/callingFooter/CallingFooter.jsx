import React from 'react';
import { FaQuestionCircle, FaPhone, FaWhatsapp } from 'react-icons/fa';

const CallingFooter = () => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'space-around', padding: '10px', background: 'rgba(2,43,45)', color: "white",
            position: 'sticky',
            bottom :"0",
            zIndex : "34232342323423422342"

         }}>
            <div style={{ textAlign: 'center' }}>
                <FaQuestionCircle size={30} />
                <div>Enquiry</div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <FaPhone size={30} />
                <div>Calling</div>
            </div>
            <div
            
                style={{ textAlign: 'center'}}>
                <FaWhatsapp size={30} />
                <div
                    
                
                >WhatsApp</div>
            </div>
        </div>
    );
}

export default CallingFooter;
