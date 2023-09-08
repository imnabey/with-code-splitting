import { FC } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'
import { Button, Menu, Layout, Image } from 'antd'
import WhiteGlass from 'src/assets/img/white-glasses.svg'
// import { bindActionCreators } from 'redux'

// import styles from '../Sidebar/styles.module.scss'

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
  // const dispatch = useDispatch()
  // const isSideBarCloseData = useSelector((state: IRootReducer) => state.isSidebarClose)

  // const { toggleSidebar } = bindActionCreators(actionCreators, dispatch)

  // const toggleCollapsed = () => {
  //   toggleSidebar(!isSideBarCloseData)
  // }

  return (
    <Sider
      breakpoint='lg'
      // theme={'light'}
      style={{ background: '#1f2026' }}
      className='h-auto'
      // flex-[0_0_350px] max-w-full basis-0
      // className={styles.sidebar}
      collapsed={true}
    >
      <div className='py-10'>
        <img src={WhiteGlass} className='h-10' />
        {/* <Button
        type='primary'
        // className={`${styles.sidebar__btn} ${
        //   isSideBarCloseData ? styles.sidebar__btnclose : styles.sidebar__btnopen
        // }`}
        // onClick={toggleCollapsed}
      >
        <MenuUnfoldOutlined />
        {isSideBarCloseData ? : <MenuFoldOutlined />}
      </Button> */}
        <div className='h-[50vh] flex items-center justify-center'>
          <Menu
            // theme={'light'}
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
