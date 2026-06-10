import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1300),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 to-transparent" />
      
      <div className="flex w-full px-[10vw] items-center">
        <motion.div 
          className="w-[40%] flex justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 bg-white blur-[80px] rounded-full opacity-20 -z-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <img 
            src={`${import.meta.env.BASE_URL}images/bot_thumbsup_t.png`} 
            alt="AI Robot Thumbs Up" 
            className="w-[28vw] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        <div className="w-[60%] flex flex-col gap-[4vh] pl-[5vw]">
          <motion.div
            className="bg-white/5 border border-white/10 backdrop-blur-md p-[3vh] rounded-2xl box-glow"
            initial={{ opacity: 0, x: 100 }}
            animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <h3 className="text-[3vw] font-display font-bold">✓ Answers Questions</h3>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 backdrop-blur-md p-[3vh] rounded-2xl box-glow"
            initial={{ opacity: 0, x: 100 }}
            animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <h3 className="text-[3vw] font-display font-bold">✓ Qualifies Leads</h3>
          </motion.div>

          <motion.div
            className="bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50 backdrop-blur-md p-[3vh] rounded-2xl box-glow"
            initial={{ opacity: 0, x: 100 }}
            animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <h3 className="text-[3.5vw] font-display font-black text-white">✓ Books Clients ⚡</h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
