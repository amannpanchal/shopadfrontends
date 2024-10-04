// import React, { useEffect } from 'react';
// import { Form, Input, Button, DatePicker, TimePicker, Checkbox, InputNumber, Select, message, Switch } from 'antd';
// import moment from 'moment';
// import { updateJob } from '../../../redux/actions/AllActions';

// const EditJob = ({ setIsEditingModelVisible, isEditingModelVisible, editingRecord, workFunction }) => {
//     const [form] = Form.useForm();

    
//     useEffect(() => {
//         form.setFieldsValue({
//             title: editingRecord?.title,
//             description: editingRecord?.description,
//             gender: editingRecord?.gender,
//             areaWork: editingRecord?.areaWork,
//             experienceRequired: editingRecord?.experienceRequired,
//             workStartTime: editingRecord?.workStartTime ? moment(editingRecord?.workStartTime, 'HH:mm A') : null,
//             workEndTime: editingRecord?.workEndTime ? moment(editingRecord?.workEndTime, 'HH:mm A') : null,
//             isActive: editingRecord?.isActive,
//             facilities: editingRecord?.facilities,
//             incentiveOffered: editingRecord?.incentiveOffered,
//             interviewTiming: editingRecord?.interviewTiming ? moment(editingRecord?.interviewTiming) : null,
//             vehicleRequired: editingRecord?.vehicleRequired,
//             isCv: editingRecord?.isCv,
//             isCertificate: editingRecord?.isCertificate,
//             isPolice: editingRecord?.isPolice,
//             shopName: editingRecord?.shopName,
//             designationName: editingRecord?.designationName,
//             salary: editingRecord?.salary,
//             contactNumber: editingRecord?.contactNumber,
//             contactEmail: editingRecord?.contactEmail,
//             startDate: editingRecord?.startDate ? moment(editingRecord?.startDate) : null,
//             endDate: editingRecord?.endDate ? moment(editingRecord?.endDate) : null,
//             status: editingRecord?.status,
//         });
//     }, [editingRecord, form]);

//     const handleFinish = async (values) => {
//         const updatedData = {
//             ...values,
//             workTiming: {
//                 startTime: values.workStartTime ? values.workStartTime.format('HH:mm A') : null,
//                 endTime: values.workEndTime ? values.workEndTime.format('HH:mm A') : null,
//             },
//             interviewTiming: values.interviewTiming ? values.interviewTiming.toISOString() : null,
//             startDate: values.startDate ? values.startDate.toISOString() : null,
//             endDate: values.endDate ? values.endDate.toISOString() : null,
//         };

//         const data = await updateJob(editingRecord?._id, updatedData);
//         if (data?.success) {
//             setIsEditingModelVisible(false);
//             message.success('Job details updated successfully!');
//             workFunction();
//         } else {
//             message.error('Failed to edit the job');
//         }
//     };

//     return (
//         <Form
//             layout={'vertical'}
//             form={form}
//             onFinish={handleFinish}
          
//         >
//             <Form.Item label="Job Title" name="title">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Job Description" name="description">
//                 <Input.TextArea />
//             </Form.Item>

//             <Form.Item label="Gender" name="gender">
//                 <Select>
//                     <Select.Option value="Male">Male</Select.Option>
//                     <Select.Option value="Female">Female</Select.Option>
//                     <Select.Option value="Other">Other</Select.Option>
//                 </Select>
//             </Form.Item>

//             <Form.Item label="Area of Work" name="areaWork">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Experience Required" name="experienceRequired">
//                 <Input />
//             </Form.Item>

//             <Form.Item
//                 label="Work Timing Start"
//                 name="workStartTime"
//                 rules={[{ required: true, message: 'Please select a start time' }]}
//             >
//                 <TimePicker format="HH:mm A" />
//             </Form.Item>

//             <Form.Item
//                 label="Work Timing End"
//                 name="workEndTime"
//                 rules={[{ required: true, message: 'Please select an end time' }]}
//             >
//                 <TimePicker format="HH:mm A" />
//             </Form.Item>

//             <Form.Item label="Active" name="isActive" valuePropName="checked">
//                 <Switch />
//             </Form.Item>

//             <Form.Item label="Facilities" name="facilities">
//                 <Checkbox.Group options={['Health Insurance', 'Remote Work']} />
//             </Form.Item>

