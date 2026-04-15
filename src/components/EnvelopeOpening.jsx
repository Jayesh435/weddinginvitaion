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
        background: 'linear-gradient(135deg, #FFB6C1 0%, #FFCBA4 50%, #FFF8F0 100%)',
      }}
    >
      {/* Ambient light effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#D4AF37' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#FFB6C1' }} />
      </div>

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
            filter: 'drop-shadow(0 25px 50px rgba(212,175,55,0.4))',
          }}
        >
          {/* Envelope Body */}
          <motion.div
            className="relative rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #FFF8DC, #FFFACD, #FFF8F0)',
              border: '2px solid #D4AF37',
              boxShadow: '0 20px 60px rgba(212,175,55,0.3), inset 0 0 30px rgba(212,175,55,0.1)',
              minHeight: '240px',
            }}
          >
            {/* Gold corner decorations */}
            <div className="absolute top-2 left-2 text-yellow-500 text-xl opacity-60">✦</div>
            <div className="absolute top-2 right-2 text-yellow-500 text-xl opacity-60">✦</div>
            <div className="absolute bottom-2 left-2 text-yellow-500 text-xl opacity-60">✦</div>
            <div className="absolute bottom-2 right-2 text-yellow-500 text-xl opacity-60">✦</div>

            {/* Gold border lines */}
            <div className="absolute inset-3 border border-yellow-400 opacity-30 rounded" />
            <div className="absolute inset-5 border border-yellow-400 opacity-15 rounded" />

            {/* Envelope content */}
            <div className="relative p-8 text-center flex flex-col items-center justify-center" style={{ minHeight: '240px' }}>
              {/* Monogram */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-2"
                style={{ color: '#D4AF37', fontFamily: '"Playfair Display", serif' }}
              >
                N ❤️ P
              </motion.div>

              {/* Names */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl font-bold mb-1"
                style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
              >
                Nikhil & Prachi
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm tracking-widest mb-3"
                style={{ color: '#A0522D', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.2em' }}
              >
                WEDDING INVITATION
              </motion.p>

              {/* Date */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-base"
                style={{ color: '#D4AF37', fontFamily: '"Playfair Display", serif' }}
              >
                10 May 2026
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="h-px my-3 mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
              />

              {/* Wax seal area - bottom center */}
              <div className="mt-4">
                <WaxSeal broken={sealBroken} onClick={handleSealClick} />
              </div>
            </div>
          </motion.div>

          {/* Envelope flap */}
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
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(180deg, #FFF5DC, #FFEDC0)',
                borderRadius: '8px 8px 0 0',
                border: '2px solid #D4AF37',
                borderBottom: 'none',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
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
                background: 'linear-gradient(145deg, #FFFEF0, #FFF8F0)',
                border: '1px solid #D4AF37',
                boxShadow: '0 10px 30px rgba(212,175,55,0.2)',
              }}
            >
              <p className="text-rose-600 font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>
                You are cordially invited...
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
          className="absolute bottom-12 text-center text-rose-500"
          style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}
        >
          Click the wax seal to open ✨
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
            ? 'conic-gradient(#8B0000 0deg, #DC143C 90deg, #8B0000 180deg, #B22222 270deg)'
            : 'radial-gradient(circle at 35% 35%, #DC2626, #9B1C1C)',
          boxShadow: broken ? 'none' : '0 4px 15px rgba(220,38,38,0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #7f1d1d',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {!broken && (
          <span
            style={{
              color: '#FFF8DC',
              fontSize: '1.5rem',
              fontFamily: '"Playfair Display", serif',
              fontWeight: 'bold',
              textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            N
          </span>
        )}
        {broken && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              style={{
                width: '100%',
                height: '3px',
                background: '#4a0000',
                transform: 'rotate(45deg)',
                position: 'absolute',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '3px',
                background: '#4a0000',
                transform: 'rotate(-45deg)',
                position: 'absolute',
              }}
            />
          </div>
        )}
      </div>
      {!broken && (
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute -inset-2 rounded-full"
          style={{ border: '2px solid rgba(220,38,38,0.3)' }}
        />
      )}
    </motion.button>
  );
};

export default EnvelopeOpening;
