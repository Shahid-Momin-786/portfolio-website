import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-4 w-4 rounded-full bg-neon-cyan mix-blend-screen hidden md:block"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] h-12 w-12 rounded-full border border-neon-purple opacity-50 mix-blend-screen hidden md:block"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;
