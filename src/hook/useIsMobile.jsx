import { useState, useEffect } from 'react';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Create a handler for changes
    const handler = (event) => setIsMobile(event.matches);

    // Add listener for changes
    mediaQuery.addEventListener('change', handler);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
