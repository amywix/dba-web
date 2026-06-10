import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
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
      className="absolute inset-0 flex items-center z-10 pl-[10vw]"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[50vw]">
        <motion.div 
          className="h-[4px] bg-gradient-to-r from-primary to-accent mb-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: phase >= 1 ? '15vw' : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <h1 className="text-[5.5vw] font-display font-black leading-[1.1] uppercase">
          <motion.span 
            className="block"
            initial={{ y: 50, opacity: 0, rotateX: 45 }}
            animate={{ y: phase >= 1 ? 0 : 50, opacity: phase >= 1 ? 1 : 0, rotateX: phase >= 1 ? 0 : 45 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          >
            Turn
          </motion.span>
          <motion.span 
            className="block text-gradient"
            initial={{ y: 50, opacity: 0, rotateX: 45 }}
            animate={{ y: phase >= 1 ? 0 : 50, opacity: phase >= 1 ? 1 : 0, rotateX: phase >= 1 ? 0 : 45 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          >
            Conversations
          </motion.span>
          <motion.span 
            className="block"
            initial={{ y: 50, opacity: 0, rotateX: 45 }}
            animate={{ y: phase >= 1 ? 0 : 50, opacity: phase >= 1 ? 1 : 0, rotateX: phase >= 1 ? 0 : 45 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}
          >
            Into Customers
          </motion.span>
        </h1>
      </div>

      <motion.div 
        className="absolute right-[10vw] bottom-[-5vh] w-[35vw]"
        initial={{ x: '20vw', opacity: 0, rotate: 10 }}
        animate={{ x: phase >= 2 ? 0 : '20vw', opacity: phase >= 2 ? 1 : 0, rotate: phase >= 2 ? 0 : 10 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <motion.img 
          src={`${import.meta.env.BASE_URL}images/bot_phone_t.png`}
          alt="Bot Phone"
          className="w-full h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
