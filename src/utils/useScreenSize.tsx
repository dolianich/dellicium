import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 580);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 580);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useScreenSize;
