import React from 'react'
import { Button, Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import clsx from 'clsx'

import { register } from 'src/store/userSlice'
import { AppDispatch } from 'src/store'
import LoginPic from 'src/assets/img/login-pic.svg'
import LoginGlass from 'src/assets/img/glasses.svg'
import MainLayout from 'src/components/layout/MainLayout'

type FieldType = {
  email?: string
  password?: string
  remember?: string
  name?: string
}

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  const onFinish = async (values: { email: string; password: string; name: string }) => {
    await dispatch(register({ email: values.email, password: values.password, name: values.name }))
    navigate('/login')
  }

  return (
    <MainLayout>
      <div className='md:flex w-full block'>
        <div className='md:w-3/5 hidden bg-gray-light h-screen md:flex justify-center items-center'>
          <img src={LoginPic} alt='login-pic' className='h-4/5' />
        </div>
        <div className={clsx('md:w-2/5 flex items-center relative h-screen justify-center')}>
          <div className='w-[80%]'>
            <img src={LoginGlass} className='h-12 mb-4' />
            <div className='text-4xl font-bold mb-4'>Create your account!</div>
            <div className='text-md mb-12 text-gray-medium text-lg'>
              Start to manage the dashboard
            </div>
            <Form
              name='basic'
              layout='vertical'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete='off'
            >
              <Form.Item<FieldType>
                label={<div className='text-lg font-semibold'>Name</div>}
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input
                  placeholder='Please input your name'
                  className={clsx(
                    'rounded-3xl bg-white h-12 border-gray-900 outline-0 px-6 focus-visible:outline-0 hover:outline-0',
                  )}
                ></Input>
              </Form.Item>
              <Form.Item<FieldType>
                label={<div className='text-lg font-semibold'>Email</div>}
                name='email'
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input
                  placeholder='Please input your email'
                  className={clsx(
                    'rounded-3xl bg-white h-12 border-gray-900 outline-0 px-6 focus-visible:outline-0 hover:outline-0',
                  )}
                ></Input>
              </Form.Item>

              <Form.Item<FieldType>
                label={<div className='text-lg font-semibold'>Password</div>}
                name='password'
                className='mb-16'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  placeholder='Please input your password!'
                  className={clsx(
                    'rounded-3xl bg-white h-12 border-gray-900 outline-0 px-6 focus-visible:outline-0 hover:outline-0  focus:shadow-none',
                  )}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  className='text-xl h-14 w-full font-semibold rounded-3xl shadow-none'
                  htmlType='submit'
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div className='flex items-center justify-center mt-10 md:mt-20'>
              <div className='flex items-center justify-center '>
                <div className='mr-2'>Already have an account?</div>
                <Link to='/login' className='no-underline text-gray font-semibold'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Register
