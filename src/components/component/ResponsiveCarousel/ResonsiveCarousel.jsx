import React from 'react';
import { Carousel, Image } from 'antd';
import { useMediaQuery } from 'react-responsive';
import './ResponsiveCarousel.css'
import { data } from '../../../config/data';

const ResponsiveCarousel = ({ images }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1199px)' });
    const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

    const getImagesPerSlide = () => {
        if (isBigScreen) return 6;
        if (isMediumScreen) return 4;
        if (isSmallScreen) return 2;
        return 2;
    };

    const imagesPerSlide = getImagesPerSlide();
    const slides = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
        slides.push(images.slice(i, i + imagesPerSlide));
    }

    const getGridTemplate = () => {
        if (isBigScreen) return 'repeat(2, 1fr) / repeat(3, 1fr)';
        if (isMediumScreen) return 'repeat(2, 1fr) / repeat(2, 1fr)';
        return 'repeat(2, 1fr) / repeat(1, 1fr)';
    };

    const gridTemplate = getGridTemplate();

    return (
        <Carousel
            autoplay
            arrows
         
        
        >
            {slides.map((slide, index) => (
                <div 
                    
                
                    key={index} className="carousel-slide">
                    
                    <div

                        style={{
                            display: 'grid',
                            gridTemplate: gridTemplate,
                        position : 'relative'
                          
                        }}
                    
                    >
                        

                        {slide.map((image, idx) => {
                        
                            
                            return (
                            
                            <div
                            
                                style={{
                                   
                                    // overflow: 'hidden',
                                        margin: "5px",
                                    position : "relative"
                                }} >
                            
                            <Image
                            key={idx} 
                            src={image?.imageLink} 
                            alt={`slide-${index}-image-${idx}`} 
                                    style={{ width: '100%', borderRadius: "20px", }} 
                                />
                                <h1
                                    style={{
                                        position: 'absolute',
                                            bottom: "30px",
                                            borderLeft: "5px solid rgba(2,43,45)",
                                            paddingLeft: '2px',
                                            color: "white",
                                            left : "10px"
                                        
                                    }}
                                
                                >
                                        {image?.bottomSideHeading}
                                    </h1>
                            </div>
                        )
                        }
                        
                        )}
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default ResponsiveCarousel;
