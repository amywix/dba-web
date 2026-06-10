import { useEffect, useRef, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export const SCENE_DURATIONS = {
  pain: 3500,
  solution: 3500,
  feature1: 3500,
  feature2: 4000,
  cta: 4500,
};

const SCENE_COMPONENTS: Record<string, ComponentType> = {
  pain: Scene1,
  solution: Scene2,
  feature1: Scene3,
  feature2: Scene4,
  cta: Scene5,
};

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

const AUDIO_SEEK_EPSILON_SEC = 0.18;

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  muted = false,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
    if (Math.abs(audio.currentTime - targetTime) > AUDIO_SEEK_EPSILON_SEC) {
      audio.currentTime = targetTime;
    }
    audio.play().catch(() => {});
  }, [currentSceneKey, baseSceneKey, muted]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-dark)] font-body text-[var(--color-text-primary)]">
      {/* Persistent Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-primary), transparent)' }}
          animate={{
            x: ['-20%', '20%', '-10%', '-20%'],
            y: ['-10%', '30%', '10%', '-10%'],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[60vw] h-[60vw] rounded-full blur-[80px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent)' }}
          animate={{
            x: ['20%', '-20%', '0%', '20%'],
            y: ['20%', '-10%', '-30%', '20%'],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Midground Elements */}
      <motion.div
        className="absolute w-32 h-32 rounded-2xl border-2 border-[var(--color-secondary)]/30 pointer-events-none"
        animate={{
          x: ['80vw', '10vw', '50vw', '80vw', '20vw'][sceneIndex],
          y: ['20vh', '70vh', '20vh', '60vh', '30vh'][sceneIndex],
          rotate: [0, 45, 90, 135, 180][sceneIndex],
          scale: [1, 1.5, 0.8, 1.2, 1][sceneIndex],
          opacity: [0.2, 0.5, 0.3, 0.6, 0.2][sceneIndex],
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="absolute h-[2px] bg-[var(--color-primary)] pointer-events-none"
        animate={{
          left: ['10%', '50%', '5%', '30%', '20%'][sceneIndex],
          top: ['80%', '15%', '85%', '25%', '70%'][sceneIndex],
          width: ['30%', '10%', '60%', '20%', '40%'][sceneIndex],
          opacity: [0.5, 0.8, 0.4, 0.7, 0][sceneIndex],
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <AnimatePresence mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>

      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </div>
  );
}
