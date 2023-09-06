import React from 'react'
import Lazyload from '../../components/LazyLoad'

const ErrorPageLazy = React.lazy(() => import('./ErrorPage'))

const ErrorPage = (props) => {
  return <Lazyload component={ErrorPageLazy} animationLoading {...props} />
}

export default ErrorPage
