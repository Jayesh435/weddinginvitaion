import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainRef = useRef(null);

  const createMelody = (audioCtx) => {
    const notes = [523, 587, 659, 698, 784, 698, 659, 587, 523];
    const time = audioCtx.currentTime;

    const playNote = (freq, start, duration) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(gainRef.current);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.08, start + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.start(start);
      osc.stop(start + duration + 0.1);
    };

    notes.forEach((note, i) => {
      playNote(note, time + i * 0.4, 0.6);
    });
  };

  const togglePlay = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }
        const audioCtx = audioCtxRef.current;
        if (!gainRef.current) {
          gainRef.current = audioCtx.createGain();
          gainRef.current.connect(audioCtx.destination);
          gainRef.current.gain.setValueAtTime(0.5, audioCtx.currentTime);
        }
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        createMelody(audioCtx);
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 4000);
      } catch (e) {
        console.warn('Audio not available');
      }
    } else {
      if (audioCtxRef.current) {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isPlaying ? { boxShadow: ['0 0 20px rgba(212,175,55,0.3)', '0 0 40px rgba(212,175,55,0.6)', '0 0 20px rgba(212,175,55,0.3)'] } : {}}
      transition={isPlaying ? { duration: 1.5, repeat: Infinity } : {}}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
        boxShadow: '0 4px 20px rgba(212,175,55,0.4)',
      }}
      title={isPlaying ? 'Pause Music' : 'Play Music'}
    >
      {isPlaying ? '🔊' : '🔇'}
    </motion.button>
  );
};

export default MusicPlayer;
