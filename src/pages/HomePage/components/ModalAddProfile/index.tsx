import React, { useState } from 'react'
import { Button, Form, Input, Modal, Image } from 'antd'
import clsx from 'clsx'

interface IModal {
  open: boolean
  setOpen: any
  // name: string,
  // location: string,
  // key: number,
  // id: string
  // company: string,
  // handleToggle: (param: any, e: any) => void,
  // favorite: number[],
  // username: string,
  // onClick: () => void
}
type FieldType = {
  email?: string
  password?: string
  remember?: string
  name?: string
}

const ModalAddProfile: React.FC<IModal> = ({ open, setOpen }) => {
  // const [loading, setLoading] = useState(false)
  // const [open, setOpen] = useState(false)
  const [form] = Form.useForm()
  const onFinish = (values: { email: string; password: string }) => {
    // dispatch(login({ email: values.email, password: values.password }))
    console.log('Success:', values)
    setOpen(false)
    // navigate('/', { replace: true })
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
    setOpen(false)
  }

  const handleOk = () => {
    // setLoading(true)
    // setTimeout(() => {
    //   // setLoading(false)
    // }, 3000)
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        console.log(values)
        // onCreate(values)
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        open={true}
        // title='Title'
        // className='rounded-3xl'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key='back'
            className='rounded-3xl font-semibold shadow-none'
            onClick={handleCancel}
          >
            Return
          </Button>,
          <Button
            key='submit'
            type='primary'
            className='rounded-3xl font-semibold shadow-none'
            onClick={handleOk}
          >
            Submit
          </Button>,
        ]}
      >
        <div className=' absolute top-[-50px] left-[210px]'>
          {' '}
          <Image
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/672.jpg'
            }
            className='rounded-full'
            width={90}
            height={90}
          />
        </div>
        <div className='mt-12 mb-5 text-xl font-semibold'>You can add tourist data here!</div>
        <Form
          form={form}
          name='basic'
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label={<div className='text-md font-semibold'>Name</div>}
            name='name'
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input
              placeholder='Please input your name!'
              className={clsx(
                'rounded-3xl bg-white h-12 border-gray-900 outline-0 px-6 focus-visible:outline-0 hover:outline-0  focus:shadow-none',
              )}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={<div className='text-md font-semibold'>Email</div>}
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
            label={<div className='text-md font-semibold'>Password</div>}
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

          {/* <Form.Item>
            <Button
              type='primary'
              className='text-xl h-14 w-full font-semibold rounded-3xl shadow-none'
              htmlType='submit'
            >
              Login
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  )
}

export default ModalAddProfile