import React, { useEffect, useState } from 'react'
import HeroSection from '../../Sections/HeroSection/HeroSection'
import PriceSection from '../../Sections/PriceSection/PriceSection'
import SiteFloorSection from '../../Sections/SiteFloorSection/SiteFloorSection'
import AmenitiesSection from '../../Sections/AmenitiesSection/AmenitiesSection'
import GallerySection from '../../Sections/GallerySection/GallerySection'
import LocationSection from '../../Sections/LocationSection/LocationSection'
import VirtualSiteSection from '../../Sections/VirtualSiteSection/VirtualSiteSection'
import Navbar from '../../Sections/Navbar/Navbar'
import FooterSection from '../../Sections/FooterSection/FooterSection'
// import CallingFooter from '../../component/callingFooter/callingFooter'

const LeftSide = () => {
    const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 700);

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
      <div>
          
          <Navbar/>

          <section id="heroSection">
          <HeroSection />
          </section>
          <section id="priceSection">
              <PriceSection />
          </section>
          <section id="SiteFloorSection">
              <SiteFloorSection />
          </section>
          <section id="amenitiesSection">
              <AmenitiesSection />
          </section>
          <section id="gallerySection">
              <GallerySection />
          </section>
          <section id="locationSection">
              <LocationSection />
          </section>
          <section id="virtualSiteSection">
              <VirtualSiteSection />
          </section>
          <FooterSection />
          {/* {
              !isBigScreen && 
              
  <CallingFooter/>
          }
       */}
      </div>
  )
}

export default LeftSide