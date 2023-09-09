import React, { Suspense } from 'react'

interface Props {
  component: React.FC<any>
  loaderCustom?: React.FC<any>
  animationLoading?: boolean
}

const LazyLoad: React.FC<Props> = ({
  component: Component,
  loaderCustom: LoaderCustom,
  ...rest
}) => {
  return (
    <Suspense fallback={LoaderCustom ? <LoaderCustom /> : ''}>
      <Component {...rest} />
    </Suspense>
  )
}

export default LazyLoad
