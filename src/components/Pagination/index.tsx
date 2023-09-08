import { useState, FC } from 'react'
import { Pagination } from 'antd'
import { IPagination } from 'types'

// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'
// import { Button, Menu, Layout, Image } from 'antd'

export const PaginationComponent: FC<IPagination> = ({ current, onChange, totalData }) => {
  return <Pagination current={current} onChange={onChange} total={totalData} />
}

export default PaginationComponent
