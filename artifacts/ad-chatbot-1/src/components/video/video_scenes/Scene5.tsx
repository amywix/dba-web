import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1600),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--color-bg-dark)]"
      initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
      animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_70%)] opacity-20" />
      
      <motion.h2 
        className="text-[4vw] font-body text-white/90 mb-[8vh] z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Let Amy automate your customer chats.
      </motion.h2>

      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', damping: 15, stiffness: 200 }}
      >
        <div className="text-[7vw] font-display font-black tracking-tight uppercase flex items-center gap-[2vw]">
          <span>DONE</span>
          <span className="font-script lowercase text-[var(--color-accent)] font-normal text-[8vw] mt-[1vh]">by</span>
          <span>AMY</span>
        </div>
        <div className="text-[2vw] font-body tracking-[0.2em] text-[var(--color-secondary)] uppercase mt-[2vh] text-glow">
          Automate today. Elevate tomorrow.
        </div>
      </motion.div>

      <motion.div
        className="mt-[10vh] px-[4vw] py-[2vh] bg-white text-black rounded-full font-display font-bold text-[2.5vw] z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ type: 'spring', bounce: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        @donebyamy
      </motion.div>
      
      {/* Decorative particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/50"
          initial={{ 
            x: '50vw', y: '50vh', opacity: 0 
          }}
          animate={phase >= 2 ? {
            x: `${40 + (Math.random() * 20 - 10)}vw`,
            y: `${80 + (Math.random() * 20 - 10)}vh`,
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 2 + 1, 0]
          } : { opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </motion.div>
  );
}
