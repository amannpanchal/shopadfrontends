import { Card, Col, Row, Typography, Space, Image } from 'antd';

const { Title, Text } = Typography;

const OfferDetails = ({ editingRecord }) => {
    return (
        <Card title="Offer Details" style={{ margin: '20px' }}>
            <Row gutter={16}>
                <Col span={24}>
                    {/* Description */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Description:</Title>
                        <Text>{editingRecord?.description || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Location */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Location:</Title>
                        <Text>{editingRecord?.location || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Start Date */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Start Date:</Title>
                        <Text>{editingRecord?.startDate ? new Date(editingRecord.startDate).toLocaleDateString() : 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* End Date */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>End Date:</Title>
                        <Text>{editingRecord?.endDate ? new Date(editingRecord.endDate).toLocaleDateString() : 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Price */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Price:</Title>
                        <Text>{editingRecord?.price || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Status */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Status:</Title>
                        <Text>{editingRecord?.status || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Package */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Package:</Title>
                        <Text>{editingRecord?.package || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Offer Code */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Offer Code:</Title>
                        <Text>{editingRecord?.code || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Latitude */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Latitude:</Title>
                        <Text>{editingRecord?.latitude || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Longitude */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Longitude:</Title>
                        <Text>{editingRecord?.longitude || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Category */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Category:</Title>
                        <Text>{editingRecord?.categoryId || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Shop */}
                    <Space direction="horizontal" align="center" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Title level={4} style={{ margin: 0 }}>Shop:</Title>
                        <Text>{editingRecord?.shopId || 'N/A'}</Text>
                    </Space>
                    <br />

                    {/* Offer Images */}
                    <Title level={4} style={{ margin: 0 }}>Offer Images:</Title>
                    <Space size="middle">
                        {editingRecord?.offerImage && <Image width={100} src={editingRecord.offerImage} alt="Offer Image" />}
                        {editingRecord?.offerImage1 && <Image width={100} src={editingRecord.offerImage1} alt="Offer Image 1" />}
                     
                    </Space>
                    <Space size="middle">
                 
                        {editingRecord?.offerImage2 && <Image width={100} src={editingRecord.offerImage2} alt="Offer Image 2" />}
                        {editingRecord?.offerImage3 && <Image width={100} src={editingRecord.offerImage3} alt="Offer Image 3" />}
                 
                    </Space>
                    <Space size="middle">
                 
                   
                        {editingRecord?.offerImage4 && <Image width={100} src={editingRecord.offerImage4} alt="Offer Image 4" />}
                    </Space>
                </Col>
            </Row>
        </Card>
    );
};

export default OfferDetails;
