import React, { useEffect, useState } from 'react';
import { Input, Checkbox, Select, DatePicker, InputNumber, Button, Form } from 'antd';
const { RangePicker } = DatePicker;

const { Option } = Select;
const JobFilter = ({ allData, setFilteredItems, filteredItems }) =>

{
  const [sortOrder, setSortOrder] = useState('asc');
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shopName, setShopName] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    status : '',
    owner: '',
    gender: null,
    areaWork: '',
    experienceRequired: '',
    startDate: null,
    endDate: null,
    isPolice: false,
    salary: {
      minAmount: null,
      maxAmount: null,
      currency: 'INR',
    },
    status: '',
    city: '',
    state: '',
    isActive: false,
    shopName: '',
  });

  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  const handleReset = () => {
    setFilters({
      category: '',
      workTiming: '',
      status: '',
      gender: "",
      isActive: false,
      city: '',
      state: '',
      country: '',
      startDate:'',
      endDate: '',
      minSalary: null,
      maxSalary: null,
      onBasis: null,
      shopName: '',
    });
    setFilteredItems(allData);
  };


  useEffect(() => {
    const uniqueCategories = new Set([...categories]);
    const uniqueStates = new Set([...states]);
    const uniqueCities = new Set([...cities]);
    const uniqueShopName = new Set([...shopName]);
    filteredItems.forEach((item) => {
      uniqueCategories.add(item?.shop?.category?.categoryName);
      uniqueStates.add(item?.owner?.shop?.location?.state);
      uniqueCities.add(item?.owner?.shop?.location?.city);
      uniqueShopName.add(item?.owner?.shop?.shopName);
    });
    setCategories([...uniqueCategories]);
    setShopName([...uniqueShopName]);
    setStates([...uniqueStates]);
    setCities([...uniqueCities]);
  }, [filteredItems])
  const handleSortChange = (value) => {
    setSortOrder(value);
  };
  return (
    <div>
      <Form layout="inline" style={{ margin: 16 }}>
        <Form.Item style={{ margin: '10px 5px' }} label="Category">
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
        <Form.Item style={{ margin: '10px 5px' }} label="City">
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
        </Form.Item>
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
        <Form.Item style={{ margin: '10px 5px' }} label="Min Salary">
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

          <Button type="primary" onClick={handleReset} style={{ marginLeft: 8 }}>
            Reset
          </Button>
        </Form.Item>

        



      </Form>
    </div>
  );
};

export default JobFilter;
