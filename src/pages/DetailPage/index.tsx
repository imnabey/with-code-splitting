import React from 'react'

import Lazyload from 'src/components/LazyLoad'

const DetailPageLazy = React.lazy(() => import('./DetailPage'))

const DetailPage = (props) => {
  return <Lazyload component={DetailPageLazy} animationLoading {...props} />
}

export default DetailPage
