import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const PaginationLazy = React.lazy(() => import('./Pagination'))

const Pagination = (props: any) => {
  return <Lazyload component={PaginationLazy} {...props} />
}

export default Pagination
