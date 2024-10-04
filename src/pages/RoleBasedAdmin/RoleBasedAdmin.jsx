import React, { useEffect, useState } from 'react';
import { Table, Button, Space, message, Modal, Form } from 'antd';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAdmins, deleteAdmin } from '../../redux/actions/AllActions';
import { Content } from 'antd/es/layout/layout';
import EditAdmin from '../../components/Modals/Admin/EditAdmin';
import AddModal from '../../components/AddModal/AddModal';
import CreateAdmin from '../../components/Modals/Admin/CreateAdmin';
import AddButton from '../../components/AddButton/AddButton';
import Filter from '../../components/Filter/Filter';
import Edit from '../../components/Edit/Edit';
import AdminDetails from '../../components/Modals/Admin/AdminDetails';

const RoleBasedAdmin = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const [filteredItems, setFilteredItems] =useState([])
  const [editingRecord, setEditingRecord] = useState(null);
  const [isEditingModelVisible, setIsEditingModelVisible] = useState(false);
  const [isCreateModelVisible, setIsCreateModelVisible] = useState(false);
  const [handleDetailsVisible, setHandlDetailsVisible] = useState(false)

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(data)
    setFilteredItems(data)
  }, [data])


  const [editForm] = Form.useForm();
  const [createForm] = Form.useForm();

  useEffect(() => {
    dispatch(getAdmins());
  }, [dispatch]);

  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditingModelVisible(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this admin?',
      content: `Admin: ${record.Email}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        message.success(`Deleted admin: ${record.Email}`);
        dispatch(deleteAdmin(record.Email)); 
      },
    });
  };


  const editHandleSave = () => {
    editForm.validateFields().then((values) => {
      message.success(`Updated admin: ${values.Email}`);
      setIsEditingModelVisible(false);
      editForm.resetFields(); 
    }).catch((info) => {
      message.error('Please check the form fields and try again');
    });
  };

  const createHandleSave = () => {
    createForm.validateFields().then((values) => {
      message.success(`Created admin: ${values.Email}`);
      setIsCreateModelVisible(false);
      createForm.resetFields(); 
    
    }).catch((info) => {
      message.error('Please check the form fields and try again');
    });
  };

  const handleCreateCancel = () => {
    createForm.resetFields();
    setIsCreateModelVisible(false);
  };

  const handleEditCancel = () => {
    editForm.resetFields();
    setIsEditingModelVisible(false);
  };


  const handleDetails = (record) => {
    setEditingRecord(record);
    setHandlDetailsVisible(true)
  }

  const allDataFunction = () => {
    dispatch(getAdmins())
  }



  const columns = [
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'email',
      fixed: 'left',
      width: 200,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 100,
    },
    {
      title: 'Adv Code',
      dataIndex: 'Adv_code',
      key: 'advCode',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 100,
    },
    {
      title: 'Approved Offer',
      dataIndex: 'ApprovedOffer',
      key: 'approvedOffer',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Approved Works',
      dataIndex: 'ApprovedWorks',
      key: 'approvedWorks',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Approved Job',
      dataIndex: 'Approvedjob',
      key: 'approvedJob',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Offer',
      dataIndex: 'Offer',
      key: 'offer',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 100,
    },
    {
      title: 'Offer Post',
      dataIndex: 'Offer_post',
      key: 'offerPost',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Report',
      dataIndex: 'Report',
      key: 'report',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 100,
    },
    {
      title: 'Pending Offer',
      dataIndex: 'pendingOffer',
      key: 'pendingOffer',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Pending Works',
      dataIndex: 'pendingWorks',
      key: 'pendingWorks',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Pending Job',
      dataIndex: 'pendingjob',
      key: 'pendingJob',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Rejected Offer',
      dataIndex: 'rejectedOffer',
      key: 'rejectedOffer',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Rejected Works',
      dataIndex: 'rejectedWorks',
      key: 'rejectedWorks',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Rejected Job',
      dataIndex: 'rejectedjob',
      key: 'rejectedJob',
      render: (text) => (text ? 'Yes' : 'No'),
      width: 150,
    },
    {
      title: 'Actions',
      key: 'actions',
      fixed: 'right',
      width: 150,
      render: (text, record) => (
        <Edit
          handleDetails={handleDetails}
          handleDetailsVisible={handleDetailsVisible}
          setHandlDetailsVisible={setHandlDetailsVisible}
          text={text} record={record} handleEdit={handleEdit} handleDelete={handleDelete}

        />
      ),
    },
  ];

  return (
    <div>
      <Filter
        setFilteredItems={setFilteredItems}
        filteredItems={filteredItems}
        allData={allData}
        searchKeys={['Email']}
      />

      <AddButton
        setIsCreateModelVisible={setIsCreateModelVisible}
        title={"Add Admin"}
      />
      <Layout style={{ height: '80vh' }}>
        <Content>
          <div style={{ overflowX: 'auto', width: '100%' }}>
            <Table
              columns={columns}
              dataSource={filteredItems}
              rowKey="Email"
              scroll={{ x: 1400, y: 460 }}
              pagination={{ position: ['bottomCenter'], pageSize: 10 }}
              style={{ minHeight: '80vh', maxHeight: '80vh' }}
            />
          </div>
        </Content>
      </Layout>

      <Modal
        title="Edit Admin"
        visible={isEditingModelVisible}
        onOk={editHandleSave}
        onCancel={handleEditCancel}
        okText="Save"
        cancelText="Cancel"
        footer  = {<></>}
      >
        <EditAdmin
          
          setIsEditingModelVisible={setIsEditingModelVisible}
          isEditingModelVisible={isEditingModelVisible}
          editingRecord={editingRecord}
          workFunction={allDataFunction}
        />
      </Modal>

      <AddModal
        title="Add Admin"
        visible={isCreateModelVisible}
        onOk={createHandleSave}
        onCancel={handleCreateCancel}
        okText="Add Admin"
        cancelText="Cancel"
        element={<CreateAdmin
          
          setIsCreateModelVisible={setIsCreateModelVisible}
          isCreateModelVisible={isCreateModelVisible}
          workFunction={allDataFunction}
          
        />}
      />


      <Modal
        title="Work Details"
        visible={handleDetailsVisible}
        onOk={() => { setHandlDetailsVisible(false) }}
        onCancel={() => { setHandlDetailsVisible(false) }}
        okText="Save"
        cancelText="Cancel"
        footer={null}
      >

        <AdminDetails handleDetailsVisible={handleDetailsVisible}
          setHandlDetailsVisible={setHandlDetailsVisible}
          editingRecord={editingRecord} />
        

      </Modal>


    </div>
  );
};

export default RoleBasedAdmin;
