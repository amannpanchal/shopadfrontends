import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Table, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useParams } from 'react-router-dom';
import { getJobApplication } from '../../redux/actions/AllActions';

const JobApplicants = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const params = useParams();

  const [allData, setAllData] = useState([]);
  
  const [filteredItems, setFilteredItems] = useState([]);


  useEffect(() => {
    setAllData(data);
    setFilteredItems(data);
  }, [data]);

  const allDataFunction = () => {
    dispatch(getJobApplication(params.id));
  };

  useEffect(() => {
    allDataFunction();
  }, [dispatch, params.id]);

  const columns = [
    {
      title: 'Applicant Name',
      dataIndex: 'applicantName',
      key: 'applicantName',
    },
    {
      title: 'Contact Email',
      dataIndex: 'applicantEmail',
      key: 'applicantEmail',
    },
    {
      title: 'Contact Number',
      dataIndex: 'applicantContact',
      key: 'applicantContact',
    },
    {
      title: 'Resume',
      dataIndex: 'resumeLink',
      key: 'resumeLink',
      render: (resumeLink) => (
        <Button type="link" href={resumeLink} target="_blank">
          View Resume
        </Button>
      ),
    },
    {
      title: 'Police Clearance',
      dataIndex: 'policeLink',
      key: 'policeLink',
      render: (policeLink) => (
        <Button type="link" href={policeLink} target="_blank">
          View Police Clearance
        </Button>
      ),
    },
    {
      title: 'Experience Certificate',
      dataIndex: 'experienceLink',
      key: 'experienceLink',
      render: (experienceLink) => (
        <Button type="link" href={experienceLink} target="_blank">
          View Experience Certificate
        </Button>
      ),
    },
    {
      title: 'Other Certificate',
      dataIndex: 'certificateLink',
      key: 'certificateLink',
      render: (certificateLink) => (
        <Button type="link" href={certificateLink} target="_blank">
          View Other Certificate
        </Button>
      ),
    },
    {
      title: 'Status',
      dataIndex: '',
      key: 'status',
      render: (text, record) => (
        <>
          {record.isSelected ? 'Selected' : record.isRejected ? 'Rejected' : 'Pending'}
        </>
      ),
    },
  ];

  return (
    <Layout>
   
      <Content>
        <div style={{ overflowX: 'auto', width: '100%' }}>
          <Table
            columns={columns}
            pagination={{ position: ['bottomCenter'], pageSize: 10 }}
            style={{ minHeight: '80vh', maxHeight: '80vh' }}
            dataSource={allData}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default JobApplicants;
