import React from 'react';
import { Card, Row, Col, Typography, List, Image } from 'antd';

const { Title, Text } = Typography;

const DetailseditingRecord = ({ editingRecord }) => {
    if (!editingRecord) {
        return <Text>No editingRecord details available.</Text>;
    }

    return (
        <Card title="Details" style={{ margin: '20px' }}>
            <Row gutter={16}>
                <Col span={12}>
                    <Title level={4}>Basic Information</Title>
                    <Text strong>Description: </Text> <Text>{editingRecord.description}</Text>
                    <br />
                    <Text strong>Owner: </Text> <Text>{editingRecord.ownerId?.name || 'Not provided'}</Text>
                    <br />
                    <Text strong>Shop Name: </Text> <Text>{editingRecord.shopName}</Text>
                    <br />
                    <Text strong>Designation: </Text> <Text>{editingRecord.designationName}</Text>
                    <br />
                    <Text strong>Shift Time: </Text> <Text>{editingRecord.shiftTime}</Text>
                    <br />
                    <Text strong>Contact Number: </Text> <Text>{editingRecord.contactNumber}</Text>
                    <br />
                    <Text strong>Contact Email: </Text> <Text>{editingRecord.contactEmail}</Text>
                    <br />
                    <Text strong>Salary: </Text> <Text>{editingRecord.salary}</Text>
                    <br />
                    <Text strong>Status: </Text> <Text>{editingRecord.status}</Text>
                    <br />
                    <Text strong>Active: </Text> <Text>{editingRecord.isActive ? 'Yes' : 'No'}</Text>
                </Col>

                <Col span={12}>
                    <Title level={4}>Location</Title>
                    <Text strong>Address: </Text> <Text>{editingRecord.location}</Text>
                    <br />
                    <Text strong>Latitude: </Text> <Text>{editingRecord.latitude || 'Not provided'}</Text>
                    <br />
                    <Text strong>Longitude: </Text> <Text>{editingRecord.longitude || 'Not provided'}</Text>
                </Col>
            </Row>

            <Row gutter={16}>
                <Col span={24}>
                    <Title level={4}>Social Media</Title>
                    <Text strong>Facebook: </Text> <Text>{editingRecord.facebookId || 'Not provided'}</Text>
                    <br />
                    <Text strong>Instagram: </Text> <Text>{editingRecord.instaId || 'Not provided'}</Text>
                    <br />
                    <Text strong>Website: </Text> <Text>{editingRecord.websiteAddress || 'Not provided'}</Text>
                </Col>
            </Row>

            {editingRecord.image1 || editingRecord.image2 || editingRecord.image3 || editingRecord.image4 ? (
                <Row gutter={16}>
                    <Col span={24}>
                        <Title level={4}>Images</Title>
                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={[editingRecord.image1, editingRecord.image2, editingRecord.image3, editingRecord.image4].filter(Boolean)}
                            renderItem={image => (
                                <List.Item>
                                    <Image
                                        src={image}
                                        alt="editingRecord related"
                                        width={200}
                                        height={150}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            ) : (
                <Text>No images available</Text>
            )}
        </Card>
    );
};

export default DetailseditingRecord;
