import { FC } from 'react'
import { Pagination } from 'antd'
import { IPagination } from 'types'

export const PaginationComponent: FC<IPagination> = ({ current, onChange, totalData }) => {
  return <Pagination current={current} onChange={onChange} total={totalData} />
}

export default PaginationComponent
