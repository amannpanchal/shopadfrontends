import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Layout, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getCoupans } from '../../redux/actions/AllActions';

const Coupon = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);

  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [createRecord, setCreateRecord] = useState(null);


  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(data)
  }, [data])





  const columns = [
    {
        
      title: "Code ",
      dataIndex: "code",
      key: "index",
      width: "200"
    },
    {

      title: "Count",
      dataIndex: "count",
      key: "index",
      width: "200"
    },
    {

      title: "Discount",
      dataIndex: "discount",
      key: "index",
      width: "200"
    },
    {

      title: "User Assigned",
      dataIndex: "User",
      key: "index",
      width: "200"
    },

    {

      title: "Action ",
      dataIndex: "",
      key: "index",
      width: "200",
      render: (text, record) => (
        <Space>
          
          <Button type="primary"
          // onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button type="danger"
          // onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
     
    },


    
  ]

  useEffect(() => {
    dispatch(getCoupans())
  }, [])
  return (
    <div>
      <SearchBar />
      <Layout>
        <Content>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <Table
              columns={columns}
              pagination={{ position: ['bottomCenter'], pageSize: 10 }}
              style={{ minHeight: '80vh', maxHeight: '80vh' }}
              dataSource={allData}
            />

          </div>

        </Content>
      </Layout>



    </div>
  )
}

export default Coupon