import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Select, Row, Col, message } from 'antd';
import { updateAdmin } from '../../../redux/actions/AllActions';

const { Option } = Select;

const EditAdmin = ({
  setIsEditingModelVisible,
  isEditingModelVisible,
  editingRecord,
  workFunction
}) => {
  const [form] = Form.useForm();
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  useEffect(() => {
    if (editingRecord) {
      form.setFieldsValue({
        Email: editingRecord.Email,
        password: editingRecord.password,
        role: editingRecord.role,
        Offer: editingRecord.Offer,
        pendingOffer: editingRecord.pendingOffer,
        ApprovedOffer: editingRecord.ApprovedOffer,
        rejectedOffer: editingRecord.rejectedOffer,
        job: editingRecord.job,
        pendingjob: editingRecord.pendingjob,
        Approvedjob: editingRecord.Approvedjob,
        rejectedjob: editingRecord.rejectedjob,
        Works: editingRecord.Works,
        pendingWorks: editingRecord.pendingWorks,
        ApprovedWorks: editingRecord.ApprovedWorks,
        rejectedWorks: editingRecord.rejectedWorks,
        Subcription: editingRecord.Subcription,
        Category: editingRecord.Category,
        Coupon: editingRecord.Coupon,
        Adv_code: editingRecord.Adv_code,
        Report: editingRecord.Report,
        Offer_post: editingRecord.Offer_post,
        User: editingRecord.User,
      });
      setIsSuperAdmin(editingRecord.role === 'superadmin');
    }
  }, [editingRecord, form]);

  const handleRoleChange = (value) => {
    setIsSuperAdmin(value === 'superadmin');
  };

  const handleFinish = async (values) => {
    // If the role is superadmin, force all fields to true
    if (values.role === 'superadmin') {
      values = {
        ...values,
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
      };
    }

    const data = await updateAdmin(editingRecord?._id, values);

    if (data) {
      setIsEditingModelVisible(false);
      message.success('Admin updated successfully');
      workFunction();
    } else {
      message.error('Admin not updated.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Edit Admin</h2>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: 'Please input the email!' }]}
        >
          <Input type="email" placeholder="Enter email" disabled />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Select onChange={handleRoleChange}>
            <Option value="admin">Admin</Option>
            <Option value="superadmin">Super Admin</Option>
          </Select>
        </Form.Item>

        <Row gutter={[16, 16]}>
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Admin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditAdmin;
