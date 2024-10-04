import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Layout, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getAdvCoupans } from '../../redux/actions/AllActions';
const AdvCoupon = () => {
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

      title: "S. no. ",
      dataIndex: "",
      key: "index",
      width: "200"
    },

    {

      title: "Name ",
      dataIndex: "name",
      key: "index",
      width: "200"
    },
    {

      title: "Email ",
      dataIndex: "email",
      key: "index",
      width: "200"
    },
    {

      title: "Mobile ",
      dataIndex: "mobileNo",
      key: "index",
      width: "200"
    },
    {

      title: "Code ",
      dataIndex: "code",
      key: "index",
      width: "200"
    },
    {

      title: "Count ",
      dataIndex: "TotalSubcodes",
      key: "index",
      width: "200"
    },

    {

      title: "Discount ",
      dataIndex: "offer",
      key: "index",
      width: "200"
    },
    {

      title: "Actions ",
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
    dispatch(getAdvCoupans())
  }, [])
  return (
    <div>
      <SearchBar/>
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

export default AdvCoupon