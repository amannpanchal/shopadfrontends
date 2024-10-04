import { Button, Checkbox, DatePicker, Form, Input, InputNumber, message, Select, TimePicker } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: "Software Developer",
    description: "Develop web applications using MERN stack",
    gender: "Male",
    areaWork: "Web Development",
    experienceRequired: "2 years",
    workTiming: {
      startTime: "09:00 AM",
      endTime: "06:00 PM"
    },
    facilities: ["Health Insurance", "Remote Work"],
    incentiveOffered: {
      amount: 10000,
      currency: "INR"
    },
    interviewTiming: "2024-09-20T10:00:00.000Z",
    vehicleRequired: "No",
    message: "Apply if you have a good portfolio",
    isCv: true,
    isCertificate: false,
    isPolice: true,
    salary: {
      amount: 50000,
      currency: "INR"
    },
    startDate: "2024-10-01T00:00:00.000Z",
    endDate: "2024-12-31T00:00:00.000Z",
    status: "pending"
  });


  const handleFinish = (values) => {
    setFormData({
      ...formData,
      ...values,
      workTiming: {
        startTime: values.workStartTime.format('HH:mm A'),
        endTime: values.workEndTime.format('HH:mm A'),
      },
      interviewTiming: values.interviewTiming.toISOString(),
      startDate: values.startDate.toISOString(),
      endDate: values.endDate.toISOString(),
    });
    message.success('Job details updated successfully!');
  };

  return (
    <Form
      
      layout="inline"
      onFinish={handleFinish}
      initialValues={{
        ...formData,
        workStartTime: moment(formData.workTiming.startTime, 'HH:mm A'),
        workEndTime: moment(formData.workTiming.endTime, 'HH:mm A'),
        interviewTiming: moment(formData.interviewTiming),
        startDate: moment(formData.startDate),
        endDate: moment(formData.endDate),
      }}
    
    
    >
      <Form.Item label="Job Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Job Description" name="description">
        <Input.TextArea />
      </Form.Item>


      <Form.Item label="Gender" name="gender">
        <Select>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Area of Work" name="areaWork">
        <Input />
      </Form.Item>
      <Form.Item label="Experience Required" name="experienceRequired">
        <Input />
      </Form.Item>


      <Form.Item label="Work Timing Start" name="workStartTime">
        <TimePicker format="HH:mm A" />
      </Form.Item>
      <Form.Item label="Work Timing End" name="workEndTime">
        <TimePicker format="HH:mm A" />
      </Form.Item>

      <Form.Item label="Facilities" name="facilities">
        <Checkbox.Group options={['Health Insurance', 'Remote Work']} />
      </Form.Item>

      <Form.Item label="Incentive Amount" name={['incentiveOffered', 'amount']}>
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item label="Interview Timing" name="interviewTiming">
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item label="Vehicle Required" name="vehicleRequired">
        <Select>
          <Select.Option value="Yes">Yes</Select.Option>
          <Select.Option value="No">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Additional Message" name="message">
        <Input.TextArea />
      </Form.Item>


      <Form.Item label="Include CV" name="isCv" valuePropName="checked">
        <Checkbox />
      </Form.Item>

      <Form.Item label="Include Certificate" name="isCertificate" valuePropName="checked">
        <Checkbox />
      </Form.Item>

      <Form.Item label="Police Clearance Required" name="isPolice" valuePropName="checked">
        <Checkbox />
      </Form.Item>


      <Form.Item label="Salary Amount" name={['salary', 'amount']}>
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item label="Currency" name={['salary', 'currency']}>
        <Input />
      </Form.Item>



      <Form.Item label="Start Date" name="startDate">
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item label="End Date" name="endDate">
        <DatePicker format="YYYY-MM-DD" />
      </Form.Item>

      <Form.Item label="Job Status" name="status">
        <Select>
          <Select.Option value="pending">Pending</Select.Option>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="completed">Completed</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>




    </Form>
  )
}

export default CreateJob