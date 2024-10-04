import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Image, Layout, message, Modal, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { getUsers } from '../../redux/actions/AllActions';
import Filter from '../../components/Filter/Filter';
import Edit from '../../components/Edit/Edit';

const Users = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);

  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [createRecord, setCreateRecord] = useState(null);
  const [handleDetailsVisible, setHandlDetailsVisible] = useState(false)
  const [filteredItems, setFilteredItems] = useState([]);
  const [allData, setAllData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => {
    setAllData(data)
    setFilteredItems(data);
  }, [data])

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this admin?',
      content: `Admin: ${record.Email}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        message.success(`Deleted admin: ${record.Email}`)

      },
    })
  }
  const handleEdit = (record) => {
    setEditingRecord(record)
    setIsModalVisible(true)
  }


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "index"
    },
    {
      title: "User Preferences ",
      dataIndex: "userPreferences",
      key: "index",
      render: (text, item) => (<div>{item?.userPreferences?.map((item) => (<div>
        
        {item.categoryName}</div>))}</div>)
    }
    ,
    {
      title: "Email",
      dataIndex: "email",
      key  :  "index"
    },
    {
      title: "Mobile ",
      dataIndex: "mobile",
      key  :  "index"
    },
    {
      title: "Father Name ",
      dataIndex: "fathername",
      key: "index"
    },
    {
      title: "Mother Name ",
      dataIndex: "mothername",
      key: "index"
    },
    {
      title: "Permanent address  ",
      dataIndex: "pAddress",
      key: "index"
    },
    {
      title: "Residencial  address  ",
      dataIndex: "rAddress",
      key: "index"
    },
    {
      title: "Certified Course  ",
      dataIndex: "certifiedCourse",
      key: "index"
    },
    {

      title: "Experience Years  ",
      dataIndex: "experienceYears",
      key: "index"
    },
    {
      title: "Religion  ",
      dataIndex: "religion",
      key: "index"
    }
    ,

  
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "index",
    //   fixed : true,
    //   render: (text, record) => (
    //     <Edit
    //       handleDetailsVisible={handleDetailsVisible}
    //       setHandlDetailsVisible={setHandlDetailsVisible}
    //       text={text} record={record} handleEdit={handleEdit} handleDelete={handleDelete}/>
    //   ),
    // },
  ]

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  
  
  return (
    <div>
      <Filter
        allData={allData}
        setFilteredItems={setFilteredItems}
        searchKeys={["name", "email", "mobile", ]}
      
      />
      <Layout>
        <Content>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <Table
              columns={columns}
              pagination={{ position: ['bottomCenter'], pageSize: 10 }}
              style={{ minHeight: '80vh', maxHeight: '80vh' }}
              dataSource={filteredItems}
              scroll={{ x:2800, y: 460 }}
            />

          </div>

        </Content>
      </Layout>



    </div>
  )
}

export default Users