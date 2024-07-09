'use client';

import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  // Get new window dimensions when resizing the window
  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());

    setWindowDimensions(getWindowDimensions()); // Initialize window dimensions
    window.addEventListener('resize', handleResize); // Add event: resize window
    return () => window.removeEventListener('resize', handleResize); // Clear event: resize window
  }, []);

  return windowDimensions;
};
