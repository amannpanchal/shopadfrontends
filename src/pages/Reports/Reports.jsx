import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/AllActions';
import { Layout } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SearchBar from '../../components/SearchBar/SearchBar';

const { Content } = Layout;

const Reports = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        setAllData(data);
    }, [data]);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    // Prepare data for the Bar Chart (Experience Years)
    const experienceData = allData.map(user => ({
        name: user.name || 'Unknown',
        experienceYears: parseInt(user.experienceYears) || 0
    }));

    console.log('Experience Data:', experienceData); // Log data to check

    return (
        <Layout>
            <Content>
                <SearchBar />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Experience Years Bar Chart */}
                    <div style={{ width: '80%', marginTop: 20 }}>
                        <h2>Experience Distribution</h2>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                                data={experienceData}
                                margin={{
                                    top: 20, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="experienceYears" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default Reports;
