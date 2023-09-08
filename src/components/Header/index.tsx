import { FC } from 'react'
// import { Input } from 'antd'
// import { ICard } from 'types'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Image } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
// import { Image } from 'antd'

// const { Search } = Input

export const Header: FC = () => {
  // const onSearch = (value: string) => console.log(value)

  return (
    <div className='text-left flex w-full'>
      <div className='w-[80%]'>
        <div className='font-bold text-4xl text-ocean-medium mb-2'>Find the tourist here!</div>
        <div className='text-md text-gray-medium'>4.45 pm, 21 July 2023</div>
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
            <Image
              src={
                'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/672.jpg'
              }
              className='rounded-full'
              width={42}
              height={42}
            />
          </div>

          <div className='w-[80%] '>
            <div className='text-md font-semibold'>Nabilah Ayu Permata</div>
            <div className='text-gray-medium'>Jakarta</div>
          </div>
        </div>
        <div className='relative right-10 w-[80px]'>
          <div className='absolute bg-[#FAF9FA] h-14 w-14 rounded-lg right-[-32px]' />
          <LogoutOutlined
            style={{ fontSize: '22px' }}
            className='absolute z-10 right-[-18px] top-[15px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
