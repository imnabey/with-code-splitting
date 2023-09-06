import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const RegisterLazy = React.lazy(() => import('./Register'))

const Register = (props) => {
  return <Lazyload component={RegisterLazy} animationLoading {...props} />
}

export default Register
