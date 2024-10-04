import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Form, Layout, message, Modal, Space, Table } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { deleteWork, getPendingWorks, getWorks } from '../../redux/actions/AllActions';
import WorkFilter from '../../Filters/WorkFilter/WorkFilter';
import Filter from '../../components/Filter/Filter';
import AddButton from '../../components/AddButton/AddButton';
import EditAdmin from '../../components/Modals/Admin/EditAdmin';
import EditWork from '../../components/Modals/Work/EditWork';
import Edit from '../../components/Edit/Edit';
import DetailsWork from '../../components/Modals/Work/DetailsWork';

const WorkPending = () => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);
  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [handleDetailsVisible, setHandlDetailsVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [createRecord, setCreateRecord] = useState(null);
  const [filteredItems, setFilteredItems] = useState([])
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    setAllData(data)
    setFilteredItems(data)
  }, [data, dispatch])


  const handleDetails = (record) => {
    setEditingRecord(record);
    setHandlDetailsVisible(true)
  }

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
      title: "Status",
      dataIndex: "status",
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
      title: "Salary",
      dataIndex: "salary",
      key: "index",
      width: "200"
    },
    {
      title: "Shift Time",
      dataIndex: "shiftTime",
      key: "index",
      width: "200"
    },
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "index",
      width: "200",
    },
    {
      title: "Active",

      key: "index",
      width: "200",
      render: (text, record) => <>
        {
          record?.isActive ? "Yes" : "No"
        }
      </>
    },
    {
      title: "Actions",
      dataIndex: "",

      key: "index",
      width: "200",
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


  const allDataFunction = () => {
    dispatch(getPendingWorks())
  }

  useEffect(() => {
    allDataFunction()
  }, [])

  const editHandleSave = () => {
    setIsEditingModelVisible(false);
  };

  const handleEditCancel = () => {
    setIsEditingModelVisible(false);
  };


  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditingModelVisible(true);

  };

  const handleDelete = (record) => {

    Modal.confirm({
      title: 'Are you sure you want to delete this admin?',
      content: `Admin: ${record._id}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        const work = await deleteWork(record._id)
        if (work?.success) {
          message.success('Work deleted successfully');
          dispatch(getPendingWorks())
        }
        else {
          message.error("Error to delete record.")
        }
      },
    });
  };


  return (
    <div>
      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['contactEmail', 'contactNumber', 'description', 'status', 'salary', 'location', 'shopName']}
      />
      <AddButton
        setIsCreateModelVisible={setIsCreateModelVisible}
        title={"Add Work"}
      />

      <WorkFilter allData={allData} filteredItems={filteredItems} setFilteredItems={setFilteredItems} />
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
        title="Edit Work"
        visible={isEditingModelVisible}
        onOk={editHandleSave}
        onCancel={handleEditCancel}
        okText="Save"
        cancelText="Cancel"
        footer={null}
      >
        <EditWork

          setIsEditingModelVisible={setIsEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
          editingRecord={editingRecord}
          workFunction={allDataFunction}
        />
      </Modal>
      <Modal
        title="Work Details"
        visible={handleDetailsVisible}
        onOk={() => { setHandlDetailsVisible(false) }}
        onCancel={() => { setHandlDetailsVisible(false) }}
        okText="Save"
        cancelText="Cancel"
        footer={null}
      >
        <DetailsWork handleDetailsVisible={handleDetailsVisible}
          setHandlDetailsVisible={setHandlDetailsVisible}
          editingRecord={editingRecord} />
      </Modal>



    </div>
  )
}

export default WorkPending