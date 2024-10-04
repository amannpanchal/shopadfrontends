import { Layout, Spin } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SiderBar from "../components/SideBar/SiderBar";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading/Heading";

const PrivateRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // useEffect(() => {
  //   const authToken = localStorage.getItem("admintoken");
  //   if (authToken) {
  //     setIsAuthenticated(true); // Set isAuthenticated to true if token exists
  //   }
  //   setIsLoading(false); // Set isLoading to false after checking
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <Spin size="large" />
  //     </div>
  //   );
  // }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; 
  }

  return (
    <Layout>
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <SiderBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ padding: "20px" }}>
          <Heading />
          {element}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateRoute;
