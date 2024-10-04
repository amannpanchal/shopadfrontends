import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import Logo from '../../components/Logo/Logo';
import {useNavigate} from 'react-router-dom'
import { authLogin } from '../../api/auth';

const Login = () => {
  const [email,setEmail ] = useState("")
  const [password,setPassword]  = useState('')
  const navigate = useNavigate();
  const onFinish = async () => {
    if (!email || !password) {
      message.error("Please enter email and password");

    }


    else {
      const response = await authLogin(email, password);
      if(response?.token) {
        localStorage.setItem('admintoken', response?.token);
        localStorage.setItem('admindata', JSON.stringify(response?.admin));
         localStorage.setItem('adminid', response?.admin?._id);
         message.success("Login successfull")
         navigate("/")
         window.location.reload();

      }
      else {
        message.error("Login failed.")
      }

    }
   
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      
      <div style={{ marginBottom: '20px' }}>
        <Logo/>
      </div>

      <Form
        name="login_form"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ maxWidth: '300px', width: '100%' }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!', type: 'email' }]}
        >
          <Input
          value  = {email}
          onChange = {(value) =>{setEmail(value.target.value)}}
          
          prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            value={password}
            onChange={(e) =>{setPassword(e.target.value)}}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Sign in
          </Button>
         
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
