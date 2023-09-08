import { FC, useCallback, useEffect, useState } from 'react'
// import { Input } from 'antd'
// import { ICard } from 'types'
// import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { Button, Image } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
// import { Link, Navigate } from 'react-router-dom'
import { logouts, getUser, selectUser } from 'src/store/userSlice'
import { AppDispatch } from 'src/store'
// import { Image } from 'antd'

// const { Search } = Input

export const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const userId = localStorage.getItem('id') || ''
  const userData = useSelector(selectUser)
  // const now = dayjs()

  const handleLogout = () => {
    // e.preventDefault()
    dispatch(logouts())
    navigate('/login')
    // return <Link to='/login' />
  }
  const initFetch = useCallback(() => {
    dispatch(getUser(userId))
  }, [dispatch, userId])

  useEffect(() => {
    initFetch()
  }, [initFetch])
  // const onSearch = (value: string) => console.log(value)
  // console.log(userData, 'userData')
  const now = dayjs()
  const nowFormat = now.format('dddd, MMMM D YYYY')

  return (
    <div className='text-left flex w-full'>
      <div className='w-[80%]'>
        <div className='font-bold text-4xl text-ocean-medium mb-2'>Find the tourist here!</div>
        <div className='text-md text-gray-medium'>{nowFormat}</div>
        {/* 4.45 pm, 21 July 2023 */}
        {/* <Search
          placeholder='input search text'
          allowClear
          onSearch={onSearch}
          // className='h-[x]'
          size='large'
          style={{ width: 400 }}
        /> */}
      </div>

      <div className='w-[20%] justify-end flex'>
        <div className='flex rounded-lg  mr-5 py-2 px-5 items-center w-full'>
          <div className='w-[20%] mr-2'>
            <Image src={userData.avatar} className='rounded-full' width={42} height={42} />
          </div>

          <div className='w-[80%] '>
            <div className='text-md font-semibold'>{userData.name}</div>
            <div className='text-gray-medium'>{userData.email}</div>
          </div>
        </div>
        {/* <Link to={'/login'}> */}
        <div className='relative right-10 w-[80px]'>
          <div className='absolute bg-[#FAF9FA] h-14 w-14 rounded-lg right-[-32px]' />

          <LogoutOutlined
            onClick={handleLogout}
            style={{ fontSize: '22px' }}
            className='absolute z-10 right-[-18px] top-[15px]'
          />
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Header
