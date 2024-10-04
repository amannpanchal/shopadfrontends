import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Layout, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getPackages } from '../../redux/actions/AllActions';

const Packages = () => {
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
      title: "Subscription Name",
      dataIndex: "subcriptionName",
      key: "index"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "index"
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "index"
    },
    {
      title: "Package Validity Date",
      dataIndex: "validityDate",
      key: "index"
    },

    {
      title: "Total Images",
      dataIndex: "Totalimages",
      key: "index"
    },
    {
      title: "Total Jobs",
      dataIndex: "Totaljob",
      key: "index"
    },
    {
      title: "Jobs Validity",
      dataIndex: "jobvalidity",
      key: "index"
    },
    {
      title: "Total Offers",
      dataIndex: "TotalOffer",
      key: "index"
    },
    {
      title: "Offers Validity",
      dataIndex: "Offervalidity",
      key: "index"
    },

    {
      title: "Total Work",
      dataIndex: "TotalWork",
      key: "index"
    },

    {
      title: "Work Validity",
      dataIndex: "Workvalidity",
      key: "index"
    },
    {
      title: "Total Used",
      dataIndex: "totalUsed",
      key: "index"
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "index",
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
    dispatch(getPackages())
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

export default Packages