import React, { useEffect, useState } from 'react';

import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import './SideBar.css';
import { getSideBarData } from '../../config/SideBarData';

const { Sider } = Layout;

const SiderBar = ({collapsed,setCollapsed}) => {

    const location = useLocation();
    const [activeKey, setActiveKey] = useState('0');
    const [admin, setAdmin] = useState("")


    useEffect(() => {
        const adminData = localStorage.getItem("admindata");

        try {
            const parsedData = JSON.parse(adminData);

            if (parsedData && typeof parsedData === 'object') {
                setAdmin(parsedData);
            } else {
                console.error("Invalid admin data structure");

                localStorage.removeItem("admindata");
            }
        } catch (error) {
            console.error("Error parsing admin data:", error);
            localStorage.removeItem("admindata");
        }
    }, []);

    useEffect(() => {
        const path = location.pathname;
        console.log('the path is', path)
        const mainFilter = getSideBarData(admin).find((data) => data.path === path);
        if (mainFilter) {
            setActiveKey(mainFilter.id);
        }
    }, [location.pathname]);  
    useEffect(() => {
        console.log("a", getSideBarData(admin))
    
},[])
    return (
        <Sider
            width={250}
            style={{
                height: "91vh"
            }}
            className="site-layout-background sider-bar"
            collapsed={collapsed}
            breakpoint="md"
            onBreakpoint={(broken) => {
                if (broken) setCollapsed(true);
            }}
        >
          
            <Menu
                mode="inline"
                selectedKeys={[activeKey]}  
                className="sider-menu"
            >
                {getSideBarData(admin).map((data) =>
                

                {
        
                   return  (
                    <Menu.Item key={data.id} icon={data.icon}>
                        <Link to={data.path}>
                            {data.name}
                        </Link>
                    </Menu.Item>
                )
                }
                
                )}
            </Menu>
        </Sider>
    );
};

export default SiderBar;
