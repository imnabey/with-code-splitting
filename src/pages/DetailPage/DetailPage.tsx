import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTouristList, touristList, touristStatus } from 'src/store/touristSlice'
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
// import { Col, Row } from 'antd'
// import Card from 'src/components/Card'

export default function DetailPage() {
  const dispatch = useDispatch<AppDispatch>()
  const touristListData = useSelector(touristList)
  // const touristStatusData = useSelector(touristStatus)

  useEffect(() => {
    // if (touristStatusData === 'idle') {
    dispatch(getTouristList())

    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // console.log(touristListData, 'touristListData')

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
                src={
                  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/672.jpg'
                }
                className='rounded-full mb-10'
                width={150}
                height={150}
              />
            </div>

            <div className='text-left w-[70%]'>
              <div className='text-3xl font-bold text-gray mb-2'>Nabilah Ayu Permata</div>
              <div className='text-lg text-gray-medium '>
                <StarOutlined className='mr-2' />
                32-31242354-564839
              </div>
              <div className='text-lg text-gray-medium flex items-center'>
                <MailOutlined className='mr-2' />
                nabilah@gmail.com
              </div>
              <div className='text-lg text-gray-medium'>
                <ClockCircleOutlined className='mr-2' />
                22-Agustus-2023
              </div>
              <div className='text-lg text-gray-medium mb-4'>
                <EnvironmentOutlined className='mr-2' />
                Jakarta
              </div>
              <div className='flex items-center'>
                {' '}
                <Button
                  type='primary'
                  className='px-10 py-5 flex items-center shadow-none mr-5 font-semibold rounded-3xl '
                >
                  Edit Profile
                </Button>
                <Button
                  // size='large'
                  className='px-10 py-5 flex items-center shadow-none mr-5 font-semibold rounded-3xl '
                >
                  Delete Profile
                </Button>
              </div>
            </div>
          </div>

          <div className='text-2xl text-left font-bold mb-2'>More tourists</div>
          <div className='text-left text-lg text-gray-medium mb-8'>
            You can find more tourists here!
          </div>
          <div className='bg-gray-light px-10 py-5 rounded-3xl'>
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
            <div className='text-gray text-2xl font-bold mb-7'>Another Tourists</div>
            {touristListData.slice(0, 8).map((item: any, index: any) => (
              <div className=' w-full p-2 mb-2 rounded-3xl relative' key={index}>
                {/* <div className='flex items-center'> */}
                <div className='text-left'>
                  {/* <div className=' mb-2'> */}
                  <div className='text-lg font-semibold'>{item.tourist_name}</div>
                  {/* <div className='text-[#ffffff] text-xs bg-ocean-medium py-1 px-3 rounded-2xl'>
                      {item.tourist_location}
                    </div> */}
                  {/* </div> */}
                  <div className='text-sm'>{item.id}</div>
                </div>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* </Row> */}
      </div>

      {/* </ul> */}
      {/* <div id="detail"></div> */}
    </ProtectedLayout>
  )
}
