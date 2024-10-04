import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExtendOffer from '../../components/ExtendOffer/ExtendOffer';
import ExtendJob from '../../components/ExtendJob/ExtendJob';

const { TabPane } = Tabs;  // Correct way to use TabPane

const JobAndOfferExtend = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  useEffect(() => {
    // dispatch(getAdmins())
  }, [dispatch]);

  return (
    <div >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Extend Job" key="1">
        <ExtendJob/>      
        </TabPane>
        <TabPane tab="Extend Offer" key="2">
        <ExtendOffer/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default JobAndOfferExtend;
