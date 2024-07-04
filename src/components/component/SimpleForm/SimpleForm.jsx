import React, { useState, useEffect } from 'react';

import PhoneInput from 'react-phone-input-2';
import ButtonBackground from '../Buttons/ButtonBackground/ButtonBackground';
import { Button, Input, Modal, DatePicker, message as antdMessage } from 'antd';
import { data } from '../../../config/data';
import './SimpleForm.css'
import Logo from '../Logo/Logo';
import { backendUrl } from '../../../config/backendUrl';
import Popup from '../popup/popup';
const SimpleForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [time, setScheduleTime] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEnquireModalVisible, setIsEnquireModalVisible] = useState(true); // S
    const handleEnquireNow = () => {
        setIsEnquireModalVisible(true); // Show the Enquire Now modal
    };

    const handleEnquireModalOk = () => {
        setIsEnquireModalVisible(false);
    };

    const handleEnquireModalCancel = () => {
        setIsEnquireModalVisible(false);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            antdMessage.error('Please enter your name.');
            return;
        }
        if (!email) {
            antdMessage.error('Please enter your email.');
            return;
        }
        if (!number) {
            antdMessage.error('Please enter your phone number.');
            return;
        }
        if (!message) {
            antdMessage.error('Please enter your message.');
            return;
        }

        const formData = {
            name,
            email,
            number,
            message,
            time: time ? time.format('YYYY-MM-DD HH:mm') : null
        };

        console.log('Form submitted:', formData);

        fetch(  `${backendUrl}/sendthings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setIsModalVisible(true);
            
                setName('');
                setEmail('');
                setNumber('');
                setMessage('');
                setScheduleTime(null);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const handleModalOk = () => {
        setIsModalVisible(false);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };
    const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 890);

    useEffect(() => {
        const handleResize = () => {
            setIsBigScreen(window.innerWidth >= 890);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div 
           className= {`${isBigScreen ? 'SimpleFormBig' : 'SimpleFormSmall'}`}
        >
            <div>
                <div

                    className={`${isBigScreen ? 'SimpleFormBigHeading' : 'SimpleFormSmallHeading'}`}
                   
                >
                    {data?.cardData?.heading}
                </div>
                <div
                    className={`${isBigScreen ? 'SimpleFormBigMainHeading' : 'SimpleFormSmallMainHeading'}`}
                >
                    <h1
                       
                    >
                        {data?.cardData?.mainHeading}
                    </h1>
                    <div
                        className='cardAddress  '
                    
                    
                    >
                        <h4
                            
                            className={`${isBigScreen ? 'SimpleFormBigAddress' : 'SimpleFormSmallAdress'}`}
                           
                        >
                            {data?.cardData?.address}
                        </h4>
                        <h4
                            style={{
                                textAlign: "center"
                            }}
                        >
                            {data?.cardData?.subAddress}
                        </h4>
                    </div>
                </div>
                <div
                    className={`${isBigScreen ? 'SimpleFormBigLandArea' : 'SimpleFormSmallLandArea'}`}
                    style={{
                        backgroundColor: 'rgba(232,232,232)',
                        padding : "10px 0"
                    }}
                >
                    <div
                       className={`${isBigScreen ? 'SimpleFormBigLandAreaHeading' : 'SimpleFormSmallLandAreaHeading'}`}

                       
                    >
                        <p
                            
                           
                        >Land Area</p>
                        <h4
                           
                        >{data?.cardData?.landArea}</h4>
                    </div>
                    <div
                        className={`${isBigScreen ? 'SimpleFormBigLandAreaHeading' : 'SimpleFormSmallLandAreaHeading'}`}


                    >
                        <p
                            
                        >Towers</p>
                        <h4
                            
                        >{data?.cardData?.Towers}</h4>
                    </div>
                    <div
                        className={`${isBigScreen ? 'SimpleFormBigLandAreaHeading' : 'SimpleFormSmallLandAreaHeading'}`}


                    >
                        <p
                            
                        >Floors</p>
                        <h4
                            
                        >{data?.cardData?.Floors}</h4>
                    </div>
                 
                </div>
                <div
                    className={`${isBigScreen ? 'SimpleFormBigBackground' : 'SimpleFormSmallBackground'}`}

                >
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        {data?.cardData?.buttonData?.discount}
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        {data?.cardData?.buttonData?.edition}
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        {data?.cardData?.buttonData?.plantTime}
                    </div>
                </div>
                <div
                    className={`${isBigScreen ? 'SimpleFormBigDescription' : 'SimpleFormSmallDescription'}`}
                    
                >
                    <p
                        
                    >
                        {data?.cardData?.description}
                    </p>
                    <h1
                        
                    >₹ {data?.cardData?.price}</h1>
                    <div
                        onClick={() =>{handleEnquireNow()}}
                        style={{
                            width: '200px',
                            margin: "auto",

                        }}
                    >
                        <ButtonBackground text={'Enquire Now'} />
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            fontSize : "10px",
                            
                            margin: '10px 0'
                        }}
                    >
                       {data?.cardData?.rera}
                    </div>
                </div>
                {
                    !isBigScreen && 
                    <div
                            style={{
                                marginTop: "30px",
                                backgroundColor :"rgba(219,228,233)"
                            }}
                    
                        >
                            <h2
                                style={{
                                    textAlign: "center",
                                    marginTop: "25px",
                                    paddingTop : "10px"
                                }}
                            >Enquire Now</h2>
       

                            <form
                                style={{
                                    paddingBottom : "30px"
                                }}
                                onSubmit={handleSubmit}>
                                {/* <h4 style={{ textAlign: 'center', marginTop: '30px' }}>Enquire Now</h4> */}
                                <div style={{
                                    display: 'flex',
                                    borderBottom: '1px solid gray',
                                    margin: 'auto',
                                    marginTop: "20px",
                                    width: '90%',
                                    padding: '5px',
                                    backgroundColor: "white",
                                    height: '40px',

                                    color: 'gray',
                                    alignItems: 'center'
                                }}>
                                    <label>Name</label>
                                    <input style={{ border: "none", outline: 'none', paddingLeft: '10px' }} value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    borderBottom: '1px solid gray',
                                    margin: 'auto',
                                    marginTop: "20px",
                                    width: '90%',
                                    padding: '5px',
                                    backgroundColor: "white",
                                    height: '40px',

                                    color: 'gray',
                                    alignItems: 'center'
                                }}>
                                    <label>Email</label>
                                    <input type="email" style={{ border: "none", outline: 'none', paddingLeft: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    borderBottom: '1px solid gray',
                                    margin: 'auto',
                                    marginTop: "10px",
                                    width: '90%',
                                    padding: '5px',
                                    backgroundColor: "white",
                                    // height: '40px',

                                    color: 'gray',
                                    alignItems: 'center',
                                    marginBottom: "10px",
                                    // overflow : "hidden"
                                }}>
                                    <PhoneInput
                                        country={'in'}
                                        value={number}
                                        onChange={(value) => setNumber(value)}
                                        required
                                        style={{ border: "none!important", outline: 'none', paddingLeft: '10px' }}
                                    />
                                </div>
                                <div style={{
                                    // display: 'flex',
                                    borderBottom: '1px solid gray',
                                    margin: 'auto',
                                    marginTop: "10px",
                                    width: '90%',
                                    padding: '5px',
                                    backgroundColor: "white",
                                    // height: '40px',

                                    color: 'gray',
                                    alignItems: 'center',
                                    marginBottom: "10px",
                                    // overflow: "hidden",
                                    border : "none"
                                }}
                                
                                >
                                    <label>Let us know a time (in IST) at which our team can set up a Video Conferencing call</label>
                                    <textarea style={{ border: "none", outline: 'none', paddingLeft: '10px', width: '100%', resize: 'none' }} value={message} onChange={(e) => setMessage(e.target.value)} required />
                                </div>
                    
                                <div style={{
                                    display: 'flex',
                                    borderBottom: '1px solid gray',
                                    margin: 'auto',
                                    marginTop: "10px",
                                    width: '90%',
                                   
                                    backgroundColor: "white",
                                    height: '40px',

                                    color: 'gray',
                                    alignItems: 'center',
                                    marginBottom: "10px",
                                    overflow: "hidden"
}}>
                                    <ButtonBackground text={'Enquire Now'} type="primary" htmlType="submit" />
                                </div>
                            </form>

                    </div>
                }
               
            </div>
            <Modal
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                footer={false}
                style={

                    {
                        width: "600px"
                    }
                }
            >
                <div style={{ marginTop: "30px" }}>
                    <Logo />
                </div>
                <p style={{ padding: "30px" }}>Thank you for your enquiry. We will get back to you soon!</p>
            </Modal>
            <Modal
                visible={isEnquireModalVisible}
                onOk={handleEnquireModalOk}
                onCancel={handleEnquireModalCancel}
                footer={false}
               
            >
               <Popup/>
            </Modal>
        </div>
    );
};

export default SimpleForm;
