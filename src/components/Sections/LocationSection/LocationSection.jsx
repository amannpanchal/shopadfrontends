import React, { useState } from 'react';
import Heading from '../../component/Heading/Heading';
import { data } from '../../../config/data';
import { Row, Col, Modal } from 'antd';
import ButtonHover from '../../component/Buttons/ButtonHover/ButtonHover';
import ButtonBackground from '../../component/Buttons/ButtonBackground/ButtonBackground';
import PopupDynamic from '../../component/popup/PopupDynamic';

const LocationSection = () => {
  const [mapModalVisible, setMapModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openMapModal = () => {
    setMapModalVisible(true);
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setImageModalVisible(true);
  };

  const closeMapModal = () => {
    setMapModalVisible(false);
  };

  const closeImageModal = () => {
    setImageModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <div className='container'>
      <Heading heading={data?.location?.heading} />
      <div style={{ margin: 'auto' }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={13}>
            <iframe
              src={data?.location?.mapView?.mapLink}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div
            
              onClick={openMapModal}>
           
            <ButtonHover
              text={data?.location?.locationMap?.button}
            
              />
            </div>
          </Col>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
            xs={24}
            md={10}
          >
            <img
              style={{ width: '100%', margin: 'auto', height: '250px', cursor: 'pointer' }}
              src={data?.location?.locationMap?.imageLink}
              onClick={() => openImageModal(data?.location?.locationMap?.imageLink)

              }
            />
            <div
              onClick={() => openImageModal(data?.location?.locationMap?.imageLink)}
            
            >
              <ButtonBackground
                text={data?.location?.locationMap?.button}
              
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Map Modal */}
      <Modal
        visible={mapModalVisible}
        onCancel={closeMapModal}
        footer={null}
        centered
      >
        <PopupDynamic
          heading={"Know More About Location"}
          button={"Location Detail"}
        
        />
      </Modal>

      {/* Image Modal */}
      <Modal
        visible={imageModalVisible}
        onCancel={closeImageModal}
        footer={null}
        centered
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Location Image"
            style={{ width: '100%' }}
          />
        )}
      </Modal>
    </div>
  );
};

export default LocationSection;
