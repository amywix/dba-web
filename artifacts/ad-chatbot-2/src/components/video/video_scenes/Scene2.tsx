import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2400),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="text-[4vw] font-display font-bold uppercase text-center max-w-[80vw]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: phase >= 1 ? 1 : 0.9, opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        AI that
      </motion.div>

      <div className="flex gap-[4vw] mt-[4vh]">
        {[
          { text: 'ANSWERS', p: 2 },
          { text: 'QUALIFIES', p: 3 },
          { text: 'CONVERTS', p: 4 }
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="px-[3vw] py-[2vh] rounded-2xl bg-white/5 border border-white/20 backdrop-blur-md"
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: phase >= item.p ? 0 : 50, 
              opacity: phase >= item.p ? 1 : 0, 
              scale: phase >= item.p ? 1 : 0.8,
              boxShadow: phase >= item.p ? '0 0 40px rgba(217, 70, 239, 0.3)' : 'none'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="text-[3vw] font-display font-black text-gradient">{item.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-[6vh] px-[4vw] py-[1vh] rounded-full bg-white text-bg-dark text-[2vw] font-display font-bold uppercase tracking-wider"
        initial={{ opacity: 0, scale: 0, rotate: -5 }}
        animate={{ opacity: phase >= 4 ? 1 : 0, scale: phase >= 4 ? 1 : 0, rotate: phase >= 4 ? 0 : -5 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
      >
        — Automatically —
      </motion.div>

    </motion.div>
  );
}
