
import React, { useEffect, useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { HiCurrencyRupee } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoCall, IoCheckmarkCircleSharp } from 'react-icons/io5';
import { DatePicker, message as antdMessage } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Logo from '../Logo/Logo';
import ButtonBackground from '../Buttons/ButtonBackground/ButtonBackground';

const PopupDynamic = ({
    heading,button
}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [time, setScheduleTime] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 955);
        };

        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !number || !message || !time) {
            antdMessage.error('Please fill in all required fields.');
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

        fetch('http://localhost:5003/sendthings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div
          
        
        >
            <div
                style={
                    !isSmallScreen ?
                        {
                            display: 'grid',
                            width: "100%",
                            gridTemplateColumns: "1fr 8fr 4fr",
                            height: '430px'
                        } : {
                            display: 'grid',
                            width: "100%",
                            gridTemplateColumns: "1fr 8fr ",
                            height: '470px'

                        }
                }

            >
                <div
                    style={{
                        backgroundColor: "rgba(249,249,249)",
                        padding: '5px',
                        display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: "center",
                        flexDirection: "column"


                    }}
                >



                    <h3
                        style={{
                            textAlign: 'center',
                            padding: "20px 10px"
                        }}

                    >We Promise</h3>
                    <div
                        style={{
                            margin: "20px 10px"
                        }}
                    >
                        <RiCustomerService2Fill
                            style={{
                                fontSize: '2rem',
                                display: 'flex',
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                color: "rgba(2,43,45)"
                            }}


                        />
                        <h4

                            style={{

                                display: 'flex',
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",

                            }}
                        >Instant Call Back</h4>
                    </div>
                    <div
                        style={{
                            margin: "20px 10px"
                        }}

                    >
                        <FaCar
                            style={{
                                fontSize: '2rem',
                                display: 'flex',
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                color: "rgba(2,43,45)"
                            }}
                        />
                        <h4
                            style={{

                                display: 'flex',
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",

                            }}
                        >Free Site Visit</h4>
                    </div>
                    <div
                        style={{
                            margin: "20px 10px"
                        }}

                    >
                        <HiCurrencyRupee
                            style={{
                                fontSize: '2rem',
                                display: 'flex',
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                color: "rgba(2,43,45)"
                            }}

                        />
                        <h4
                            style={{

                                display: 'flex',
                                textAlign: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",

                            }}

                        >Unmatched Price</h4>
                    </div>

                </div>



                <div
                    style={{
                        marginTop: "10px",
                        padding: '2px'
                    }}
                >
                    <Logo />
                    <div
                        style={{
                            textAlign: "center",

                            border: "2px solid rgba(2,43,45)",
                            borderRadius: "25px",
                            fontWeight: "bold",
                            width: "80%",
                            margin: "auto",
                            marginTop: "10px",
                            padding : "2px"

                        }}

                    >
                    {heading}
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h4 style={{ textAlign: 'center', marginTop: '20px' }}></h4>
                            <div style={{ display: 'flex', borderBottom: '1px solid gray', margin: 'auto', width: '80%', color: 'gray', marginBottom: '15px' }}>
                                <label>Name</label>
                                <input style={{ border: 'none', outline: 'none', paddingLeft: '10px' }} value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div style={{ display: 'flex', borderBottom: '1px solid gray', margin: 'auto', width: '80%', color: 'gray', marginBottom: '15px' }}>
                                <label>Email</label>
                                <input type="email" style={{ border: 'none', outline: 'none', paddingLeft: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div style={{ display: 'flex', borderBottom: '1px solid gray', margin: 'auto', width: '80%', color: 'gray', marginBottom: '10px' }}>
                                <PhoneInput
                                    country={'in'}
                                    value={number}
                                    onChange={(value) => setNumber(value)}
                                    required
                                    inputStyle={{ border: 'none', outline: 'none', width: '100%' }}
                                />
                            </div>
                            <div style={{ display: 'flex', marginTop: '20px', margin: 'auto', width: '80%', color: 'gray', flexDirection: 'column', marginBottom: '10px' }}>
                                <label
                                    style={{
                                        fontSize: "10px"
                                    }}

                                >Let us know a time (in IST) at which our team can set up a Video Conferencing call</label>
                                <textarea style={{
                                    borderTop: "0 solid black",

                                    borderLeft: "0 solid black",
                                    borderRight: "0 solid black",

                                    borderBottom: '1px solid gray', outline: 'none', paddingLeft: '10px', width: '100%', resize: 'none'
                                }} value={message} onChange={(e) => setMessage(e.target.value)} required />
                            </div>
                           
                            <div style={{ width: '80%', margin: 'auto', marginTop: '28px' }}>
                                <ButtonBackground text={button} type="primary" htmlType="submit" />
                            </div>
                        </form>
                    </div>
                </div>

                {
                    !isSmallScreen &&
                    <div

                        style={{
                            backgroundColor: "rgba(2,43,45)",
                            color: 'white',
                            padding: "10px",
                            textAlign: "center",
                            paddingTop: "20px",

                        }}

                    >
                        <h2>Get Information about Availabilities</h2>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                marginTop: "50px"
                            }}

                        >


                            <div
                                style={{

                                    width: "100%",
                                    display: 'flex',
                                    // justifyContent: 'center',
                                    alignItems: "center",
                                    marginTop: "10px",
                                    fontSize: "16px"
                                }}


                            >
                                <IoCheckmarkCircleSharp /> Available Units
                            </div>
                            <div
                                style={{

                                    width: "100%",
                                    display: 'flex',
                                    // justifyContent: 'center',
                                    alignItems: "center",
                                    marginTop: "10px",
                                    fontSize: "16px"

                                }}
                            >
                                <IoCheckmarkCircleSharp /> Payment Plan
                            </div>
                            <div
                                style={{

                                    width: "100%",
                                    display: 'flex',
                                    // justifyContent: 'center',
                                    alignItems: "center",
                                    marginTop: "10px",
                                    fontSize: "16px"
                                }}

                            >
                                <IoCheckmarkCircleSharp /> Floor Plan
                            </div>
                        </div>
                    </div>


                }


            </div>


            {/* <div

                style={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(2,43,45)",
                    color: "white",
                    position: 'relative',
                    // bottom: " 13px",
                    padding: "10px"
                }}

            >
                <IoCall
                    style={{
                        fontSize: "14px",
                        marginRight: "10px",

                    }}
                />
                <h4>Call Us</h4>
            </div> */}
        </div>
    );
};

export default PopupDynamic;
