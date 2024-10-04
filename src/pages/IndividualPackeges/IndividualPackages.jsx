import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Layout, message, Modal, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { deleteIndividualPackage, getIndividualPackage } from '../../redux/actions/AllActions';
import Filter from '../../components/Filter/Filter';
import EditIndividualPackages from '../../components/Modals/IndividualPackages/EditIndividualPackages';
import Edit from '../../components/Edit/Edit';
const IndividualPackages = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] = useState([])

  const [handleDetailsVisible, setHandlDetailsVisible] = useState(false)

  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [createRecord, setCreateRecord] = useState(null);
  
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(data)
    setFilteredItems(data)
  }, [data])
  const handleDetails = (record) => {
    setEditingRecord(record);
    setHandlDetailsVisible(true)
  }


  const handleDelete = (record) => {

    Modal.confirm({
      title: 'Are you sure you want to delete this admin?',
      content: `Admin: ${record._id}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk: async () => {
        const work = await deleteIndividualPackage(record._id)
        if (work?.success) {
          message.success('Work deleted successfully');
          dispatch(getIndividualPackage())
        }
        else {
          message.error("Error to delete record.")
        }
      },
    });
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditingModelVisible(true);

  };
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
      title: "Validity Day",
      dataIndex: "validityday",
      key : "index"
    },
    {
      title: "Total Job Apply",
      dataIndex: "TotalJobApply",
      key : 'index'
    }

    ,
    {
      title: "Total Used",
      dataIndex: "",
      key: "index"
    },

    {
      title: "Actions",
      dataIndex: "",
      key: "index",
      render: (text, record) => (
        <>
          <Edit
            handleDetails={handleDetails}
            handleDetailsVisible={handleDetailsVisible}
            setHandlDetailsVisible={setHandlDetailsVisible}
            text={text} record={record} handleEdit={handleEdit} handleDelete={handleDelete}

          />
        </>
      ),
    },
  ]


  useEffect(() => {
    dispatch(getIndividualPackage())
  }, [])


  const allDataFunction = () => {
    dispatch(getIndividualPackage())
  }
  
  return (
    <div>

      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['contactEmail', 'contactNumber', 'description', 'status', 'salary', 'location', 'shopName']}
      />

      
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


      <Modal
        title="Edit individual package"
        visible={isEditingModelVisible}

        onOk={() => { setIsEditingModelVisible(false) }}
        onCancel={() => { setIsEditingModelVisible(false) }}
        okText="Save"
        cancelText="Cancel"
        footer={null}
      >
        <EditIndividualPackages
          
          
          setIsEditingModelVisible={setIsEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
          editingRecord={editingRecord}
          workFunction={allDataFunction}
        />
      </Modal>

    </div>
  )
}

export default IndividualPackages