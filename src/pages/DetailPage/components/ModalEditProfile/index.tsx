import React from 'react'
import { Button, Form, Input, Modal, Image } from 'antd'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { editTourist, getTouristById } from 'src/store/touristSlice'
import { AppDispatch } from 'src/store'
import { token } from 'src/utils/helper'

interface IModalEdit {
  open: boolean
  setOpen: (value: boolean) => void
  name: string
  location: string
  id: string
  email: string
  pic: string
}

type FieldType = {
  email?: string
  password?: string
  remember?: string
  name?: string
  location?: string
}

const ModalUpdateProfile: React.FC<IModalEdit> = ({
  open,
  setOpen,
  name,
  location,
  email,
  id,
  pic,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [form] = Form.useForm()

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        dispatch(
          editTourist({
            tourist_email: values.email,
            tourist_location: values.location,
            tourist_name: values.name,
            id: id,
            token,
          }),
        )
        dispatch(getTouristById({ id, token }))
        toast.success('Data is successfully updated!', {
          position: toast.POSITION.TOP_CENTER,
        })
        setOpen(false)
      })
      .catch(() => {
        toast.error('Updating data is failed!', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
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
        <div className='absolute top-[-50px] left-[255px] '>
          <div className='relative'>
            {' '}
            <div className='absolute rounded-full bg-[#ffffff] left-[-10px] top-[-8px] h-[110px] w-[110px]'>
              {' '}
            </div>
            <Image src={pic} className='rounded-full' width={90} height={90} />
          </div>
        </div>
        <div className='mt-12 mb-5 text-xl font-semibold'>
          You can update the tourist data here!
        </div>
        <Form
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
            label={<div className='text-md font-semibold'>Location</div>}
            name='location'
            className='mb-16'
            rules={[{ required: true, message: 'Please input your location!' }]}
          >
            <Input
              placeholder='Please input your location!'
              className={clsx(
                'rounded-3xl bg-white h-12 border-gray-900 outline-0 px-6 focus-visible:outline-0 hover:outline-0  focus:shadow-none',
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ModalUpdateProfile
