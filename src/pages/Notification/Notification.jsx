import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Card } from 'antd'; // Using Ant Design for styling (optional)
import { getUsers } from '../../redux/actions/AllActions';

const Notification = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data); // Assuming notifications are part of `data`
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (data) {
      const sortedNotifications = data
        .flatMap((item) => item.notifications) 
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setFilteredItems(sortedNotifications);
    }
  }, [data]);
    useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <h2>User Notifications</h2>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={filteredItems}
        renderItem={(notification) => (
          <List.Item>
            <Card title={notification.title}>
              <p>{notification.message}</p>
              <small>{new Date(notification.createdAt).toLocaleString()}</small>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Notification;
