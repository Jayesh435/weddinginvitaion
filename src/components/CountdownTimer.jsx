import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WEDDING_DATE = new Date('2026-05-10T00:00:00');

const TimeUnit = ({ value, label }) => (
  <motion.div
    className="flex flex-col items-center"
    whileHover={{ scale: 1.05 }}
  >
    <div
      className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-bold relative overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212,175,55,0.4)',
        boxShadow: '0 8px 32px rgba(212,175,55,0.2)',
        color: '#8B4513',
        fontFamily: '"Playfair Display", serif',
      }}
    >
      {String(value).padStart(2, '0')}
    </div>
    <p
      className="mt-2 text-sm tracking-widest"
      style={{ color: '#A0522D', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.15em' }}
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
      className="py-20 px-4"
      style={{ background: 'linear-gradient(135deg, #FFB6C1 0%, #FFCBA4 50%, #FFF8F0 100%)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest mb-2" style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.3em' }}>
            COUNTING DOWN TO
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
          >
            Our Special Day
          </h2>
          <p className="mb-12" style={{ color: '#A0522D' }}>10 May 2026</p>

          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
            <TimeUnit value={timeLeft.days} label="DAYS" />
            <div className="text-3xl font-bold mt-[-24px]" style={{ color: '#D4AF37' }}>:</div>
            <TimeUnit value={timeLeft.hours} label="HOURS" />
            <div className="text-3xl font-bold mt-[-24px]" style={{ color: '#D4AF37' }}>:</div>
            <TimeUnit value={timeLeft.minutes} label="MINUTES" />
            <div className="text-3xl font-bold mt-[-24px]" style={{ color: '#D4AF37' }}>:</div>
            <TimeUnit value={timeLeft.seconds} label="SECONDS" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
