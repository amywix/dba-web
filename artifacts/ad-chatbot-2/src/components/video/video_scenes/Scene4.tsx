import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-between px-[10vw] z-10"
      initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100vw' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="w-[45vw]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: phase >= 1 ? 0 : 50, opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-[8vw] font-display font-black text-gradient leading-[1.1] mb-[2vh]">
          HOURS SAVED
        </div>
        <div className="text-[4vw] font-display font-bold text-white uppercase tracking-widest">
          Every Single Week
        </div>
      </motion.div>

      <motion.div 
        className="w-[35vw]"
        initial={{ scale: 0, opacity: 0, rotate: -20 }}
        animate={{ scale: phase >= 2 ? 1 : 0, opacity: phase >= 2 ? 1 : 0, rotate: phase >= 2 ? 0 : -20 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/bot_thumbsup_t.png`}
          alt="Bot Thumbs Up"
          className="w-full h-auto drop-shadow-[0_0_40px_rgba(217,70,239,0.5)]"
          animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
