import { Button, Layout, message, Modal, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Content } from 'antd/es/layout/layout';
import { deleteJob, getJobs, getPendingJobs } from '../../redux/actions/AllActions';
import Filter from '../../components/Filter/Filter';
import JobFilter from '../../Filters/JobFilter/JobFilter';
import Edit from '../../components/Edit/Edit';
import { Form } from 'antd';
import Editjob from '../../components/Modals/Job/Editjob';
import AddButton from '../../components/AddButton/AddButton';
import AddModal from '../../components/AddModal/AddModal';
import CreateJob from '../../components/Modals/Job/CreateJob';
import DetailsJob from '../../components/Modals/Job/DetailsJob';
import { useNavigate } from 'react-router-dom';


const JobsPending = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] = useState([])
  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false)
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false)
  const [createRecord, setCreateRecord] = useState(null);
  const [allData, setAllData] = useState([]);
  const [handleDetailsVisible, setHandlDetailsVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState(data?.[0])
  useEffect(() => {
    setAllData(data)
    setFilteredItems(data)
  }, [data])

  useEffect(() => {
    dispatch(getPendingJobs())
  }, [dispatch])
  const handleEdit = (record) => {

    setEditingRecord(record);
    setIsEditingModelVisible(true);

  };
  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this admin?',

      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        const resp = await deleteJob(record._id)
        if (resp?.success) {
          dispatch(getPendingJobs())
          message.success(` Job deleted`);
        }
        else {
          message.error("Job is not deleted")
        }


      },
    });
  };
  const editHandleSave = () => {

  };

  const createHandleSave = () => {
    setIsCreateModelVisible(false);
  };

  const handleCreateCancel = () => {
    setIsCreateModelVisible(false);
  };

  const handleEditCancel = () => {
    setIsEditingModelVisible(false);
  };

  const allDataFunction = () => {
    dispatch(getPendingJobs())
  }


  const handleDetails = (record) => {
    setEditingRecord(record);
    setHandlDetailsVisible(true)
  }



  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "index",
      width: "300"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "index",
      width: "800"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "index",
      width: "200"
    },
    {
      title: "Area Work",
      dataIndex: "areaWork",
      key: "index",
      width: "200"
    },
    {
      title: "Experience Required",
      dataIndex: "experienceRequired",
      key: "index",
      width: "200"
    },
    {
      title: "Work Timing",
      dataIndex: "",
      key: "index",
      width: "900",
      render: (text, record) => <>

        {record?.workTiming?.startTime}
        {" "}
        {record?.workTiming?.endTime}
      </>
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "index",
      width: "200"
    },
    {
      title: "Salary",
      dataIndex: "",
      key: "index",
      width: "200",
      render: (text, record) =>
        <>

          {record?.salary?.amount} {" "}
          {record?.salary?.currency}
        </>

    },
    {
      title: "Application",
      dataIndex: "",
      key: "index",
      width: "200",
      render: (text, record) => (
        <>
          <Button
            onClick={() => {
              console.log("hell world")
              navigate(`/jobApplicants/${record._id}`)
            }}
          >
            View
          </Button>
        </>
      )
    },
    {
      title: "Action",
      dataIndex: "",
      key: "index",
      width: "200",
      render: (text, record) => (<>
        <Edit
          handleDetails={handleDetails}

          setHandlDetailsVisible={setHandlDetailsVisible}
          text={text} record={record} handleEdit={handleEdit} handleDelete={handleDelete}


        />

      </>)
    },

  ]

  return (
    <div>

      <AddButton
        setIsCreateModelVisible={setIsCreateModelVisible}
        title={"Add Job"}
      />
      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['description', 'title', 'gender', 'areaWork', 'experienceRequired']}
      />
      <JobFilter
        allData={allData} filteredItems={filteredItems} setFilteredItems={setFilteredItems}
      />
      <Layout>
        <Content>
          <div style={{ overflowX: "auto", width: "100%" }}>
            <Table
              columns={columns}
              pagination={{ position: ['bottomCenter'], pageSize: 10 }}
              style={{ width: '200vw', minHeight: '80vh', maxHeight: '80vh' }}
              dataSource={filteredItems}
            />
          </div>
        </Content>
      </Layout>


      <Modal
        title="Edit Job"
        visible={isEditingModelVisible}
        onOk={editHandleSave}
        onCancel={handleEditCancel}
        footer={null}
      >
        <Editjob
          setIsEditingModelVisible={setIsEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
          editingRecord={editingRecord}
          workFunction={allDataFunction}
        />
      </Modal>

      <Modal
        title=" Job Details"
        visible={handleDetailsVisible}
        onOk={() => { setHandlDetailsVisible(false) }}
        onCancel={() => { setHandlDetailsVisible(false) }}
        footer={null}
      >

        <DetailsJob

          setIsEditingModelVisible={isEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
          editingRecord={editingRecord}
        />
      </Modal>


      <AddModal
        title="Add Job"
        visible={isCreateModelVisible}
        onOk={createHandleSave}
        onCancel={handleCreateCancel}
        okText="Add Admin"
        cancelText="Cancel"
        element={<CreateJob
          setIsEditingModelVisible={isEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
        />}
      />



    </div>
  )
}

export default JobsPending