import React from 'react'
import Lazyload from '../../components/LazyLoad'

const HomePageLazy = React.lazy(() => import('./HomePage'))

const HomePage = () => {
  return <Lazyload component={HomePageLazy} />
}

export default HomePage
