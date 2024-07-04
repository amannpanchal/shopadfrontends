import React, { useState } from 'react';
import { Button, Input, Modal, DatePicker, message as antdMessage } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa';
import './SideForm.css';
import Logo from '../../component/Logo/Logo';
import { backendUrl } from '../../../config/backendUrl';
import ButtonBackground from '../../component/Buttons/ButtonBackground/ButtonBackground';
import ButtonHover from '../../component/Buttons/ButtonHover/ButtonHover';
import PopupDynamic from '../../component/popup/PopupDynamic';

const SideForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [time, setScheduleTime] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isCallbackModalVisible, setIsCallbackModalVisible] = useState(false);
    const [isVisitModalVisible, setIsVisitModalVisible] = useState(false); // New state for visit modal

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

        fetch(`${backendUrl}/sendthings`, {
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
                // Clear form
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

    const handleWhatsAppClick = () => {
        const whatsappMessage = `Hello, my name is ${name}, my email is ${email}, and my number is ${number}. I would like to get more information. ${message}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleModalOk = () => {
        setIsModalVisible(false);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    const handleCallbackRequest = () => {
        setIsCallbackModalVisible(true);
    };

    const handleCallbackModalOk = () => {
        setIsCallbackModalVisible(false);
    };

    const handleCallbackModalCancel = () => {
        setIsCallbackModalVisible(false);
    };

    const handleVisitModalOk = () => {
        setIsVisitModalVisible(false);
    };

    const handleVisitModalCancel = () => {
        setIsVisitModalVisible(false);
    };

    return (
        <div style={{ height: '100vh', position: 'sticky' }}>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <button
                    style={{ width: "100%", padding: '10px 0', border: 'none', backgroundColor: "rgba(56,56,56)", color: "white", fontSize: "13px" }}
                    onClick={() => setIsVisitModalVisible(true)} // Open visit modal
                >
                    Organised Site Visit
                </button>
                <button
                    style={{ width: "100%", padding: '10px 0', border: 'none', backgroundColor: "rgba(56,56,56)", color: "white", fontSize: "13px", marginLeft: "2px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={handleWhatsAppClick}
                >
                    <FaWhatsapp style={{ marginRight: '5px', fontSize: "15px", color: "green" }} /> Whatsapp Now
                </button>
            </div>

            <div style={{ backgroundColor: 'rgba(243,243,243)', height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: "100%", margin: "auto", padding: "20px 0 " }}>
                <ButtonHover text="Call : +918397962296" />
                <div style={{ backgroundColor: 'rgba(243,243,243)', height: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: "80%", margin: "auto", marginTop: "10px" }}
                    onClick={handleCallbackRequest}
                >
                    <ButtonBackground text="Request for Call Back" onClick={handleCallbackRequest} />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Enquire Now</h2>
                <div style={{ display: 'flex', borderBottom: '1px solid GRAY', margin: 'AUTO', width: '80%', color: 'gray', marginBottom: "20px" }}>
                    <label>Name</label>
                    <input style={{ border: "none", outline: 'none', paddingLeft: '10px' }} value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{ display: 'flex', borderBottom: '1px solid GRAY', margin: 'AUTO', width: '80%', color: 'gray', marginBottom: "10px" }}>
                    <label>Email</label>
                    <input type="email" style={{ border: "none", outline: 'none', paddingLeft: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div style={{ display: 'flex', borderBottom: '1px solid GRAY', margin: 'AUTO', width: '80%', color: 'gray', marginBottom: "20px" }}>
                    <PhoneInput
                        country={'in'}
                        value={number}
                        onChange={(value) => setNumber(value)}
                        required
                        style={{ border: "none!important", outline: 'none', paddingLeft: '1px' }}
                    />
                </div>
                <div style={{ display: 'flex', marginTop: '20px', margin: 'auto', width: '80%', color: 'gray', flexDirection: 'column', marginBottom: '10px' }}>
                    <label
                        style={{
                            fontSize: "10px"
                        }}
                    >Let us know a time (in IST) at which our team can set up a Video Conferencing call</label>
                    <textarea style={{
                        borderTop: "0 solid black",
                        borderLeft: "0 solid black",
                        borderRight: "0 solid black",
                        borderBottom: '1px solid gray', outline: 'none', paddingLeft: '10px', width: '100%', resize: 'none'
                    }} value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div style={{ width: "80%", margin: "auto", marginTop: "10px" }}>
                    <ButtonBackground text={'Enquire Now'} type="primary" htmlType="submit" />
                </div>
            </form>

            <Modal
                visible={isCallbackModalVisible}
                onOk={handleCallbackModalOk}
                onCancel={handleCallbackModalCancel}
                footer={null}
            >
                <PopupDynamic
                    heading={"Request For Call Back"}
                    button="Request Call Now"
                />
            </Modal>

            <Modal
                visible={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                footer={null}
            >
                <div style={{ marginTop: "30px" }}>
                    <Logo />
                </div>
                <p style={{ padding: "30px" }}>Thank you for your enquiry. We will get back to you soon!</p>
            </Modal>

            {/* New Modal for Organised Site Visit */}
            <Modal
                visible={isVisitModalVisible}
                onOk={handleVisitModalOk}
                onCancel={handleVisitModalCancel}
                footer={null}
            >
                <div>
                    <PopupDynamic
                        heading={"Request For Organize Site Visit"}
                        button ={"Request Site Visit"}
                    
                    />
                </div>
            </Modal>
        </div>
    );
};

export default SideForm;
