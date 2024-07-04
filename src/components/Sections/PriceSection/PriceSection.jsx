import React, { useEffect, useState } from 'react';
import { Col, Modal } from 'antd';
import Heading from '../../component/Heading/Heading';
import ButtonBackground from '../../component/Buttons/ButtonBackground/ButtonBackground';
import ButtonHover from '../../component/Buttons/ButtonHover/ButtonHover';
import { data } from '../../../config/data';
import PopupDynamic from '../../component/popup/PopupDynamic';

const PriceSection = () => {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 700);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItemType, setSelectedItemType] = useState(null);

  const showModal = (type) => {
    setSelectedItemType(type);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container'>
      <Heading heading="Price" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col xs={24} md={16}>
        
          {isBigScreen ? <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Type</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>SBA</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
              </tr>
            </thead>
            <tbody
              style={{
                backgroundColor: "rgba(219,228,233)"
              }}
            
            >
              {data?.price?.plans?.map((item) => (
                <tr key={item.type}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item?.type}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{item.sba}</td>
                  <td style={{
                    border: '1px solid black',
                    padding: '8px',
                    justifyContent: "space-between",
                    display: "flex"
                  }}>
                    <div style={{
                      width: 'content-fit',
                      minWidth: "80px",
                      marginBottom: "10px",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      {item?.price}
                    </div>
                    <div
                    
                      style={{
                        width: "70%"
                      }}
                      onClick={() => showModal("Costing Breakup")}>
                      <ButtonBackground table={true} text={item?.button} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> : <>

              {
                data?.price?.plans?.map((e) => {
                  return <div
                    style={{
                      display: 'flex',
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection : 'column'
                    }}
                    
                    key={e.type}>
                    <h1
                      style={{
                        margin: " 5px 0",
                        color:"rgba(2,43,45)"
                      }}
                    
                    
                    >{e?.type}</h1>
                    <p
                      style={{
                        margin: " 5px 0",
                        color: "rgba(2,43,45)"
                      }}
                    
                    >{e?.sba}</p>
                    <h2
                    
                      style={{
                        margin: " 1px 0",
                        color: "rgba(2,43,45)"
                      }}
                    >{e?.price}</h2>
                    <div
                      style={{
                        width: "70%",
                        margin : "7px 0"
                      }}
                      onClick={() => showModal("Costing Breakup")}
                    >
                      <ButtonBackground table={true} text={e?.button} />
                    </div>
                  </div>;
                })
}


          </>
          
          }
        </Col>
        <Col
          xs={24} md={8}
          style={{
            display: 'flex',
            flexDirection: "column",
            padding: '0 20px '
          }}
        >
          <img
            style={{
              width: "100%",
              height: "200px",
              marginBottom: "10px"
            }}
            src="https://golfhill-gurgaon.com/m3m/assets/img/comman/sample/costing-details-320w.webp"
            alt="Costing details"
          />
          <div
            onClick={() => showModal(
              "Costing Details"
            )}
          
          >
            <ButtonBackground text="Request costing completing requesting" />
          </div>
        </Col>
      </div>
      <Modal
        footer={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PopupDynamic
          heading={`Request For ${selectedItemType} `}
          button={`Request ${selectedItemType}`}
        />
      </Modal>
    </div>
  );
}

export default PriceSection;
