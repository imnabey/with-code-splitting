import React from 'react'
import Lazyload from '../../components/LazyLoad'

const HomePageLazy = React.lazy(() => import('./HomePage'))

const HomePage = props => {
  return <Lazyload component={HomePageLazy} animationLoading {...props} />
}

export default HomePage
