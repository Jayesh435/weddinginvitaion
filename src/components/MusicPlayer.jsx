import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const gainRef = useRef(null);
  const loopIntervalRef = useRef(null);
  const isMutedRef = useRef(false);
  const isPlayingRef = useRef(false);
  const buttonRef = useRef(null);

  const LOOP_DURATION_MS = 3600;

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

  const startLoop = async () => {
    if (isMuted) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new AudioContext();
        gainRef.current = null;
      }

      const audioCtx = audioCtxRef.current;
      if (!gainRef.current) {
        gainRef.current = audioCtx.createGain();
        gainRef.current.connect(audioCtx.destination);
        gainRef.current.gain.setValueAtTime(0.5, audioCtx.currentTime);
      }

      if (audioCtx.state === 'suspended') {
        await audioCtx.resume();
      }

      if (audioCtx.state !== 'running') {
        setIsPlaying(false);
        return;
      }

      createMelody(audioCtx);
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
      }
      loopIntervalRef.current = setInterval(() => {
        createMelody(audioCtx);
      }, LOOP_DURATION_MS);
      setIsPlaying(true);
    } catch (e) {
      // Browsers can block autoplay until first user gesture.
      setIsPlaying(false);
    }
  };

  const stopLoop = async () => {
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      await audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const startOnInteraction = (event) => {
      if (document.hidden) {
        return;
      }

      if (buttonRef.current && event?.target instanceof Node && buttonRef.current.contains(event.target)) {
        return;
      }

      if (!isMutedRef.current && !isPlayingRef.current) {
        startLoop();
      }
    };

    const stopOnPageHide = () => {
      stopLoop();
    };

    const stopOnVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      }
    };

    const stopOnBlur = () => {
      stopLoop();
    };

    window.addEventListener('pointerdown', startOnInteraction);
    window.addEventListener('keydown', startOnInteraction);
    window.addEventListener('touchstart', startOnInteraction);
    window.addEventListener('pagehide', stopOnPageHide);
    window.addEventListener('blur', stopOnBlur);
    document.addEventListener('visibilitychange', stopOnVisibilityChange);

    return () => {
      window.removeEventListener('pointerdown', startOnInteraction);
      window.removeEventListener('keydown', startOnInteraction);
      window.removeEventListener('touchstart', startOnInteraction);
      window.removeEventListener('pagehide', stopOnPageHide);
      window.removeEventListener('blur', stopOnBlur);
      document.removeEventListener('visibilitychange', stopOnVisibilityChange);

      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
        loopIntervalRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
        gainRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isMuted) {
      stopLoop();
    } else {
      startLoop();
    }
  }, [isMuted]);

  const togglePlay = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isPlaying && !isMuted ? { boxShadow: ['0 0 20px rgba(255,215,0,0.4)', '0 0 50px rgba(255,215,0,0.8)', '0 0 20px rgba(255,215,0,0.4)'] } : {}}
      transition={isPlaying && !isMuted ? { duration: 1.5, repeat: Infinity } : {}}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #92400E, #D97706, #FFD700)',
        boxShadow: '0 4px 25px rgba(255,215,0,0.5)',
      }}
      title={isMuted || !isPlaying ? 'Unmute Music' : 'Mute Music'}
    >
      {isMuted || !isPlaying ? '🔇' : '🔊'}
    </motion.button>
  );
};

export default MusicPlayer;
