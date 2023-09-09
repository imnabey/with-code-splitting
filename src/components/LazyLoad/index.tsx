import React, { Suspense } from 'react'

interface Props {
  component: React.FC<any>
}

const LazyLoad: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Suspense>
      <Component {...rest} />
    </Suspense>
  )
}

export default LazyLoad
