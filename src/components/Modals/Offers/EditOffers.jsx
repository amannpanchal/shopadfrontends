import { Card, Form, Input, DatePicker, Select, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { updateOffer } from '../../../redux/actions/AllActions';

const { Option } = Select;

const EditOffer = ({
    setIsEditingModelVisible,
    isEditingModelVisible,
    editingRecord,
    workFunction
}) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);

    const handleFileChange = ({ fileList }) => setFileList(fileList);

    const onFinish = async (values) => {
        console.log(values,'hte vlaus')
        const updatedValues = {
            ...values,
            startDate: values.startDate.format('YYYY-MM-DD'),
            endDate: values.endDate.format('YYYY-MM-DD'),
        };

        const data = await updateOffer(editingRecord?._id, values);
        if (data?.success) {
            workFunction();
            setIsEditingModelVisible(false)
            message.success('Offer details updated successfully!');

            
        }
        else {
            message.error('Failed to update offer details.');
        }
    };

    // Update form values when editingRecord changes
    useEffect(() => {
        if (editingRecord) {
            form.setFieldsValue({
                description: editingRecord.description,
                location: editingRecord.location,
                startDate: moment(editingRecord.startDate),
                endDate: moment(editingRecord.endDate),
                price: editingRecord.price,
                status: editingRecord.status,
                categoryId: editingRecord.categoryId,
                shopId: editingRecord.shopId,
            });
        }
    }, [editingRecord, form]);

    return (
        <Card title="Edit Offer Details" style={{ margin: '20px' }}>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item label="Description" name="description">
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Form.Item
                    label="Location"
                    name="location"
                    rules={[{ required: true, message: 'Please input the location!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Start Date"
                    name="startDate"
                    rules={[{ required: true, message: 'Please select the start date!' }]}
                >
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>

                <Form.Item
                    label="End Date"
                    name="endDate"
                    rules={[{ required: true, message: 'Please select the end date!' }]}
                >
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>

                <Form.Item label="Price" name="price">
                    <Input min={0} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: 'Please select the status!' }]}
                >
                    <Select>
                        <Option value="pending">Pending</Option>
                        <Option value="rejected">Rejected</Option>
                        <Option value="Approve">Approve</Option>
                    </Select>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Update Offer
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default EditOffer;
