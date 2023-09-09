import { FC } from 'react'
import { Button, Form, Input, Modal, Image } from 'antd'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'

import { addTouristList } from 'src/store/touristSlice'
import { AppDispatch } from 'src/store'

interface IModal {
  open: boolean
  setOpen: (value: boolean) => void
  setCurrent: (value: number) => void
}

type FieldType = {
  email?: string
  password?: string
  remember?: string
  name?: string
  location?: string
}

const ModalAddProfile: FC<IModal> = ({ open, setOpen, setCurrent }) => {
  const dispatch = useDispatch<AppDispatch>()
  const [form] = Form.useForm()

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()

        dispatch(
          addTouristList({
            tourist_email: values.email,
            tourist_location: values.location,
            tourist_name: values.name,
          }),
        )
        setOpen(false)
        setCurrent(240)
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
            <div className='absolute rounded-full bg-[#ffffff] left-[-10px] top-[-8px] h-[110px] w-[110px]'></div>
            <Image
              src={
                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/672.jpg'
              }
              className='rounded-full'
              width={90}
              height={90}
            />
          </div>
        </div>
        <div className='mt-12 mb-5 text-xl font-semibold'>You can add tourist data here!</div>
        <Form
          form={form}
          name='basic'
          layout='vertical'
          initialValues={{ remember: true }}
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

export default ModalAddProfile
