import React, { useState } from 'react';
import { Row, Col, Card, Modal } from 'antd';
import Heading from '../../component/Heading/Heading';
import { data } from '../../../config/data';
import VideoView from '../../component/VideoView/VideoView';
import PopupDynamic from '../../component/popup/PopupDynamic';

const VirtualSiteSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (item) => {
    setSelectedVideo(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedVideo(null);
  };

  return (
    <div className='container'>
      <Heading heading="Virtual Tour" />
      <Row gutter={[16, 16]}>
        {data?.virtualSiteTour?.items?.map((item, index) => (
          <Col style={{
            margin: '10px auto'
          }} key={index} xs={23} md={10}
            onClick={() => handleVideoClick(index)}
          
          >

            <VideoView
              heading={item?.heading}
              subHeading={item?.subHeading}
              topSideHeading={item?.topSideHeading}
              backgroundImage={item?.backgroundImage}
            />
          </Col>
        ))}
      </Row>
      <Modal
        visible={modalVisible}
        title={selectedVideo?.heading}
        onCancel={closeModal}
        footer={null}
      >
        {
          selectedVideo === 0 ? <PopupDynamic
            heading ={"Request For Virtual Site Taur"}
            button={"Virtual Site Tour"}
          /> : <PopupDynamic
              heading={"Request For Virtual Sample Flat"}
              button ={"Sample Flat"}
          />
        }
       
      </Modal>
    </div>
  );
};

export default VirtualSiteSection;
