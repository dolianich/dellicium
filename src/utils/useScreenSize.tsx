import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1090);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1091);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useScreenSize;
