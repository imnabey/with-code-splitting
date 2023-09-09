import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const LoginLazy = React.lazy(() => import('./Login'))

const Login = () => {
  return <Lazyload component={LoginLazy} />
}

export default Login
