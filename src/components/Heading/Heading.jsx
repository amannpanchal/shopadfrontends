
import Title from 'antd/es/skeleton/Title'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Header } from 'antd/es/layout/layout'
import { getSideBarData } from '../../config/SideBarData'

const Heading = () => {
  const [heading, setHeading] = useState("")
  const location = useLocation();
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
    const filterData = getSideBarData(admin).find((data) => {
      return data.path === location.pathname
    })
    setHeading(filterData?.name);
    
  }, [location.pathname])
  
  return (
    <h2
      level={2}
      style={{
        margin: "10px",
        borderRight: "10px",
        width  :"330px"
      }}
    >
     
      {heading}
   
    </h2>
  )
}

export default Heading