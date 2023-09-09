import { FC } from 'react'
import { Link } from 'react-router-dom'
import { PieChartOutlined } from '@ant-design/icons'
import { Menu, Layout } from 'antd'

import WhiteGlass from 'src/assets/img/white-glasses.svg'

const { Sider } = Layout

const getItem = (
  label: JSX.Element,
  key: string,
  icon: JSX.Element,
  children: string,
  type: string,
) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem(
    <Link to={'/'}>All Data</Link>,
    'all',
    <PieChartOutlined style={{ fontSize: '25px', color: 'white' }} />,
    '',
    '',
  ),
]

export const Sidebar: FC = () => {
  return (
    <Sider
      breakpoint='lg'
      style={{ background: '#1f2026' }}
      className='h-auto hidden md:block'
      collapsed={true}
    >
      <div className='py-10'>
        <img src={WhiteGlass} className='h-10' />
        <div className='h-[50vh] flex items-center justify-center'>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='vertical'
            className='w-full'
            items={items}
          />
        </div>
      </div>
    </Sider>
  )
}

export default Sidebar
