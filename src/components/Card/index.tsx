import { FC } from 'react'
import { Link } from 'react-router-dom'

import { ICard } from 'types'

const Card: FC<ICard> = ({ name, pic, location, id }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className='bg-gray-light w-full mb-8 p-5 rounded-3xl relative shadow-md'>
        <div className='flex items-center'>
          <img src={pic} className='rounded-full h-[65px] w-[65px]' />
          <div className='ml-5 text-left '>
            <div className='flex items-center  mb-2'>
              <div className='text-xl text-gray font-semibold mr-2'>{name}</div>
              <div className='text-[#ffffff]  text-xs bg-ocean-medium py-1 px-3 rounded-2xl'>
                {location}
              </div>
            </div>
            <div className='text-sm text-gray-medium'>{id}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
