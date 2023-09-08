import React, { useState } from 'react'
import { Button, Form, Input, Modal, Image } from 'antd'
import clsx from 'clsx'
import { useNavigate, Link } from 'react-router-dom'
import {
  // MailOutlined,
  // ClockCircleOutlined,
  EnvironmentOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTourist } from 'src/store/touristSlice'
import { AppDispatch } from 'src/store'

interface IModal {
  open: boolean
  setOpen: (value: boolean) => void
  name: string
  location: string
  id: string
  email: string
  pic: string
}

// type FieldType = {
//   email?: string
//   password?: string
//   remember?: string
//   name?: string
//   location?: string
// }

const ModalDeleteProfile: React.FC<IModal> = ({
  open,
  setOpen,
  name,
  location,
  email,
  id,
  pic,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  // const [loading, setLoading] = useState(false)
  // const [open, setOpen] = useState(false)
  // const [form] = Form.useForm()

  // const onFinish = (values: { email: string; password: string }) => {
  //   // dispatch(login({ email: values.email, password: values.password }))
  //   console.log('Success:', values)
  //   setOpen(false)
  //   // navigate('/', { replace: true })
  // }
  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo)
  //   setOpen(false)
  // }

  const handleOk = () => {
    const profileData = {
      name,
      id,
      location,
      email,
    }
    dispatch(
      deleteTourist({
        tourist_email: email,
        tourist_location: location,
        tourist_name: name,
        id: id,
      }),
    )
    console.log(profileData, 'profileData')
    setOpen(false)
    navigate('/')
    // setLoading(true)
    // setTimeout(() => {
    //   // setLoading(false)
    // }, 3000)
    // form
    //   .validateFields()
    //   .then((values) => {
    //     form.resetFields()
    //     console.log(values)
    //     // onCreate(values)
    //   })
    //   .catch((info) => {
    //     console.log('Validate Failed:', info)
    //   })
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        open={open}
        onOk={handleOk}
        width={600}
        onCancel={handleCancel}
        footer={[
          <Button
            key='back'
            className='rounded-3xl font-semibold shadow-none'
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            key='submit'
            type='primary'
            className='rounded-3xl font-semibold shadow-none'
            onClick={handleOk}
          >
            Delete
          </Button>,
        ]}
      >
        <div className='absolute top-[-50px] left-[255px] '>
          <div className='relative'>
            {' '}
            <div className='absolute rounded-full bg-[#ffffff] left-[-10px] top-[-8px] h-[110px] w-[110px]'>
              {' '}
            </div>
            <Image src={pic} className='rounded-full' width={90} height={90} />
          </div>
        </div>
        <div className='mt-12 mb-5 text-2xl font-semibold'>
          Are you sure want to delete this data?
        </div>
        <div className='text-xl font-semibold'>{name}</div>
        <div className='text-l text-gray-medium'>
          <EnvironmentOutlined className='mr-2' />
          {location}
        </div>
        <div className='text-l text-gray-medium mb-10'>
          <StarOutlined className='mr-2' />
          {id}
        </div>
        {/* <Form
          form={form}
          name='basic'
          layout='vertical'
          initialValues={{
            name: name,
            location: location,
            id: id,
            email: email,
          }}
          autoComplete='off'
        /> */}
      </Modal>
    </>
  )
}

export default ModalDeleteProfile
