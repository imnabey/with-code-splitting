import React from 'react'
import { Button, Form, Input } from 'antd'
import clsx from 'clsx'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginAPI } from 'src/services/api/userAPI'

import MainLayout from 'src/components/layout/MainLayout'
import LoginPic from 'src/assets/img/login-pic.svg'
import LoginGlass from 'src/assets/img/glasses.svg'

type FieldType = {
  email?: string
  password?: string
  remember?: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const urlFrom = location.state?.from || '/'

  const onFinish = async (values: { email: string; password: string }) => {
    const response = await loginAPI({ email: values.email, password: values.password })

    if (response.data.Token) {
      localStorage.setItem('token', response.data.Token)
      localStorage.setItem('id', response.data.Id)

      navigate(urlFrom, { replace: true })
      toast.success('Successfully login!', {
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      toast.error('Login is failed!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <MainLayout>
      <div className='md:flex w-full block'>
        <div className='md:w-3/5 hidden bg-gray-light h-screen md:flex justify-center items-center'>
          <img src={LoginPic} className='h-4/5' />
        </div>
        <div className={clsx('md:w-2/5 flex items-center relative h-screen justify-center')}>
          <div className='w-[80%]'>
            <img src={LoginGlass} alt='icon-glassess' className='h-12 mb-4' />
            <div className='text-4xl font-bold mb-3'>Welcome Back!</div>
            <div className='mb-12 text-gray-medium text-lg'>Please enter your details</div>
            <Form name='basic' layout='vertical' onFinish={onFinish} autoComplete='off'>
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
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div className='flex items-center justify-center mt-10 md:mt-40'>
              <div className='flex items-center justify-center '>
                <div className='mr-2'>Don't you have an account?</div>
                <Link to='/register' className='no-underline text-gray font-semibold'>
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Login
