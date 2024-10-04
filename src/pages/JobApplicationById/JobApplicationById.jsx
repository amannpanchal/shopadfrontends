import { Layout, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getJobApplication } from '../../redux/actions/AllActions';

const JobApplicationById = () => {
  const dispatch = useDispatch()
  const params = useParams();



  const { data } = useSelector((state) => state.data);
  const [allData, setAllData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    console.log(params,'the param si')
  },[])


  const allDataFunction = () => {
    dispatch(getJobApplication(params.id))
  }

  useEffect(() => {
    allDataFunction()
  }, [])

  useEffect(() => {
    setAllData(data)
    setFilteredItems(data)
  }, [data, dispatch])
  const columns = [
    {
      title: "Applicant Name",
      dataIndex: "",
      key: ""
    },
    {
      title: "Contact Email",
      dataIndex: "",
      key: ""
    },
    {
      title: "Contact Number",
      dataIndex: "",
      key: ""
    },
    {
      title: "Resume",
      dataIndex: "",
      key: ""
    },
    {
      title: "Police Clearance",
      dataIndex: "",
      key: ""
    },
    {
      title: "Experience Certificate",
      dataIndex: "",
      key: ""
    },
    {
      title: "Other Certificate",
      dataIndex: "",
      key: ""
    },
    {
      title: "Status",
      dataIndex: "",
      key: ""
    },
    {
      title: "",
      dataIndex: "",
      key: ""
    },
  ]


  useEffect(() => {
   
  }, [])
  return (
    <div>
      {params}
      <Layout>
        <Content>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <Table

              columns={columns}
              pagination={{ position: ['bottomCenter'], pageSize: 10 }}
              style={{ minHeight: '80vh', maxHeight: '80vh' }}

              dataSource={filteredItems}
            />
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default JobApplicationById;