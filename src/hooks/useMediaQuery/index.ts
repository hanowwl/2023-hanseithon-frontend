import { useEffect, useState } from "react";
import { useMediaQuery as useMediaQueryResponsive } from "react-responsive";

export const useMediaQuery = (settings: Parameters<typeof useMediaQueryResponsive>[0]) => {
  const query = useMediaQueryResponsive(settings);
  const [isTarget, setIsTarget] = useState<boolean>(false);

  useEffect(() => {
    setIsTarget(query);
  }, [query]);

  return isTarget;
};
