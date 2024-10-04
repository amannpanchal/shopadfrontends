import { Button, Card, Col, Form, InputNumber, Row, Select, Switch } from 'antd';
import React, { useEffect, useState } from 'react';

const { Option } = Select;

const WorkFilter = ({ filteredItems, setFilteredItems, allData }) => {
    
    const [works, setWorks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [categories, setCategories] = useState([]);
    const [shopName, setShopName] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); 

    useEffect(() => {
        const uniqueCategories = new Set([...categories]);
        const uniqueStates = new Set([...states]);
        const uniqueCities = new Set([...cities]);
        const uniqueShopName = new Set([...shopName]);
        filteredItems.forEach((item) => {
            
            uniqueStates.add(item?.owner?.shop?.location?.state);
            uniqueCities.add(item?.owner?.shop?.location?.city);
            uniqueShopName.add(item?.shopName);
        });
        setCategories([...uniqueCategories]);
        setShopName([...uniqueShopName]);
        setStates([...uniqueStates]);
        setCities([...uniqueCities]);
    }, [filteredItems]);

    const [filters, setFilters] = useState({
        category: '',
        shiftTime: '',
        status: '',
        isActive: false,
        city: '',
        state: '',
        country: '',
        postalCode: '',
        minSalary: null,
        maxSalary: null,
        onBasis: null,
        shopName: '',
    });

    useEffect(() => {
        let filteredWorks = allData.filter((work) => {
            const {
                category,
                shiftTime,
                status,
                isActive,
                city,
                state,
                postalCode,
                minSalary,
                maxSalary,
                onBasis,
                shopName,
            } = filters;

            const isCategoryMatch = category ? work.category.categoryName === category : true;
            const isShiftTimeMatch = shiftTime ? work.shiftTime === shiftTime : true;
            const isStatusMatch = status ? work.status === status : true;
            const isActiveMatch = isActive ? work.isActive === isActive : true;
            const isCityMatch = city ? work?.address?.city === city : true;
            const isStateMatch = state ? work?.address?.state === state : true;
            const isPostalCodeMatch = postalCode ? work?.address?.postalCode === postalCode : true;
            const isShopNameMatch = shopName ? work?.shopName === shopName : true;
            const isMinSalaryMatch = minSalary ? work.salary.amount >= minSalary : true;
            const isMaxSalaryMatch = maxSalary ? work.salary.amount <= maxSalary : true;
            const isOnBasisMatch = onBasis ? work.salary.basis === onBasis : true;

            return (
                isCategoryMatch &&
                isShiftTimeMatch &&
                isStatusMatch &&
                isActiveMatch &&
                isCityMatch &&
                isStateMatch &&
                isPostalCodeMatch &&
                isMinSalaryMatch &&
                isMaxSalaryMatch &&
                isOnBasisMatch &&
                isShopNameMatch
            );
        })
        filteredWorks = filteredWorks.sort((a, b) => {
            if (sortOrder === 'asc') {
                return new Date(a.createdAt) - new Date(b.createdAt);
            } else {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
        });
        setFilteredItems(filteredWorks);
    }, [filters, sortOrder]);
    const handleFilterChange = (field, value) => {
        setFilters({
            ...filters,
            [field]: value,
        });
    };
    const handleReset = () => {
        setFilters({
            category: '',
            shiftTime: '',
            status: '',
            isActive: false,
            city: '',
            state: '',
            country: '',
            postalCode: '',
            minSalary: null,
            maxSalary: null,
            onBasis: null,
            shopName: '',
        });
        setFilteredItems(allData); 
    };
    const handleSortChange = (value) => {
        setSortOrder(value);
    };
    return (
        <div>
            <Form layout="inline" style={{ margin: 16 }}>
                {/* <Form.Item style={{ margin: '10px 5px' }} label="Category">
                    <Select
                        value={filters.category}
                        onChange={(value) => handleFilterChange('category', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        {categories.map((item, index) => (
                            <Option key={index} value={item}>
                                {item}
                            </Option>
                        ))}
                    </Select>
                </Form.Item> */}
                <Form.Item style={{ margin: '10px 5px' }} label="Shift Time">
                    <Select
                        value={filters.shiftTime}
                        onChange={(value) => handleFilterChange('shiftTime', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        <Option value="day">Day</Option>
                        <Option value="night">Night</Option>
                    </Select>
                </Form.Item>

                <Form.Item style={{ margin: '10px 5px' }} label="Status">
                    <Select
                        value={filters.status}
                        onChange={(value) => handleFilterChange('status', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        <Option value="pending">Pending</Option>
                        <Option value="approved">Approved</Option>
                        <Option value="rejected">Rejected</Option>
                    </Select>
                </Form.Item>
                <Form.Item style={{ margin: '10px 5px' }} label="Active">
                    <Switch
                        checked={filters.isActive}
                        onChange={(checked) => handleFilterChange('isActive', checked)}
                    />
                </Form.Item>
                {/* <Form.Item style={{ margin: '10px 5px' }} label="City">
                    <Select
                        value={filters.city}
                        onChange={(value) => handleFilterChange('city', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        {cities.map((city, index) => (
                            <Option key={index} value={city}>
                                {city}
                            </Option>
                        ))}
                    </Select>
                </Form.Item> */}
                {/* <Form.Item style={{ margin: '10px 5px' }} label="State">
                    <Select
                        value={filters.state}
                        onChange={(value) => handleFilterChange('state', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        {states.map((state, index) => (
                            <Option key={index} value={state}>
                                {state}
                            </Option>
                        ))}
                    </Select>
                </Form.Item> */}
                {/* <Form.Item style={{ margin: '10px 5px' }} label="postalCode">
                    <InputNumber
                        value={filters?.postalCode}
                        onChange={(value) => handleFilterChange('postalCode', value)}
                    />
                </Form.Item> */}
                <Form.Item style={{ margin: '10px 5px' }} label="shopName">
                    <Select
                        value={filters.shopName}
                        onChange={(value) => handleFilterChange('shopName', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        {shopName.map((shopName, index) => (
                            <Option key={index} value={shopName}>
                                {shopName}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                {/* <Form.Item style={{ margin: '10px 5px' }} label="Min Salary">
                    <InputNumber
                        value={filters.minSalary}
                        onChange={(value) => handleFilterChange('minSalary', value)}
                        min={0}
                        placeholder="Min Salary"
                        style={{ width: 120 }}
                    />
                </Form.Item>
                <Form.Item style={{ margin: '10px 5px' }} label="Max Salary">
                    <InputNumber
                        value={filters.maxSalary}
                        onChange={(value) => handleFilterChange('maxSalary', value)}
                        min={0}
                        placeholder="Max Salary"
                        style={{ width: 120 }}
                    />
                </Form.Item>
                <Form.Item style={{ margin: '10px 5px' }} label="Salary Basis">
                    <Select
                        value={filters.onBasis}
                        onChange={(value) => handleFilterChange('onBasis', value)}
                        style={{ width: 120 }}
                    >
                        <Option value="">All</Option>
                        <Option value="yearly">Per Annum</Option>
                        <Option value="monthly">Monthly</Option>
                    </Select>
                </Form.Item> */}
                <Form.Item style={{ margin: '10px 5px' }} label="Sort by Date">
                    <Select
                        value={sortOrder}
                        onChange={(value) => handleSortChange(value)}
                        style={{ width: 150 }}
                    >
                        <Option value="asc">Ascending</Option>
                        <Option value="desc">Descending</Option>
                    </Select>
                </Form.Item>
                <Form.Item style={{ margin: '10px 5px' }}>
                    <Button type = "primary" onClick={handleReset} style={{ marginLeft: 8 }}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default WorkFilter;
