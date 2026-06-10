import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-between px-[10vw]"
      initial={{ opacity: 0, x: '20vw', clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ opacity: 1, x: 0, clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-1/2 relative z-10">
        <motion.h2 
          className="text-[5vw] font-display font-bold leading-tight uppercase"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your AI Chatbot<br/>
          <motion.span 
            className="text-[var(--color-primary)] text-glow block mt-[2vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            Never Sleeps
          </motion.span>
        </motion.h2>
      </div>

      <motion.div 
        className="w-1/2 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: 20 }}
        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      >
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-[var(--color-primary)] blur-[60px] rounded-full opacity-40 -z-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <img 
            src={`${import.meta.env.BASE_URL}images/bot_wave_t.png`} 
            alt="AI Robot Waving" 
            className="w-[30vw] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
