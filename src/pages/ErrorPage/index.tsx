import React from 'react'

import Lazyload from 'src/components/LazyLoad'

const ErrorPageLazy = React.lazy(() => import('./ErrorPage'))

const ErrorPage = () => {
  return <Lazyload component={ErrorPageLazy} />
}

export default ErrorPage
