import { useEffect, useState } from "react";
import LoadingAnimation from "../ui/loading-animation";
import { getDisplayName } from "next/dist/shared/lib/utils";

function LoadingHOC(WrappedComponent: React.ComponentType<any>) {
  const ComponentToReturn: React.FC<any> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1800);
    }, []);
    return (
      <>{loading ? <LoadingAnimation /> : <WrappedComponent {...props} />}</>
    );
  };

  ComponentToReturn.displayName = `LoadingHOC(${getDisplayName(
    WrappedComponent
  )})`;

  return ComponentToReturn;
}

export default LoadingHOC;
