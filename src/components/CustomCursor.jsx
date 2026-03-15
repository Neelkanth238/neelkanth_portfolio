import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeThumbnail, setActiveThumbnail] = useState(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e) => {
      const target = e.target.closest('[data-cursor-thumb]');
      if (target) {
        setIsHovering(true);
        setActiveThumbnail(target.getAttribute('data-cursor-thumb'));
      } else if (e.target.closest('a, button, .magnetic-target')) {
        setIsHovering(true);
      }
    };

    const handleOut = () => {
      setIsHovering(false);
      setActiveThumbnail(null);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: sx,
        top: sy,
      }}
    >
      <div className="cursor-inner">
        <div className="cursor-dot" />
        {activeThumbnail && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cursor-thumbnail"
          >
            <img src={activeThumbnail} alt="Preview" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
