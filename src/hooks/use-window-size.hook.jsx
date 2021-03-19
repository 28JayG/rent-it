import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (window) {
      //function to resize
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      //set new window size on resize
      window.addEventListener("resize", handleResize);
      //immedietly set on mount
      handleResize();
      //remove listner on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
