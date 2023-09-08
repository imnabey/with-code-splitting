import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'

import {
  getTouristList,
  touristList,
  touristStatus,
  getTouristById,
  touristId,
} from 'src/store/touristSlice'
import ProtectedLayout from 'src/components/layout/ProtectedLayout'
import { AppDispatch } from 'src/store'
import {
  MailOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  StarOutlined,
} from '@ant-design/icons'
// import Card from 'src/components/Card'
import { Button, Image } from 'antd'
import ModalUpdateProfile from './components/ModalEditProfile'
import ModalDeleteProfile from './components/ModalDeleteProfile'

// import { Col, Row } from 'antd'
// import Card from 'src/components/Card'

export default function DetailPage() {
  const dispatch = useDispatch<AppDispatch>()
  const location = useLocation()
  const touristListData = useSelector(touristList)
  const touristByIdData = useSelector(touristId)
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const detailId = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  console.log('pathname', detailId)
  const touristStatusData = useSelector(touristStatus)

  const initFetch = useCallback(() => {
    dispatch(getTouristList(1))
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])

  useEffect(() => {
    if (touristStatusData === 'idle') {
      dispatch(getTouristById(detailId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showModal = () => {
    setOpen(true)
  }

  const showModalDelete = () => {
    setOpenDelete(true)
  }
  const joinDate = dayjs(touristByIdData.createdat)
  const convertJoinDate = joinDate.format('dddd, MMMM D YYYY')
  // console.log(touristByIdData, 'touristListData')

  return (
    <ProtectedLayout>
      {/* <div id="sidebar"> */}
      {/* <h1>Homepage</h1> */}
      {/* <ul> */}

      <div className='flex mt-16 w-full'>
        {/* <Row gutter={[30, 30]}> */}
        {/* <div className=''> */}
        <div className='w-[70%] mr-10'>
          <div className='flex w-full mb-16'>
            <div className='w-[20%]'>
              <Image
                src={touristByIdData.tourist_profilepicture}
                className='rounded-full mb-10'
                width={150}
                height={150}
              />
            </div>

            <div className='text-left w-[70%]'>
              <div className='text-3xl font-bold text-gray mb-2'>
                {touristByIdData.tourist_name}
              </div>
              <div className='text-lg text-gray-medium '>
                <StarOutlined className='mr-2' />
                {touristByIdData.id}
              </div>
              <div className='text-lg text-gray-medium flex items-center'>
                <MailOutlined className='mr-2' />
                {touristByIdData.tourist_email}
              </div>
              <div className='text-lg text-gray-medium'>
                <ClockCircleOutlined className='mr-2' />

                {convertJoinDate}
              </div>
              <div className='text-lg text-gray-medium mb-4'>
                <EnvironmentOutlined className='mr-2' />
                {touristByIdData.tourist_location}
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
          <div className='bg-gray-light px-10 py-5 shadow-md rounded-3xl'>
            {' '}
            {touristListData.slice(0, 4).map((item: any, index: any) => (
              <div className=' w-full p-2 mb-2 rounded-3xl relative' key={index}>
                <div className='flex items-center'>
                  <Image
                    src={item.tourist_profilepicture}
                    className='rounded-full'
                    width={60}
                    height={60}
                  />
                  <div className='ml-5 text-left '>
                    <div className='flex items-center  mb-2'>
                      <div className='text-xl font-semibold mr-2'>{item.tourist_name}</div>
                      <div className='text-[#ffffff] text-xs bg-ocean-medium py-1 px-3 rounded-2xl'>
                        {item.tourist_location}
                      </div>
                    </div>
                    <div className='text-sm'>{item.id}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[30%]'>
          <div className='h-[75vh] text-left  mb-10  rounded-3xl'>
            <div className='text-gray text-2xl font-bold'>Another Tourists</div>
            <div className='text-left text-md text-gray-medium mb-8'>
              Another tourists are here!
            </div>
            {touristListData.slice(0, 8).map((item: any, index: any) => (
              <div className=' w-full p-2 mb-2 rounded-3xl relative' key={index}>
                <div className='text-left'>
                  <div className='text-lg font-semibold'>{item.tourist_name}</div>
                  <div className='text-sm'> {item.tourist_location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* </Row> */}
      </div>

      <ModalUpdateProfile
        open={open}
        setOpen={setOpen}
        name={touristByIdData.tourist_name}
        email={touristByIdData.tourist_email}
        location={touristByIdData.tourist_location}
        id={touristByIdData.id}
        pic={touristByIdData.tourist_profilepicture}
      />
      <ModalDeleteProfile
        open={openDelete}
        setOpen={setOpenDelete}
        name={touristByIdData.tourist_name}
        email={touristByIdData.tourist_email}
        location={touristByIdData.tourist_location}
        id={touristByIdData.id}
        pic={touristByIdData.tourist_profilepicture}
      />
    </ProtectedLayout>
  )
}
