import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  enter: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -30, filter: 'blur(10px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}
