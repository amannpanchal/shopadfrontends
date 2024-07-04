import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import SideForm from "./components/Sides/RightSide/SideForm";
import LeftSide from "./components/Sides/LeftSide/LeftSide";
import Loader from "./components/component/Loader/Loader";

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(true); // State for tracking image loading

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1150);
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    useEffect(() => {
      const loadImage = () => {
        
        setTimeout(() => {
          setImagesLoading(false); 
        }, 2000);
      };

      loadImage();
    }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {imagesLoading ? (
        <>
          <Loader/>
        </>
      ) : (
        <>
          <div
            style={
              isSmallScreen
                ? {
                    width: "100vw",
                  }
                : {
                    width: "77vw",
                  }
            }
          >
            <LeftSide />
          </div>
          {!isSmallScreen && (
            <div
              style={{
                width: "23vw",
                position: "sticky",
                height: "100vh",
                backgroundColor: "white",
                top: "0",
              }}
            >
              <SideForm />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;

