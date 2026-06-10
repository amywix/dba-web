import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const stats = [
    { label: "More", value: "Bookings", phase: 1, yOffset: -100 },
    { label: "Faster", value: "Replies", phase: 2, yOffset: 0 },
    { label: "Zero", value: "Missed Leads", phase: 3, yOffset: 100 }
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center z-10"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      
      {/* Background Video Layer for this specific scene */}
      <motion.div 
        className="absolute inset-0 z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
      >
        <video 
          src={`${import.meta.env.BASE_URL}videos/bg_particles.mp4`}
          className="w-full h-full object-cover mix-blend-screen"
          autoPlay muted loop playsInline
        />
      </motion.div>

      <div className="w-full max-w-[80vw] flex flex-col gap-[3vh]">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            className="flex items-center bg-bg-muted/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-[3vh] shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
            initial={{ x: '-20vw', opacity: 0 }}
            animate={{ 
              x: phase >= stat.phase ? 0 : '-20vw', 
              opacity: phase >= stat.phase ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="w-[4vw] h-[4vw] rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 mr-[3vw]" />
            <div className="flex gap-[1vw] items-baseline">
              <span className="text-[4vw] font-display font-bold text-primary uppercase">{stat.label}</span>
              <span className="text-[4vw] font-display font-black text-white uppercase">{stat.value}.</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
