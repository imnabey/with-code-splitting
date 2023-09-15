import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const HeaderLazy = React.lazy(() => import('./Header'))

const Header = (props: any) => {
  return <Lazyload component={HeaderLazy} {...props} />
}

export default Header
