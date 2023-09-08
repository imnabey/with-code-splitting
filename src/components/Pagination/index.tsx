import { useState, FC } from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'
// import { Button, Menu, Layout, Image } from 'antd'

export const PaginationComponent: FC = () => {
  const [current, setCurrent] = useState(3)

  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page)
    setCurrent(page)
  }

  return <Pagination current={current} onChange={onChange} total={50} />
}

export default PaginationComponent
