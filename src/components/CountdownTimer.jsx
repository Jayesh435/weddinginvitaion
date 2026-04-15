import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-05-10T00:00:00');

const TimeUnit = ({ value, label }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.08 }}
  >
    <div
      className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-bold relative overflow-hidden glow-gold"
      style={{
        background: 'linear-gradient(135deg, rgba(76,29,149,0.8), rgba(109,40,217,0.6))',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,215,0,0.5)',
        boxShadow: '0 8px 32px rgba(255,215,0,0.2), inset 0 1px 0 rgba(255,215,0,0.2)',
        color: '#FFD700',
        fontFamily: '"Playfair Display", serif',
      }}
    >
      {/* Inner shine */}
      <div
        className="absolute inset-0 opacity-10 rounded-2xl"
        style={{ background: 'linear-gradient(135deg, white, transparent)' }}
      />
      {String(value).padStart(2, '0')}
    </div>
    <p
      className="mt-2 text-xs tracking-widest font-semibold"
      style={{ color: '#C4B5FD', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.2em' }}
    >
      {label}
    </p>
  </motion.div>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = WEDDING_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #3B0764 50%, #1A0533 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#7C3AED' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#FFD700' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#FBBF24', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.35em' }}>
            ✦ COUNTING DOWN TO ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-3 gold-shimmer"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our Special Day
          </h2>
          <p className="mb-10 tracking-widest" style={{ color: '#C4B5FD', letterSpacing: '0.15em' }}>10 May 2026</p>

          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <div className="text-3xl font-bold mt-[-24px]" style={{ color: '#FFD700', textShadow: '0 0 15px rgba(255,215,0,0.5)' }}>:</div>
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <div className="text-3xl font-bold mt-[-24px]" style={{ color: '#FFD700', textShadow: '0 0 15px rgba(255,215,0,0.5)' }}>:</div>
            <TimeUnit value={timeLeft.minutes} label="MINUTES" />
            <div className="text-3xl font-bold mt-[-24px]" style={{ color: '#FFD700', textShadow: '0 0 15px rgba(255,215,0,0.5)' }}>:</div>
            <TimeUnit value={timeLeft.seconds} label="SECONDS" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
