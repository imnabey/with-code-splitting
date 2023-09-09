import { FC, useCallback, useEffect } from 'react'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { logouts, getUser, selectUser } from 'src/store/userSlice'
import { AppDispatch } from 'src/store'

export const Header: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const userData = useSelector(selectUser)
  const navigate = useNavigate()
  const token = localStorage.getItem('token') || ''
  const userId = localStorage.getItem('id') || ''
  const now = dayjs()
  const nowFormat = now.format('dddd, MMMM D YYYY')

  const handleLogout = () => {
    dispatch(logouts())
    navigate('/login')
    toast.success('You have logged out!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }

  const initFetch = useCallback(() => {
    dispatch(getUser(userId))
  }, [dispatch, userId])

  useEffect(() => {
    initFetch()
  }, [initFetch, token])

  return (
    <div className='text-left flex md:flex-row flex-col-reverse w-full'>
      <div className='md:w-[75%]'>
        <div className='font-bold text-4xl text-ocean-medium mb-2'>Find the tourist here!</div>
        <div className='text-md text-gray-medium'>{nowFormat}</div>
      </div>

      <div className='md:w-[25%] justify-end flex md:mb-0 mb-10'>
        <div className='flex rounded-lg mr-5 py-2 items-center w-full'>
          <div className='w-[20%] mr-4'>
            <img src={userData?.avatar} className='rounded-full h-[42px] w-[42px]' />
          </div>

          <div className='w-[80%] '>
            <div className='text-md font-semibold'>{userData?.name}</div>
            <div className='text-gray-medium'>{userData?.email}</div>
          </div>
        </div>

        <div className='relative right-10 w-[80px]'>
          <div className='absolute bg-[#FAF9FA] h-14 w-14 rounded-lg right-[-32px]' />

          <LogoutOutlined
            onClick={handleLogout}
            style={{ fontSize: '22px' }}
            className='absolute z-10 right-[-18px] top-[15px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
