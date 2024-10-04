import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOffers } from '../../redux/actions/AllActions';
import { Button, Layout, Table, Modal, InputNumber, DatePicker, Tabs, Image } from 'antd';
import Filter from '../Filter/Filter';
import { Content } from 'antd/es/layout/layout';
import moment from 'moment';

const { TabPane } = Tabs;

const ExtendOffer = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);
    const [filteredItems, setFilteredItems] = useState([]);
    const [allData, setAllData] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Store selected row keys
    const [isModalVisible, setIsModalVisible] = useState(false); // Control modal visibility
    const [daysToExtend, setDaysToExtend] = useState(0); // For number of days to extend
    const [selectedDate, setSelectedDate] = useState(null); // For date selection

    useEffect(() => {
        dispatch(getOffers());
    }, [dispatch]);

    useEffect(() => {
        setAllData(data);
        setFilteredItems(data);
    }, [data]);

    // Define table columns
    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: 200,
        },
        {
            title: 'Category',
            dataIndex: 'categoryId',
            key: 'category',
            width: 200,
            render: (category) => <div>{category?.categoryName}</div>,
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
            width: 200,
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            key: 'endDate',
            width: 200,
        },
        {
            title: 'Location',
            dataIndex: 'Location',
            key: 'Location',
            width: 200,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 200,
        },
        {
            title: 'Image',
            dataIndex: 'offerImage',
            key: 'offerImage',
            width: 200,
            render: (image) => (<Image style={{ width: "50px", height: "50px" }} src={image} />),
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
            width: 200,
            render: () => (
                <div>
                    <Button>Details</Button>
                </div>
            ),
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedKeys) => {
            setSelectedRowKeys(selectedKeys);
        },

        onSelectAll: (selected, selectedRows) => {
            if (selected) {
                setSelectedRowKeys(allData.map((item) => item.key));
            } else {
                setSelectedRowKeys([]);
            }
        },
    };

    // Open modal
    const showModal = () => {
        if (selectedRowKeys.length === 0) {
            alert('Please select at least one offer to extend.');
        } else {
            setIsModalVisible(true);
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleExtend = () => {
        console.log('Days to extend:', daysToExtend);
        console.log('Selected date:', selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : 'No date selected');
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal} style={{ marginTop: '20px' }}>
                Extend Offers
            </Button>
            <Filter
                setFilteredItems={setFilteredItems}
                filteredItems={filteredItems}
                allData={allData}
                searchKeys={['description', 'categoryId']}
            />

            <Layout style={{ height: '60vh' }}>
                <Content>
                    <div style={{ overflowX: 'auto', width: '100%' }}>
                        <Table
                            columns={columns}
                            dataSource={filteredItems}
                            rowKey={(record) => record._id}  // Ensure that you use a proper unique row key
                            rowSelection={rowSelection}
                            scroll={{ x: 1000, y: 460 }}
                            pagination={{ position: ['bottomCenter'] }}
                            style={{ minHeight: '80vh', maxHeight: '80vh' }}
                        />
                    </div>

                    {/* Modal Popup for extending offers */}
                    <Modal
                        title="Extend Offer"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                        onOk={handleExtend}
                        okText="Extend"
                        cancelText="Cancel"
                    >
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Increase by Days" key="1">
                                <div>
                                    <p>Increase End Date by:</p>
                                    <InputNumber
                                        min={0}
                                        value={daysToExtend}
                                        onChange={(value) => setDaysToExtend(value)}
                                        placeholder="Number of days"
                                    />
                                </div>
                            </TabPane>
                            <TabPane tab="Select Date" key="2">
                                <div>
                                    <p>Select New End Date:</p>
                                    <DatePicker
                                        onChange={(date) => setSelectedDate(date)}
                                        format="YYYY-MM-DD"
                                        placeholder="Select a date"
                                    />
                                </div>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </Content>
            </Layout>
        </div>
    );
};

export default ExtendOffer;
