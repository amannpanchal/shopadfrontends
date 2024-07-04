import { Carousel, Modal } from 'antd';
import React, { useState } from 'react';
import { data } from '../../../config/data';
import Heading from '../../component/Heading/Heading';
import ButtonHover from '../../component/Buttons/ButtonHover/ButtonHover';
import ButtonBackground from '../../component/Buttons/ButtonBackground/ButtonBackground';
import PhoneInput from 'react-phone-input-2';
import SimpleForm from '../../component/SimpleForm/SimpleForm';
import PopupDynamic from '../../component/popup/PopupDynamic';

const HeroSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div >
      <Carousel autoplay>
        {data?.heroSection?.imageLink?.map((item, index) => (
          <div key={index} style={{ width: '100%' }}>
            <img src={item} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Carousel>
      <SimpleForm />

      <div
        style={{
          marginTop : "-8px"
        }}
      
        
        className='container'>
        <Heading heading={data?.heroSection?.heading} />
        <h1
          style={{
            fontSize: '30px',
            color: "rgba(2,43,45)"
        }}
        
        >{data?.heroSection?.addressHeading}</h1>
        <h3
          style={{
            margin: "15px 0",

            color: "rgba(2,43,45)"
          }}
        
        >{data?.heroSection?.addressSubHeading}</h3>
        <p>{data?.heroSection?.description}</p>
        <div
        
          onClick={showModal} 
          style={{ width: "300px", marginTop: '20px' }}>
          <ButtonHover icon = {true}  text={data?.heroSection?.button} />
        </div>
      </div>

      <Modal
        
        footer ={false}
        

        visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PopupDynamic
          heading={"Request For Download Brochure"}
          button={"Request Brochure"}
        />
      </Modal>
    </div>
  );
};

export default HeroSection;
