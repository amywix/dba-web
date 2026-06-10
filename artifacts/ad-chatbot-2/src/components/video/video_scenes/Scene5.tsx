import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 1800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-bg-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 z-0 opacity-40"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
         <video 
          src={`${import.meta.env.BASE_URL}videos/bg_waves.mp4`}
          className="w-full h-full object-cover mix-blend-screen"
          autoPlay muted loop playsInline
        />
      </motion.div>

      <motion.div 
        className="text-[4vw] font-display font-medium text-white mb-[6vh] z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: phase >= 1 ? 0 : 30, opacity: phase >= 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        Automate your chats with
      </motion.div>

      <motion.div 
        className="relative z-10 flex items-center gap-[2vw] mb-[2vh]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: phase >= 2 ? 1 : 0.8, opacity: phase >= 2 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <span className="text-[7vw] font-display font-black text-white leading-none">DONE</span>
        <span className="text-[6vw] font-script text-accent -rotate-6 transform translate-y-[-1vh]">by</span>
        <span className="text-[7vw] font-display font-black text-white leading-none">AMY</span>
      </motion.div>

      <motion.div 
        className="text-[2vw] font-body text-primary tracking-widest uppercase z-10 mb-[8vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Automate today. Elevate tomorrow.
      </motion.div>

      <motion.div 
        className="px-[4vw] py-[1.5vh] rounded-full bg-gradient-to-r from-primary to-accent z-10 flex items-center gap-[1vw]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: phase >= 3 ? 0 : 50, opacity: phase >= 3 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <span className="text-[2.5vw] font-body font-bold text-white">@donebyamy</span>
      </motion.div>

      <motion.div 
        className="absolute left-[5vw] bottom-0 w-[20vw] z-10"
        initial={{ y: '20vh', opacity: 0 }}
        animate={{ y: phase >= 3 ? 0 : '20vh', opacity: phase >= 3 ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/bot_wave_t.png`}
          alt="Bot Wave"
          className="w-full h-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        />
      </motion.div>

    </motion.div>
  );
}
