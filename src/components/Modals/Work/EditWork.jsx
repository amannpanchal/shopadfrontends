import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Switch, message } from 'antd';
import { updateWork } from '../../../redux/actions/AllActions';
import { useDispatch } from 'react-redux';

const { Option } = Select;

const EditWork = ({
    setIsEditingModelVisible,
    isEditingModelVisible,
    editingRecord,
    workFunction
}) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingRecord) {
            form.setFieldsValue({
                contactEmail: editingRecord?.contactEmail,
                contactNumber: editingRecord?.contactNumber,
                description: editingRecord?.description,
                designationName: editingRecord?.designationName,
                status: editingRecord?.status,
                salary: editingRecord?.salary,
                location: editingRecord?.location,
                isActive: editingRecord?.isActive,
                shiftTime: editingRecord?.shiftTime,
                facebookId: editingRecord?.facebookId,
                emailId: editingRecord?.emailId,
                websiteAddress: editingRecord?.websiteAddress,
                instaId: editingRecord?.instaId,
                name: editingRecord?.name
            });
        }
    }, [editingRecord, form]);

    const handleFinish = async (values) => {
        setLoading(true);
        try {
            await updateWork(editingRecord._id, values);
            message.success('Work updated successfully');
            workFunction();
            setIsEditingModelVisible(false);
            setLoading(false);
        } catch (err) {
            setIsEditingModelVisible(false);
            message.error('Work not updated successfully');
            setLoading(false);
            console.error('Failed to update work', err);
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
        >
            <Form.Item label="Contact Email" name="contactEmail">
                <Input />
            </Form.Item>

            <Form.Item label="Contact Number" name="contactNumber">
                <Input />
            </Form.Item>

            <Form.Item label="Description" name="description">
                <Input />
            </Form.Item>

            <Form.Item label="Designation Name" name="designationName">
                <Input />
            </Form.Item>

            <Form.Item label="Status" name="status">
                <Select>
                    <Option value="pending">Pending</Option>
                    <Option value="approved">Approved</Option>
                    <Option value="rejected">Rejected</Option>
                </Select>
            </Form.Item>

            <Form.Item name="location" label="Location">
                <Input />
            </Form.Item>

            <Form.Item label="Salary Amount" name="salary">
                <Input />
            </Form.Item>

            <Form.Item label="Active" name="isActive">
                <Switch />
            </Form.Item>

            <Form.Item label="Shift Time" name="shiftTime">
                <Select>
                    <Option value="day">Day</Option>
                    <Option value="night">Night</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Facebook Id" name="facebookId">
                <Input />
            </Form.Item>

            <Form.Item label="Email Id" name="emailId">
                <Input />
            </Form.Item>

            <Form.Item label="Website Address" name="websiteAddress">
                <Input />
            </Form.Item>

            <Form.Item label="Instagram Id" name="instaId">
                <Input />
            </Form.Item>

            <Form.Item label="Name" name="name">
                <Input />
            </Form.Item>

            <Button htmlType="submit" loading={loading}>
                Submit
            </Button>
        </Form>
    );
};

export default EditWork;