//             <Form.Item label="Incentive Amount" name="incentiveOffered">
//                 <InputNumber min={0} />
//             </Form.Item>

//             <Form.Item
//                 label="Interview Timing"
//                 name="interviewTiming"
//                 rules={[{ required: true, message: 'Please select interview timing' }]}
//             >
//                 <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
//             </Form.Item>

//             <Form.Item label="Vehicle Required" name="vehicleRequired">
//                 <Select>
//                     <Select.Option value="Yes">Yes</Select.Option>
//                     <Select.Option value="No">No</Select.Option>
//                 </Select>
//             </Form.Item>

//             <Form.Item label="Include CV" name="isCv" valuePropName="checked">
//                 <Checkbox />
//             </Form.Item>

//             <Form.Item label="Include Certificate" name="isCertificate" valuePropName="checked">
//                 <Checkbox />
//             </Form.Item>

//             <Form.Item label="Police Clearance Required" name="isPolice" valuePropName="checked">
//                 <Checkbox />
//             </Form.Item>

//             <Form.Item label="Shop Name" name="shopName">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Designation Name" name="designationName">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Salary" name="salary">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Contact Number" name="contactNumber">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Contact Email" name="contactEmail">
//                 <Input />
//             </Form.Item>

//             <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: 'Please select a start date' }]}>
//                 <DatePicker format="YYYY-MM-DD" />
//             </Form.Item>

//             <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: 'Please select an end date' }]}>
//                 <DatePicker format="YYYY-MM-DD" />
//             </Form.Item>

//             <Form.Item label="Job Status" name="status">
//                 <Select>
//                     <Select.Option value="pending">Pending</Select.Option>
//                     <Select.Option value="active">Active</Select.Option>
//                     <Select.Option value="completed">Completed</Select.Option>
//                 </Select>
//             </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                     Save
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default EditJob;







import React, { useEffect } from 'react';
import { Form, Input, Button, Select, DatePicker, Switch, Checkbox, InputNumber, message } from 'antd';
import moment from 'moment';
import { updateJob } from '../../../redux/actions/AllActions';

const { TextArea } = Input;

