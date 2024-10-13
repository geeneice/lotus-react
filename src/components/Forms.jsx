import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Forms = ({message, label, label2, goTo, Btn}) => (
  <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"

    className="w-[50%]"
  >
    <Form.Item
      label={label}
      name="username"
      rules={[
        {
          required: true,
          message: {message},
        },
      ]}
    >
      <Input className='h-[48px] ' placeholder="Email"/>
    </Form.Item>

    <Form.Item
      label={label2}
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="Password" className='h-[48px]' />
    </Form.Item>


    <div className='flex justify-between items-center'>
    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      className= 'border self-center' >    
    </Form.Item> */}

    <Checkbox className="font-semibold">Remember me</Checkbox>

    <a className='text-custompurple'>Forgot Password?</a> 

    </div>

    <Form.Item
    className='pt-12'>
      <Link to={goTo}>
      <Button className="w-[100%] h-[48px] bg-custompurple text-white" htmlType="submit">
      {Btn}
      </Button>
       
      </Link>
    </Form.Item>
  </Form>
);
export default Forms;