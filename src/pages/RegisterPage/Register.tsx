import React from 'react'
import { Button, Form, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { register, selectLoading, selectErrorMessage, selectUser } from 'src/store/userSlice'
import { AppDispatch } from 'src/store'
import MainLayout from 'src/components/layout/MainLayout'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  email?: string
  password?: string
  remember?: string
  name?: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const isLoading = useSelector(selectLoading)
  const errorMessage = useSelector(selectErrorMessage)
  const user = useSelector(selectUser)

  const onFinish = (values: { email: string; password: string; name: string }) => {
    dispatch(register({ email: values.email, password: values.password, name: values.name }))
    console.log('Success:', values)
  }

  console.log(user)
  return (
    <MainLayout>
      <h1 className='text-1xl'>Register</h1>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </MainLayout>
  )
}

export default Login
