import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const RegisterLazy = React.lazy(() => import('./Register'))

const Register = () => {
  return <Lazyload component={RegisterLazy} />
}

export default Register
