import React, { useState } from 'react';
import { Menu, Dropdown, Button, Modal } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { FaHome } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GrGallery } from "react-icons/gr";
import { FaWifi } from "react-icons/fa";
import { Link } from 'react-scroll';
import Logo from '../../component/Logo/Logo';
import './Navbar.css';
import { PiBuildingsDuotone } from 'react-icons/pi';
import { IoDownloadOutline } from 'react-icons/io5';
import Popup from '../../component/popup/popup';
import PopupDynamic from '../../component/popup/PopupDynamic';

const Navbar = () => {
  const [current, setCurrent] = useState('heroSection');
  const [isEnquireModalVisible, setIsEnquireModalVisible] = useState(false); // S


  const handleEnquireNow = () => {
    setIsEnquireModalVisible(true); // Show the Enquire Now modal
  };

  const handleEnquireModalOk = () => {
    setIsEnquireModalVisible(false);
  };

  const handleEnquireModalCancel = () => {
    setIsEnquireModalVisible(false);
  };


  const menus = [
    {
      id: "heroSection", logo: <FaHome
        style={{
          fontSize: "20px"
        }}
      
      />, label: ""
    },
    {
      id: "priceSection", logo: <GiReceiveMoney
        style={{
          fontSize: "20px"
        }}
      />, label: "Price"
    },
    {
      id: "SiteFloorSection", logo:
      
        <HiBuildingOffice2
          style={{
            fontSize: "20px"
          }}
        />, label: "Site Plan"
    },
    {
      id: "amenitiesSection", logo: <FaWifi
        style={{
          fontSize : "20px"
        }}
      
      />, label: "Amenities"
    },
    {
      id: "gallerySection", logo: <GrGallery
        style={{
          fontSize: "20px"
        }}
      
      />, label: "Gallery"
    },
    {
      id: "virtualSiteSection", logo: <GrGallery
        style={{
          fontSize: "20px"
        }}
      />, label: "Virtual Tour"
    },
  ];

  const handleSetActive = (id) => {
    setCurrent(id);
  };

  return (
    <div className="navbar">
  
      <div className="menu-desktop">
        <Menu  className='menuDesktopList' mode="horizontal" selectedKeys={[current]}>
          <Menu.Item>
<Logo />
            
</Menu.Item>
          {menus.map((menu) => (
            <Menu.Item key={menu.id} icon={menu.logo}>
              <Link
                activeClass="active"
                to={menu.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => handleSetActive(menu.id)}
              >
                
                {menu?.label && <>{menu.label}</> }
              </Link>
            </Menu.Item>
          ))}

          <Menu.Item
            icon={   <IoDownloadOutline
                className="animated-icon" style={{ fontSize: '20px' }} />
              }
              onClick ={handleEnquireNow}
          
          >
           
              
              Download Brochure
            
</Menu.Item>



         
        </Menu>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom  : '20px'
        }}
        className="menu-mobile">
        <Logo />
        <Dropdown overlay={
          <Menu selectedKeys={[current]}>
            {menus.map((menu) => (
              <Menu.Item key={menu.id} icon={menu.logo}>
                <Link
                  activeClass="active"
                  to={menu.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive(menu.id)}
                >
                  {menu.label}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        } trigger={['click']}>
          <Button icon={<MenuOutlined />}></Button>
        </Dropdown>
      </div>

      <Modal
        visible={isEnquireModalVisible}
        onOk={handleEnquireModalOk}
        onCancel={handleEnquireModalCancel}
        footer={false}
       
      >
        <PopupDynamic
          heading={"Request For Download Brochure"}
          button={"Request Brochure"}
        />
      </Modal>
    </div>
  );
};

export default Navbar;
