import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Layout, message, Modal, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { deleteCategory, getCategory } from '../../redux/actions/AllActions';
import Filter from '../../components/Filter/Filter';
import AddButton from '../../components/AddButton/AddButton';
import AddModal from '../../components/AddModal/AddModal';
import CreateCategory from '../../components/Modals/Category/CreateCategory';
const Category = () => {

  const dispatch = useDispatch()
  const [filteredItems, setFilteredItems] = useState([])
  const { data } = useSelector((state) => state.data);

  const allDataFunction = () => {
    dispatch(getCategory())
  }



  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)

  const [editingRecord, setEditingRecord] = useState(null)



  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(data)
    setFilteredItems(data);
    
  }, [data])

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this category?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        const data = await deleteCategory(record?._id)
        if (data?.success) {
          message.success(`Deleted Category`);
        } else {
          message.error("Deletion failed.")
          allDataFunction();
       }
              
      },
    });
  };

  const columns = [
    {
      
      title: "Category",
      dataIndex: "categoryName",
      key: "index",
      width: "200"
    
    },
    {
      
      title: "Actions",
      dataIndex: "",
      key: "index",
      width: "200",
      render: (text, record) => (
        <Space>
          
         
          <Button type="danger"
          onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  return (
    <div>
      <AddButton
        setIsCreateModelVisible={setIsCreateModelVisible}
        title={"Add Category"}
      />
      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['categoryName']}
      />
     
      <Layout>
        <Content>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <Table
              columns={columns}
              pagination={{ position: ['bottomCenter'] }}
              style={{ minHeight: '80vh', maxHeight: '80vh' }}
              dataSource={filteredItems}
            />
          </div>
        </Content>
      </Layout>

      <AddModal
        title="Add Category"
        visible={isCreateModelVisible}
        onOk={() => { setIsCreateModelVisible(false); }}
        onCancel= {() => { setIsCreateModelVisible(false); }}
        okText="Add Category"
        cancelText="Cancel"
        element={<CreateCategory
          
          setIsCreateModelVisible={setIsCreateModelVisible}
          isCreateModelVisible={isCreateModelVisible}
          workFunction={allDataFunction}
        
        />}
      />


      


    </div>
  )
}

export default Category