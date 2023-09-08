import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTouristList, touristList, touristStatus } from 'src/store/touristSlice'
import ProtectedLayout from 'src/components/layout/ProtectedLayout'
import { AppDispatch } from 'src/store'
// import { Col, Row } from 'antd'
import Card from 'src/components/Card'
import Pagination from 'src/components/Pagination'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import ModalAddProfile from './components/ModalAddProfile'

export default function Homepage() {
  const dispatch = useDispatch<AppDispatch>()
  const touristListData = useSelector(touristList)
  const [open, setOpen] = useState(false)
  // const touristStatusData = useSelector(touristStatus)

  useEffect(() => {
    // if (touristStatusData === 'idle') {
    dispatch(getTouristList())

    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showModal = () => {
    setOpen(true)
  }
  console.log(touristListData, 'touristListData')

  return (
    <ProtectedLayout>
      {/* <div id="sidebar"> */}
      {/* <h1>Homepage</h1> */}
      {/* <ul> */}

      <div className='flex mt-16 w-full'>
        <div className='w-[70%] mr-10'>
          <div className='flex justify-between mb-10'>
            <div>
              <div className='text-2xl text-left font-bold text-gray'>Tourist Data</div>
              <div className='text-left text-md text-gray-medium '>All tourists are here!</div>
            </div>

            <Button
              type='primary'
              onClick={showModal}
              className='px-8 py-6 flex items-center shadow-none mr-5 font-semibold text-lg rounded-3xl '
            >
              <PlusCircleOutlined />
              Add tourist
            </Button>
          </div>

          {touristListData.slice(0, 5).map((item: any, index: any) => (
            // <Col className='gutter-row' span={8}>
            <Card
              key={index}
              name={item.tourist_name}
              pic={item.tourist_profilepicture}
              location={item.tourist_location}
              id={item.id}
            />
            // </Col>
          ))}
          <Pagination />
        </div>
        <div className='w-[30%]'>
          <div className='h-[50vh] text-left px-20 py-14 mb-10 shadow-md bg-gray rounded-3xl'>
            <div className='text-[#ffffff] text-4xl font-bold mb-7'>
              Number of <br /> Tourists
            </div>
            <div className='flex items-baseline mb-14'>
              {' '}
              <div className='text-[#ffffff] text-7xl font-bold  mr-2'>2345</div>
              <div className='text-3xl text-[#ffffff] font-semibold'>people</div>
            </div>

            <div className='text-[#ffffff] text-xl mb-10'>
              You can see the details <br /> by clicking one card of the tourist list
            </div>
            <div className='flex item-center'>
              {touristListData.slice(0, 7).map((picItem: any, picIndex: any) => (
                <img
                  key={picIndex}
                  src={picItem.tourist_profilepicture}
                  className='rounded-full w-7'
                />
              ))}
            </div>
          </div>
          <div className='h-[25vh] text-left p-12 shadow-md  bg-ocean-medium rounded-3xl'>
            <div className='text-[#ffffff] text-2xl mb-5 font-bold'>Permission Role:</div>
            <div className='text-[#ffffff] text-xl font-semibold'>
              You can delete, update, search <br /> or add tourist data as well <br /> by clicking
              the action icon from each card!
            </div>
          </div>
        </div>

        {/* </div> */}

        {/* </Row> */}
      </div>

      {/* </ul> */}
      {/* <div id="detail"></div> */}
      <ModalAddProfile open={open} setOpen={setOpen} />
    </ProtectedLayout>
  )
}
