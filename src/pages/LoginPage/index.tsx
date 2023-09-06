import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const LoginLazy = React.lazy(() => import('./Login'))

const Login = (props) => {
  return <Lazyload component={LoginLazy} animationLoading {...props} />
}

export default Login
