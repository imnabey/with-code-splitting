import LoaderStart from "components/LoaderStart";
import React, { Suspense } from "react";

interface Props {
  /**
   * Component that need to lazying
   */
  component: React.FC<any>;

  /**
   * custom loader component
   */
  loaderCustom?: React.FC<any>;

  /**
   * what fallback you want.
   *
   * true => fallback with `feature/common/loader/Loading.tsx`
   *
   * false | undefined => <div>Loading..</div>
   */
  animationLoading?: boolean;
}

const LazyLoad: React.FC<Props> = ({
  component: Component,
  animationLoading,
  loaderCustom: LoaderCustom,
  ...rest
}) => {
  /**
   * Default Fallback when props `LoaderCustom` not given
   */

  return (
    <Suspense fallback={LoaderCustom ? <LoaderCustom /> : ""}>
      <Component {...rest} />
    </Suspense>
  );
};

export default LazyLoad;