const EditWork = ({ setIsEditingModelVisible, isEditingModelVisible, editingRecord, workFunction }) => {
    const [form] = Form.useForm();

    // Set initial values for the form based on the schema
    useEffect(() => {
        if (editingRecord) {
            form.setFieldsValue({
                title: editingRecord?.title,
                description: editingRecord?.description,
                gender: editingRecord?.gender,
                areaWork: editingRecord?.areaWork,
                experienceRequired: editingRecord?.experienceRequired,
                workTiming: editingRecord?.workTiming ? moment(editingRecord?.workTiming, 'HH:mm A') : null,
                isActive: editingRecord?.isActive,
                incentiveOffered: editingRecord?.incentiveOffered,
                interviewTiming: editingRecord?.interviewTiming ? moment(editingRecord?.interviewTiming) : null,
                vehicleRequired: editingRecord?.vehicleRequired,
                isCv: editingRecord?.isCv,
                isCertificate: editingRecord?.isCertificate,
                isPolice: editingRecord?.isPolice,
                shopName: editingRecord?.shopName,
                designationName: editingRecord?.designationName,
                salary: editingRecord?.salary,
                contactNumber: editingRecord?.contactNumber,
                contactEmail: editingRecord?.contactEmail,
                startDate: editingRecord?.startDate ? moment(editingRecord?.startDate) : null,
                endDate: editingRecord?.endDate ? moment(editingRecord?.endDate) : null,
                status: editingRecord?.status,
                ownerId: editingRecord?.ownerId,
                location: editingRecord?.location,
                firmLocation: editingRecord?.firmLocation,
                latitude: editingRecord?.latitude,
                longitude: editingRecord?.longitude,
                manpowerNumber: editingRecord?.manpowerNumber,
            });
        }
    }, [editingRecord, form]);

    const handleFinish = async (values) => {
        const updatedData = {
            ...values,
            workTiming: values.workTiming ? values.workTiming.format('HH:mm A') : null,
            interviewTiming: values.interviewTiming ? values.interviewTiming.toISOString() : null,
            startDate: values.startDate ? values.startDate.toISOString() : null,
            endDate: values.endDate ? values.endDate.toISOString() : null,
        };

        const data = await updateJob(editingRecord?._id, updatedData);
        if (data?.success) {
            setIsEditingModelVisible(false);
            message.success('Job details updated successfully!');
            workFunction();
        } else {
            message.error('Failed to edit the job');
        }
    };

    return (
        <Form
            initialValues={{}}
        
            form={form} layout="vertical" onFinish={handleFinish}>
            {/* Title */}
            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter a title' }]}>
                <Input />
            </Form.Item>

            {/* Description */}
            <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter a description' }]}>
                <TextArea rows={4} />
            </Form.Item>

            {/* Owner ID */}
            {/* <Form.Item label="Owner ID" name="ownerId" rules={[{ required: true, message: 'Please provide the owner ID' }]}>
                <Input />
            </Form.Item> */}

            {/* Location */}
            <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please enter a location' }]}>
                <Input />
            </Form.Item>

            {/* Firm Location */}
            <Form.Item label="Firm Location" name="firmLocation">
                <Input />
            </Form.Item>

            {/* Gender */}
            <Form.Item label="Gender" name="gender">
                <Select>
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                    <Select.Option value="Other">Other</Select.Option>
                </Select>
            </Form.Item>

            {/* Area of Work */}
            <Form.Item label="Area of Work" name="areaWork">
                <Input />
            </Form.Item>

            {/* Number of Workers Required */}
            <Form.Item label="Number of Workers" name="manpowerNumber">
                <InputNumber min={0} />
            </Form.Item>

            {/* Experience Required */}
            <Form.Item label="Experience Required" name="experienceRequired">
                <Input />
            </Form.Item>

            {/* Work Timing */}
            <Form.Item label="Work Timing" name="workTiming">
                <DatePicker showTime format="HH:mm A" />
            </Form.Item>

            {/* Facilities */}
            <Form.Item label="Facilities" name="facilities">
                <Checkbox.Group options={['Health Insurance', 'Remote Work']} />
            </Form.Item>

            {/* Incentive Offered */}
            <Form.Item label="Incentive Offered" name="incentiveOffered">
                <Input />
            </Form.Item>

            {/* Interview Timing */}
            <Form.Item label="Interview Timing" name="interviewTiming">
                <DatePicker showTime format="YYYY-MM-DD HH:mm" />
            </Form.Item>

         
            <Form.Item label="Vehicle Required" name="vehicleRequired">
              <Input/>
            </Form.Item>

            {/* CV, Certificate, Police Verification */}
            <Form.Item label="Require CV" name="isCv" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Require Certificate" name="isCertificate" valuePropName="checked">
                <Switch />
            </Form.Item>

            <Form.Item label="Require Police Clearance" name="isPolice" valuePropName="checked">
                <Switch />
            </Form.Item>

            {/* Shop Name */}
            <Form.Item label="Shop Name" name="shopName" rules={[{ required: true, message: 'Please enter the shop name' }]}>
                <Input />
            </Form.Item>

            {/* Designation */}
            <Form.Item label="Designation" name="designationName">
                <Input />
            </Form.Item>

            {/* Salary */}
            <Form.Item label="Salary" name="salary" rules={[{ required: true, message: 'Please enter the salary' }]}>
                <Input />
            </Form.Item>

            {/* Contact Number */}
            <Form.Item label="Contact Number" name="contactNumber" rules={[{ required: true, message: 'Please enter a contact number' }]}>
                <Input />
            </Form.Item>

            {/* Contact Email */}
            <Form.Item label="Contact Email" name="contactEmail" rules={[{ required: true, message: 'Please enter a contact email' }]}>
                <Input />
            </Form.Item>

            
            {/* <Form.Item label="Latitude" name="latitude" rules={[{ required: true, message: 'Please enter latitude' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Longitude" name="longitude" rules={[{ required: true, message: 'Please enter longitude' }]}>
                <Input />
            </Form.Item> */}

            {/* Start Date */}
            <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: 'Please select a start date' }]}>
                <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            {/* End Date */}
            <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: 'Please select an end date' }]}>
                <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            {/* Status */}
            <Form.Item label="Status" name="status">
                <Select>
                    <Select.Option value="pending">Pending</Select.Option>
                    <Select.Option value="Rejected">Rejected</Select.Option>
                    <Select.Option value="Approve">Approved</Select.Option>
                </Select>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save Offer
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditWork;
