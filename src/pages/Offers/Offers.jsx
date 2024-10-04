import { deleteOffers, getOffers } from '../../redux/actions/AllActions';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Image, Layout, message, Modal, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Form from 'antd/es/form/Form';
import EditOffers from '../../components/Modals/Offers/EditOffers';
import Edit from '../../components/Edit/Edit';
import OfferDetails from '../../components/Modals/Offers/OfferDetails';
import Filter from '../../components/Filter/Filter';

const Offers = () => {

  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] = useState([])
  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [handleDetailsVisible, setHandlDetailsVisible] = useState(false)
  
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(data)
    setFilteredItems(data)
  }, [data])
  

  const handleDetails = (record) => {
    setEditingRecord(record);
    setHandlDetailsVisible(true)
  }


  useEffect(() => {
    dispatch(getOffers())
  }, [])

  const editHandleSave = () => {
    setIsEditingModelVisible(true);
  };
  const handleEditCancel = () => {
    setIsEditingModelVisible(false);
  };



  const handleEdit =  (record) => {
    setEditingRecord(record)
    setIsEditingModelVisible(true);
    
  }
   const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this admin?',
      content: `Admin: ${record.Email}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        
        const data = await deleteOffers(record?._id)
        message.success(`Offer deleted.`)
        dispatch(getOffers())
       
      },
    })
  }
  const allDataFunction = () => {
    dispatch(getOffers())
  }

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "index",
      width : 200,

    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "index",
      width: 200,
      render: (text, record) => (<div>{record?.cateoryId?.categoryName}</div>)

    },
    {
      title: "Start Date",
   
      key: "index",
      width: 200,
      render: (text, record) => <>


        {new Date(record?.startDate).toLocaleDateString()}
      </>

    },
    {
      title: "End Date",
      // dataIndex: "endDate",
      key: "index",
      width: 200,
      render: (text, record) => <>
        {new Date(record?.endDate).toLocaleDateString()}
      </>

    },
    {
      title: "Location",
      dataIndex: "location",
      key: "index",
      width : 200,

    },
    {
      title: "Status",
      dataIndex: "status",
      key: "index",
      width : 200,

    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (text, record) => (
        <Edit
          handleDetails={handleDetails}
          handleDetailsVisible={handleDetailsVisible}
          setHandlDetailsVisible={setHandlDetailsVisible}
          text={text} record={record} handleEdit={handleEdit} handleDelete={handleDelete}

        />
      ),
      
    }

  ]


  return (
    <div>

      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['description', 'contactNumber', 'location','categoryId']}
      />
     
      <Layout>
        <Content>
          <div style={{ width: "100%" }}>
            <Table
            
            columns={columns}
              pagination={{ position: ['bottomCenter'], pageSize: 10 }}
              style={{ minHeight: '70vh', maxHeight: '82vh' }}
              scroll={{ x: 1400, y: 460 }} 
              dataSource={filteredItems}
            />

          </div>

        </Content>
      </Layout>


      <Modal
        title="Edit Offer"
        visible={isEditingModelVisible}
        onOk={editHandleSave}
        onCancel={handleEditCancel}
        footer={null}
      >
        <EditOffers
          setIsEditingModelVisible={setIsEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
          editingRecord={editingRecord}
          workFunction={allDataFunction}
        />
      </Modal>

      <Modal
        title="Offer Details"
        visible={handleDetailsVisible}
        onOk={() => { setHandlDetailsVisible(false) }}
        onCancel={() => { setHandlDetailsVisible(false) }}
        okText="Save"
        cancelText="Cancel"
        footer={null}
      >

        <OfferDetails
          handleDetailsVisible={handleDetailsVisible}
          setHandlDetailsVisible={setHandlDetailsVisible}
          editingRecord={editingRecord} 
        />
        
      </Modal>
      


    </div>
  )
}

export default Offers