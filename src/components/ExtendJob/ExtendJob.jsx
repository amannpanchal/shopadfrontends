import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions/AllActions';
import moment from 'moment';
import Filter from '../Filter/Filter';
import { Button, InputNumber, Layout, Modal, Table, Tabs, DatePicker } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TabPane from 'antd/es/tabs/TabPane';

const ExtendJob = () => {

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Store selected row keys
  const [isModalVisible, setIsModalVisible] = useState(false); // Control modal visibility
  const [daysToExtend, setDaysToExtend] = useState(0); // For number of days to extend
  const [selectedDate, setSelectedDate] = useState(null); 

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  useEffect(() => {
    setAllData(data);
    setFilteredItems(data);
  }, [data]);


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

  const columns = [


    {
      title: "Contact Email",
      dataIndex: "contactEmail",
      key: "index",
      width: "200"
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "index",
      width: "200"
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "index",
      width: "200"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "index",
      width: "200"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "index",
      width: "200"
    },
    {
      title: "Designation",
      dataIndex: "designationName",
      key: "index",
      width: "200"
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "index",
      width: "200"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "index",
      width: "200"
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "index",
      width: "200"
    },
    {
      title: "Shift Time",
      dataIndex: "workTiming",
      key: "index",
      width: "200"
    }, {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "index",
      width: "200"
    },
    {
      title: "Details",
      dataIndex: "",
      key: "index",
      width: "200",
      render: () => (<><Button>Details</Button></>)
    },
    {
      title: "Application",
      dataIndex: "",
      key: "index",
      width: "200",
      render: () => (<><Button>View</Button></>)
    },
    {
      title: "Action",
      dataIndex: "",
      key: "index",
      width: "200",
      render: () => (<><Button>View</Button></>)
    },

  ]



  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ marginTop: '20px' }}>
        Extend Job Dates
      </Button>
      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['contactEmail', 'contactNumber' ,"instagramId", "designationName", "name", "contactNumber"]}
      />

      <Layout style={{ height: '30vh' }}>
        <Content>
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <Table
              columns={columns}
              dataSource={filteredItems}
              rowKey={(record) => record._id}  // Ensure that you use a proper unique row key
              rowSelection={rowSelection}
              scroll={{ x: 1300, y: 460 }}
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
  )
}

export default ExtendJob