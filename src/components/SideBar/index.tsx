import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'

import WhiteGlass from 'src/assets/img/white-glasses.svg'

const { Sider } = Layout

export const Sidebar: FC = () => {
  return (
    <Sider
      breakpoint='lg'
      style={{ background: '#1f2026' }}
      className='h-auto hidden md:block'
      collapsed={true}
    >
      <div className='py-10'>
        <Link to='/'>
          <img src={WhiteGlass} className='h-10' />
        </Link>

        <div className='h-[50vh] flex items-center justify-center'>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='vertical'
            className='w-full'
          />
        </div>
      </div>
    </Sider>
  )
}

export default Sidebar
