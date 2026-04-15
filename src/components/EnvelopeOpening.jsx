import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnvelopeOpening = ({ onOpen }) => {
  const [sealBroken, setSealBroken] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const audioRef = useRef(null);

  const handleSealClick = () => {
    if (sealBroken) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch (e) {
      // Audio not available, continue without sound
    }

    setSealBroken(true);
    setTimeout(() => {
      setEnvelopeOpen(true);
      setTimeout(() => {
        setShowLetter(true);
        setTimeout(() => {
          onOpen();
        }, 1500);
      }, 800);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0F0521 0%, #3B0764 35%, #7C1D2E 65%, #0F0521 100%)',
      }}
    >
      {/* Ambient light effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#7C3AED' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#BE123C' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl" style={{ background: '#FFD700' }} />
      </div>

      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 pointer-events-none"
          style={{
            left: `${8 + i * 11}%`,
            top: `${10 + (i % 4) * 22}%`,
            fontSize: i % 2 === 0 ? '1rem' : '0.6rem',
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -8, 0] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
        >
          ✦
        </motion.div>
      ))}

      <motion.div
        animate={envelopeOpen ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative"
        style={{ perspective: '1000px' }}
      >
        {/* Envelope */}
        <div
          className="relative w-80 md:w-96"
          style={{
            filter: 'drop-shadow(0 25px 60px rgba(255,215,0,0.35))',
          }}
        >
          {/* Envelope Body */}
          <motion.div
            className="relative rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #2D1B69, #4C1D95, #3B0764)',
              border: '2px solid #FFD700',
              boxShadow: '0 20px 60px rgba(255,215,0,0.25), inset 0 0 30px rgba(255,215,0,0.08)',
              minHeight: '320px',
            }}
          >
            {/* Envelope flap background (static V shape) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(160deg, #4C1D95, #6D28D9)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                zIndex: 1,
                borderRadius: '8px 8px 0 0',
              }}
            />
            {/* Flap border lines */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                zIndex: 1,
                borderRadius: '8px 8px 0 0',
                border: '1px solid rgba(255,215,0,0.5)',
              }}
            />

            {/* Gold corner decorations */}
            <div className="absolute top-2 left-2 text-yellow-400 text-xl opacity-80 z-[2]">✦</div>
            <div className="absolute top-2 right-2 text-yellow-400 text-xl opacity-80 z-[2]">✦</div>
            <div className="absolute bottom-2 left-2 text-yellow-400 text-xl opacity-80 z-[2]">✦</div>
            <div className="absolute bottom-2 right-2 text-yellow-400 text-xl opacity-80 z-[2]">✦</div>

            {/* Gold border lines */}
            <div className="absolute inset-3 border rounded z-[2]" style={{ borderColor: 'rgba(255,215,0,0.3)' }} />

            {/* Envelope content */}
            <div
              className="relative text-center flex flex-col items-center"
              style={{ paddingTop: '160px', paddingBottom: '28px', paddingLeft: '24px', paddingRight: '24px', zIndex: 3 }}
            >
              {/* Crown icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl mb-1"
              >
                👑
              </motion.div>

              {/* Monogram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-bold mb-2 gold-shimmer"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                N ❤️ P
              </motion.div>

              {/* Names */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold mb-1"
                style={{ color: '#FFD700', fontFamily: '"Playfair Display", serif', textShadow: '0 0 15px rgba(255,215,0,0.5)' }}
              >
                Nikhil &amp; Prachi
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs tracking-widest mb-2"
                style={{ color: '#C4B5FD', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.25em' }}
              >
                WEDDING INVITATION
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="h-px my-2 mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }}
              />

              {/* Date */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-base mb-4"
                style={{ color: '#FBBF24', fontFamily: '"Playfair Display", serif' }}
              >
                ✦ 10 May 2026 ✦
              </motion.p>

              {/* Wax seal */}
              <div style={{ marginTop: '4px' }}>
                <WaxSeal broken={sealBroken} onClick={handleSealClick} />
              </div>
            </div>
          </motion.div>

          {/* Animated flap that opens */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={envelopeOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(160deg, #4C1D95, #6D28D9)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                borderRadius: '8px 8px 0 0',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                border: '1px solid rgba(255,215,0,0.5)',
                borderRadius: '8px 8px 0 0',
              }}
            />
          </motion.div>
        </div>

        {/* Letter sliding out */}
        <AnimatePresence>
          {showLetter && (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -80, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute left-4 right-4 bottom-0 z-20 rounded-lg p-6 text-center"
              style={{
                background: 'linear-gradient(145deg, #2D1B69, #4C1D95)',
                border: '1px solid #FFD700',
                boxShadow: '0 10px 40px rgba(255,215,0,0.3)',
              }}
            >
              <p className="font-semibold" style={{ color: '#FFD700', fontFamily: '"Playfair Display", serif' }}>
                👑 You are cordially invited...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Instruction text */}
      {!sealBroken && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 text-center"
          style={{ color: '#C4B5FD', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}
        >
          Click the seal to open ✦
        </motion.p>
      )}
    </div>
  );
};

const WaxSeal = ({ broken, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: broken ? 1 : 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={broken ? { scale: [1, 1.3, 0.8, 0], rotate: [0, 15, -10, 0] } : {}}
      transition={broken ? { duration: 0.6 } : {}}
      className="relative cursor-pointer"
      style={{ display: 'inline-block' }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: broken
            ? 'conic-gradient(#4C1D95 0deg, #7C3AED 90deg, #4C1D95 180deg, #6D28D9 270deg)'
            : 'radial-gradient(circle at 35% 35%, #7C3AED, #4C1D95)',
          boxShadow: broken ? 'none' : '0 4px 20px rgba(124,58,237,0.6), inset 0 2px 4px rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #FFD700',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {!broken && (
          <span
            style={{
              color: '#FFD700',
              fontSize: '1rem',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 'bold',
              textShadow: '0 0 8px rgba(255,215,0,0.8)',
            }}
          >
            N&P
          </span>
        )}
        {broken && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{
                width: '100%',
                height: '3px',
                background: '#FFD700',
                transform: 'rotate(45deg)',
                position: 'absolute',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '3px',
                background: '#FFD700',
                transform: 'rotate(-45deg)',
                position: 'absolute',
              }}
            />
          </div>
        )}
      </div>
      {!broken && (
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -inset-2 rounded-full"
          style={{ border: '2px solid rgba(255,215,0,0.5)' }}
        />
      )}
    </motion.button>
  );
};

export default EnvelopeOpening;
