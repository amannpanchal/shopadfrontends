import React, { useState } from 'react'
import Heading from '../../component/Heading/Heading'
import { data } from '../../../config/data'
import './SiteFloorSection.css'
import { Col, Modal, Row } from 'antd'
import ButtonBackground from '../../component/Buttons/ButtonBackground/ButtonBackground'
import PopupDynamic from '../../component/popup/PopupDynamic'
const SiteFloorSection = () => {
  const [masterPlanVisible, setMasterPlanVisible] = useState(false);
  const [enquireNowVisible, setEnquireNowVisible] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const handleMasterPlanClick = (index) => {
    setCurrentPlan(data?.siteAndFloorPlan?.plans[index]);
    setMasterPlanVisible(true);
  };

  const handleEnquireNowClick = (index) => {
    setCurrentPlan(data?.siteAndFloorPlan?.plans[index]);
    setEnquireNowVisible(true);
  };

  return (
    <div
      className='container'
      style={{
        
      }}
    
    >
      <Heading
        heading={data?.siteAndFloorPlan?.heading}
      />
      <Row> 

        <Col xs={24} md={7} >

          <Col
            xs={22}
            style={{
              margin: "auto",
              marginBottom: "20px"
            }}


          >
            <h1
              style={{
                marginBottom: '20px',
                fontWeight: "300"
              }}
            >
              {data?.siteAndFloorPlan?.plans[0]?.heading}

            </h1>
            <div className="image-container">
              <img
                style={{
                  height: "280px"
                }}
                src={data?.siteAndFloorPlan?.plans[0]?.imageLink} alt="Site Plan" />

              <div className="overlay"></div>
              <button
                onClick={() => handleMasterPlanClick(0)}
                className="button">View Master Plan</button>
            </div>
          </Col>
        </Col>
        <Col xs={24} md={7} >

          <Col
            xs={22}
            style={{
              margin: "auto",
              marginBottom: "20px"
            }}
          >
            <h1
              style={{
                marginBottom: '20px',
                fontWeight: "300"
              }}
            >
              {data?.siteAndFloorPlan?.plans[1]?.heading}
            </h1>
            <div className="image-container">
              <img
                
                style={{
                  height : "240px"
                }}
                src={data?.siteAndFloorPlan?.plans[1]?.imageLink} alt="Site Plan" />
              <div className="overlay"></div>
              <button
                onClick={() => handleMasterPlanClick(1)}
                
                className="button">Enquire Now</button>
            </div>
              <ButtonBackground
              onClick={() => handleMasterPlanClick(1)}
                text = {"4.5 BHK"}
                
              />
          </Col>
        </Col>
      </Row>
      <Modal
        // title={currentPlan?.heading}
        
        visible={masterPlanVisible}
        onCancel={() => setMasterPlanVisible(false)}
        footer={null}
        width={800}
      >
        {
          currentPlan?.heading === "Master Plan" ?
            <img src={currentPlan?.imageLink} alt='Master Plan' style={{ width: '100%' }} /> : <>
              <PopupDynamic
                heading={"Request for plan Details"}
                button={"Request for plan details"}
              />
            </>
        }
      </Modal>

  
      <Modal
        title={currentPlan?.heading}
        visible={enquireNowVisible}
        onCancel={() => setEnquireNowVisible(false)}
        footer={null}
      >
        <p>Content for Enquire Now goes here...</p>
      </Modal>
    </div>
  );
}

export default SiteFloorSection;
