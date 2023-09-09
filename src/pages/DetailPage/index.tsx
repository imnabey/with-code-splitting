import React from 'react'

import Lazyload from 'src/components/LazyLoad'

const DetailPageLazy = React.lazy(() => import('./DetailPage'))

const DetailPage = () => {
  return <Lazyload component={DetailPageLazy} />
}

export default DetailPage
