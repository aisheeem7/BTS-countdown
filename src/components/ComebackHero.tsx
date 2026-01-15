import { motion } from 'framer-motion';
import Countdown from './Countdown';
import btsLogo from '@/assets/bts-logo.png';

const ComebackHero = () => {
  return (
    <motion.section 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="relative mb-4 sm:mb-6"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.5, 
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        <motion.img 
          src={btsLogo} 
          alt="BTS Logo" 
          className="h-28 sm:h-36 md:h-44 lg:h-52 mx-auto"
          style={{ 
            imageRendering: 'crisp-edges',
            WebkitFontSmoothing: 'antialiased'
          }}
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut"
          }}
        />
      </motion.div>
      
      <motion.div 
        className="text-center mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-bts-red mb-3 sm:mb-4">
          20th March, 2026 — Friday
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium">
          <span className="text-primary">1 PM KST</span>
          <span className="mx-3 text-border">|</span>
          <span className="text-primary">0 AM ET</span>
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <Countdown />
      </motion.div>
    </motion.section>
  );
};

export default ComebackHero;
