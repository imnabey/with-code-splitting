/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'
import dayjs from 'dayjs'

import { Button, Image } from 'antd'
import {
  MailOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  StarOutlined,
} from '@ant-design/icons'

import {
  getTouristList,
  touristList,
  touristStatus,
  getTouristById,
  touristId,
} from 'src/store/touristSlice'
import { token } from 'src/utils/helper'
import { AppDispatch } from 'src/store'

import ProtectedLayout from 'src/components/layout/ProtectedLayout'

import ModalUpdateProfile from './components/ModalEditProfile'
import ModalDeleteProfile from './components/ModalDeleteProfile'

const DetailPage = () => {
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const touristListData = useSelector(touristList)
  const touristByIdData = useSelector(touristId)
  const touristStatusData = useSelector(touristStatus)
  const location = useLocation()

  const detailId = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  const joinDate = dayjs(touristByIdData?.createdat)
  const convertJoinDate = joinDate.format('dddd, MMMM D YYYY')

  const initFetch = useCallback(() => {
    dispatch(getTouristList({ page: 1, token }))
  }, [dispatch, token])

  const showModal = () => {
    setOpen(true)
  }

  const showModalDelete = () => {
    setOpenDelete(true)
  }

  useEffect(() => {
    initFetch()
  }, [initFetch])

  useEffect(() => {
    if (touristStatusData === 'idle') {
      dispatch(getTouristById({ id: detailId, token }))
    }
  }, [dispatch, token, detailId])

  return (
    <ProtectedLayout>
      <div className='md:flex mt-16 w-full'>
        <div className='md:w-[70%] md:mr-10'>
          <div className='md:flex w-full mb-16'>
            <div className='md:w-[25%] md:mb-0 mb-5'>
              <Image
                src={touristByIdData?.tourist_profilepicture}
                className='rounded-full mb-10'
                width={150}
                height={150}
              />
            </div>

            <div className='text-left md:w-[75%]'>
              <div className='text-3xl font-bold text-gray mb-2'>
                {touristByIdData?.tourist_name}
              </div>
              <div className='text-lg text-gray-medium '>
                <StarOutlined className='mr-2' />
                {touristByIdData?.id}
              </div>
              <div className='text-lg text-gray-medium flex items-center'>
                <MailOutlined className='mr-2' />
                {touristByIdData?.tourist_email}
              </div>
              <div className='text-lg text-gray-medium'>
                <ClockCircleOutlined className='mr-2' />

                {convertJoinDate}
              </div>
              <div className='text-lg text-gray-medium mb-4'>
                <EnvironmentOutlined className='mr-2' />
                {touristByIdData?.tourist_location}
              </div>
              <div className='flex items-center'>
                {' '}
                <Button
                  type='primary'
                  onClick={showModal}
                  className='px-10 py-5 flex items-center shadow-none mr-5 font-semibold rounded-3xl '
                >
                  Edit Profile
                </Button>
                <Button
                  onClick={showModalDelete}
                  className='px-10 py-5 flex items-center shadow-none mr-5 font-semibold rounded-3xl '
                >
                  Delete Profile
                </Button>
              </div>
            </div>
          </div>

          <div className='text-2xl text-left font-bold mb-2'>More tourists</div>
          <div className='text-left text-md text-gray-medium mb-8'>
            You can find more tourists here!
          </div>
          <div className='bg-gray-light px-10 py-5 mb-10 md:mb-0 shadow-md rounded-3xl'>
            {touristListData?.map((item: any, index: any) => (
              <Link to={`/detail/${item.id}`} key={index}>
                <div className='w-full p-2 mb-2 rounded-3xl relative'>
                  <div className='flex items-center'>
                    <img
                      src={item.tourist_profilepicture}
                      alt={item.tourist_name}
                      className='rounded-full w-[60px] h-[60px]'
                    />
                    <div className='ml-5 text-left '>
                      <div className='flex items-center  mb-2'>
                        <div className='text-xl text-gray font-semibold mr-2'>
                          {item.tourist_name}
                        </div>
                        <div className='text-[#ffffff] text-xs bg-ocean-medium py-1 px-3 rounded-2xl'>
                          {item.tourist_location}
                        </div>
                      </div>
                      <div className='text-sm text-gray-medium'>{item.id}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='md:w-[30%]'>
          <div className='text-left mb-10 rounded-3xl'>
            <div className='text-gray text-2xl font-bold'>Another Tourists</div>
            <div className='text-left text-md text-gray-medium mb-8'>
              Another tourists are here!
            </div>
            {touristListData?.slice(0, 8).map((item: any, index: any) => (
              <Link to={`/detail/${item.id}`} key={index}>
                <div className=' w-full p-2 mb-2 rounded-3xl relative'>
                  <div className='text-left'>
                    <div className='text-lg text-gray font-semibold'>{item.tourist_name}</div>
                    <div className='text-sm text-gray-medium'> {item.tourist_location}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ModalUpdateProfile
        open={open}
        setOpen={setOpen}
        name={touristByIdData?.tourist_name}
        email={touristByIdData?.tourist_email}
        location={touristByIdData?.tourist_location}
        id={touristByIdData?.id}
        pic={touristByIdData?.tourist_profilepicture}
      />
      <ModalDeleteProfile
        open={openDelete}
        setOpen={setOpenDelete}
        name={touristByIdData?.tourist_name}
        email={touristByIdData?.tourist_email}
        location={touristByIdData?.tourist_location}
        id={touristByIdData?.id}
        pic={touristByIdData?.tourist_profilepicture}
      />
    </ProtectedLayout>
  )
}

export default DetailPage
