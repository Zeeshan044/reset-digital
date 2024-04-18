import { useEffect, useState } from "react";
import LoadingAnimation from "./loading-animation";

function DummyLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return <>{loading && <LoadingAnimation />}</>;
}

export default DummyLoading;
