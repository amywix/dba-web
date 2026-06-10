import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2800),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/50"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-10 text-center px-10">
        <motion.div 
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.h1 
            className="text-[6vw] font-display font-black tracking-tight text-white leading-[1.1] uppercase"
          >
            {'Missing Messages?'.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-[2vw]">
                {word.split('').map((char, j) => (
                  <motion.span
                    key={j}
                    className="inline-block"
                    initial={{ y: 100, rotateX: 90, opacity: 0 }}
                    animate={{ y: 0, rotateX: 0, opacity: 1 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 200, delay: i * 0.2 + j * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          className="mt-[4vh] text-[4vw] font-display font-bold text-[var(--color-accent)] uppercase text-glow"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: 'spring', damping: 15, stiffness: 250 }}
        >
          = Missing Money.
        </motion.div>
      </div>

      {/* Floating alert boxes representing missed messages in background */}
      <motion.div 
        className="absolute w-[25vw] h-[10vh] bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm -z-10"
        initial={{ x: '-40vw', y: '20vh', rotate: -15, opacity: 0 }}
        animate={phase >= 2 ? { x: '-25vw', y: '10vh', rotate: -5, opacity: 0.6 } : { x: '-40vw', y: '20vh', rotate: -15, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      />
      <motion.div 
        className="absolute w-[20vw] h-[8vh] bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm -z-10"
        initial={{ x: '40vw', y: '-10vh', rotate: 20, opacity: 0 }}
        animate={phase >= 2 ? { x: '25vw', y: '-5vh', rotate: 10, opacity: 0.5 } : { x: '40vw', y: '-10vh', rotate: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
      />
    </motion.div>
  );
}
