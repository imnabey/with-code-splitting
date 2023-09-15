import React from 'react'
import Lazyload from 'src/components/LazyLoad'

const CardLazy = React.lazy(() => import('./Card'))

const Card = (props) => {
  return <Lazyload component={CardLazy} {...props} />
}

export default Card
