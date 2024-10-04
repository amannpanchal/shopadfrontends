import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Select, Row, Col, message } from 'antd';
import { createAdmin } from '../../../redux/actions/AllActions';

const { Option } = Select;

const CreateAdmin = ({
  setIsCreateModelVisible,
  isCreateModelVisible,
  workFunction
}) => {
  const [form] = Form.useForm();
  const [isSuperAdmin, setIsSuperAdmin] = useState(true); // Track role to handle form behavior

  const handleRoleChange = (value) => {
    setIsSuperAdmin(value === 'superadmin');
  };

  useEffect(() => {
    if (isSuperAdmin) {
      form.setFieldsValue({
        Offer: true,
        pendingOffer: true,
        ApprovedOffer: true,
        rejectedOffer: true,
        job: true,
        pendingjob: true,
        Approvedjob: true,
        rejectedjob: true,
        Works: true,
        pendingWorks: true,
        ApprovedWorks: true,
        rejectedWorks: true,
        Subcription: true,
        Category: true,
        Coupon: true,
        Adv_code: true,
        Report: true,
        Offer_post: true,
        User: true,
      });
    }
  }, [isSuperAdmin, form]);

  const handleFinish = async (values) => {
    
    const data = await createAdmin(values)
    if (data) { 
      message.success('Admin created successfully');
      workFunction();
      setIsCreateModelVisible(false);

    } else {
      message.error("Admin not created")
    }

  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create Admin</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
      >
        {/* Email */}
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: 'Please input the email!' }]}
        >
          <Input type="email" placeholder="Enter email" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input the password!' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        {/* Role */}
        <Form.Item
          label="Role"
          name="role"
          initialValue="superadmin"
        >
          <Select onChange={handleRoleChange}>
            <Option value="admin">Admin</Option>
            <Option value="superadmin">Super Admin</Option>
          </Select>
        </Form.Item>

        {/* Grouping fields into rows of 2 or 3 checkboxes */}
        <Row gutter={[16, 16]}>
          {/* Offer Section */}
          <Col span={8}>
            <Form.Item name="Offer" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Offer</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="pendingOffer" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Pending Offer</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="ApprovedOffer" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Approved Offer</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="rejectedOffer" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Rejected Offer</Checkbox>
            </Form.Item>
          </Col>

          {/* Job Section */}
          <Col span={8}>
            <Form.Item name="job" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Job</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="pendingjob" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Pending Job</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="Approvedjob" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Approved Job</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="rejectedjob" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Rejected Job</Checkbox>
            </Form.Item>
          </Col>

          {/* Works Section */}
          <Col span={8}>
            <Form.Item name="Works" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Works</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="pendingWorks" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Pending Works</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="ApprovedWorks" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Approved Works</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="rejectedWorks" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Rejected Works</Checkbox>
            </Form.Item>
          </Col>

          {/* Other Fields */}
          <Col span={8}>
            <Form.Item name="Subcription" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Subscription</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="Category" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Category</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="Coupon" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Coupon</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="Adv_code" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Adv Code</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="Report" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Report</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="Offer_post" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>Offer Post</Checkbox>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="User" valuePropName="checked">
              <Checkbox disabled={isSuperAdmin}>User</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Admin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAdmin;
