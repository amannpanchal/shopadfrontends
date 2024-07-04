import React from 'react';
import Heading from '../../component/Heading/Heading';
import { data } from '../../../config/data';
import GalleryImage from '../../component/GalleryImage/GalleryImage';
import { Col, Row } from 'antd';

const GallerySection = () => {
  return (
    <div className='container'>
      <Heading heading={data?.gallery?.heading} />
      <Row gutter={[16, 16]}>
        {data?.gallery?.images?.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={6}>
            <GalleryImage
              imageLink={item?.imageLink}
              bottomSideHeading={item?.bottomSideHeading}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GallerySection;
