import { useEffect, useState } from 'react';

const useScroll = (elementId) => {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementHeight = element.offsetHeight;
        if (window.scrollY > elementHeight * 0.6) {
          setShowFixedNavbar(true);
        } else {
          setShowFixedNavbar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementId]);

  return showFixedNavbar;
};

export default useScroll;
