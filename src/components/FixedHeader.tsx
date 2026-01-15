import { motion } from 'framer-motion';
import btsHeaderLogo from '@/assets/bts-header-logo.png';

const FixedHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50"
    >
      <img 
        src={btsHeaderLogo} 
        alt="BTS" 
        className="h-10 sm:h-12 md:h-14 opacity-90 hover:opacity-100 transition-opacity duration-300"
        style={{ 
          mixBlendMode: 'multiply',
          filter: 'contrast(1.1)'
        }}
      />
    </motion.header>
  );
};

export default FixedHeader;
