import { FC } from 'react'
import { ICard } from 'types'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'
import { Image } from 'antd'

export const Card: FC<ICard> = ({ name, key, pic, location, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className='bg-gray-light w-full mb-8 p-5 rounded-3xl relative shadow-md' key={key}>
        <div className='flex items-center'>
          <Image src={pic} className='rounded-full' width={60} height={60} />
          <div className='ml-5 text-left '>
            <div className='flex items-center  mb-2'>
              <div className='text-xl font-semibold mr-2'>{name}</div>
              <div className='text-[#ffffff] text-xs bg-ocean-medium py-1 px-3 rounded-2xl'>
                {location}
              </div>
            </div>
            <div className='text-sm'>{id}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
