import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventData } from '@/data';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio(
      eventData.musicUrl,
    );
    audio.loop = true;
    audio.volume = 0;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleVisibility = () => {
      if (document.hidden && !audio.paused) {
        audio.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const fadeVolume = (target: number, duration: number, onDone?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current);
    const start = audio.volume;
    const steps = 20;
    let step = 0;
    fadeTimerRef.current = window.setInterval(() => {
      step += 1;
      audio.volume = Math.max(0, Math.min(1, start + (target - start) * (step / steps)));
      if (step >= steps) {
        if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current);
        fadeTimerRef.current = null;
        onDone?.();
      }
    }, duration / steps);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeVolume(0, 500, () => {
        audio.pause();
        setIsPlaying(false);
      });
    } else {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          fadeVolume(0.24, 900);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={togglePlay}
        className={`music-control ${isPlaying ? 'is-playing' : ''}`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        aria-pressed={isPlaying}
      >
        {isPlaying && (
          <motion.span
            className="music-pulse"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
        )}

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.span
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <VolumeX size={18} />
            </motion.span>
          )}
        </AnimatePresence>

        <span className="music-label">{isPlaying ? 'Music on' : 'Play music'}</span>
        {isPlaying && (
          <motion.span
            className="music-note"
            animate={{ y: [0, -6, 0], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Music size={11} fill="currentColor" />
          </motion.span>
        )}
      </motion.button>
    </AnimatePresence>
  );
}
