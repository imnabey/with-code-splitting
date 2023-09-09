import React from 'react'
import { Button, Modal, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EnvironmentOutlined, StarOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'
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

  const handleOk = () => {
    try {
      dispatch(
        deleteTourist({
          tourist_email: email,
          tourist_location: location,
          tourist_name: name,
          id: id,
        }),
      )
      setOpen(false)
      toast.success('Data is successfully deleted!', {
        position: toast.POSITION.TOP_CENTER,
      })
      navigate('/')
    } catch (error) {
      toast.success('Deleting data is failed!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
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
            <div
              className={clsx(
                'absolute rounded-full bg-[#ffffff] left-[-10px] top-[-8px] h-[110px] w-[110px]',
              )}
            ></div>
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
      </Modal>
    </>
  )
}

export default ModalDeleteProfile
