import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import type { PaginationProps } from 'antd'

import { AppDispatch } from 'src/store'
import { getTouristList, touristList, totalTourists } from 'src/store/touristSlice'
import ProtectedLayout from 'src/components/layout/ProtectedLayout'
import Card from 'src/components/Card'
import Pagination from 'src/components/Pagination'

import ModalAddProfile from './components/ModalAddProfile'

const Homepage = () => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(1)

  const dispatch = useDispatch<AppDispatch>()
  const touristListData = useSelector(touristList)
  const totalTouristsData = useSelector(totalTourists)

  const token = localStorage.getItem('token') || ''

  const showModal = () => {
    setOpen(true)
  }

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page)
  }

  const initFetch = useCallback(() => {
    dispatch(getTouristList({ page: current }))
  }, [dispatch, current])

  useEffect(() => {
    initFetch()
  }, [initFetch, token])

  return (
    <ProtectedLayout>
      <div className='md:flex mt-16 w-full'>
        <div className='md:w-[70%] md:mr-10'>
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

          {touristListData.map((item: any) => (
            <div key={item.id}>
              <Card
                name={item.tourist_name}
                pic={item.tourist_profilepicture}
                location={item.tourist_location}
                id={item.id}
              />
            </div>
          ))}
          <div className='mb-10 md:mb-0'>
            <Pagination onChange={onChange} current={current} totalData={totalTouristsData} />
          </div>
        </div>
        <div className='md:w-[30%]'>
          <div className='md:h-[50vh] h-auto text-left px-20 py-14 mb-10 shadow-md bg-gray rounded-3xl'>
            <div className='text-[#ffffff] text-4xl font-bold mb-7'>
              Number of <br /> Tourists
            </div>
            <div className='flex items-baseline mb-14'>
              <div className='text-[#ffffff] text-7xl font-bold  mr-2'> {totalTouristsData} </div>
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
          <div className='md:h-[25vh] h-auto text-left p-12 shadow-md  bg-ocean-medium rounded-3xl'>
            <div className='text-[#ffffff] text-2xl mb-5 font-bold'>Permission Role:</div>
            <div className='text-[#ffffff] text-xl font-semibold'>
              You can delete, update, search <br /> or add tourist data as well <br /> by clicking
              the action icon from each card!
            </div>
          </div>
        </div>
      </div>

      <ModalAddProfile open={open} setOpen={setOpen} setCurrent={setCurrent} />
    </ProtectedLayout>
  )
}

export default Homepage
