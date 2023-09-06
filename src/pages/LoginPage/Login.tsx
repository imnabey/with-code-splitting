import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login, selectLoading, selectErrorMessage, selectUser } from 'src/store/userSlice'
import { AppDispatch } from 'src/store'
import MainLayout from 'src/components/layout/MainLayout'

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  // const navigate = useNavigate()
  const isLoading = useSelector(selectLoading)
  const errorMessage = useSelector(selectErrorMessage)
  const user = useSelector(selectUser)

  const onFinish = (values: { email: string; password: string }) => {
    dispatch(login({ email: values.email, password: values.password }))
    console.log('Success:', values)
    // navigate('/', { replace: true })
  }

  console.log(user)

  if (user) {
    return <Navigate replace to='/' />
  }

  return (
    <MainLayout>
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
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

        <Form.Item<FieldType>
          name='remember'
          valuePropName='checked'
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
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
