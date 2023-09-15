import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const SideBarLazy = React.lazy(() => import('./SideBar'))

const SideBar = (props) => {
  return <Lazyload component={SideBarLazy} {...props} />
}

export default SideBar
