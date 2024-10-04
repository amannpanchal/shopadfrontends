import { MenuUnfoldOutlined, BellOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const { confirm } = Modal;

const Navbar = ({ collapsed, setCollapsed }) => {

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
  

    const showLogoutConfirm = () => {
        confirm({
            title: 'Are you sure you want to log out?',
            content: 'Once you log out, you will need to log back in to access the dashboard.',
            okText: 'Yes, log out',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                onLogout();
            },
            onCancel() {
                console.log('Logout cancelled');
            },
        });
    };

    const onLogout = () => {
        localStorage.removeItem('admintoken');
        localStorage.removeItem('admindata');
        localStorage.removeItem('adminid');
        window.location.reload();
    };








    return (
        <Header style={{
            position: 'sticky',
            top: '0',
            zIndex: '3',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Logo />
                <Button
                    style={{
                        marginLeft: '20px',
                    }}
                    type="text"
                    onClick={toggleCollapsed}
                >
                    <MenuUnfoldOutlined
                        style={{
                            fontSize: "25px",
                            color: "white"
                        }}
                    />
                </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Notification Icon */}
                {/* <Button
                    type="text"
                    style={{
                        marginRight: '20px',
                    }}
                >

                    <Link
                    to ="/notification"
                    >
                    
                    <BellOutlined
                        style={{
                            fontSize: "25px",
                            color: "white"
                        }}
                        />
                        </Link>
                </Button> */}

                {/* Logout Button */}
                <Button
                    type="text"
                    onClick={showLogoutConfirm}
                    style={{
                        marginRight: '20px',
                    }}
                >
                    <LogoutOutlined
                        style={{
                            fontSize: "25px",
                            color: "white"
                        }}
                    />
                </Button>
            </div>
        </Header>
    );
}

export default Navbar;
