import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-row-reverse items-center justify-between px-[10vw]"
      initial={{ opacity: 0, y: '20vh' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: '-20vw' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-1/2 relative z-10 pl-[5vw]">
        <motion.h2 
          className="text-[4.5vw] font-display font-bold leading-tight uppercase"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Replies in<br/>
          <motion.span 
            className="text-[var(--color-accent)] text-glow text-[6vw]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={phase >= 2 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ type: 'spring', bounce: 0.6 }}
          >
            SECONDS
          </motion.span>
        </motion.h2>
        <motion.div
          className="mt-[3vh] flex items-center gap-[2vw]"
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-[2px] w-[5vw] bg-white/50" />
          <span className="text-[2.5vw] font-medium tracking-widest">24 / 7 / 365</span>
        </motion.div>
      </div>

      <motion.div 
        className="w-1/2 flex justify-center relative"
        initial={{ opacity: 0, x: '-20vw' }}
        animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-20vw' }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      >
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-[var(--color-accent)] blur-[70px] rounded-full opacity-30 -z-10"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <img 
            src={`${import.meta.env.BASE_URL}images/bot_phone_t.png`} 
            alt="AI Robot on Phone" 
            className="w-[30vw] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
