import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F0521 0%, #3B0764 25%, #6B1427 55%, #1A0533 85%, #0F0521 100%)',
      }}
    >
      {/* Decorative bokeh orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, #BE123C, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFD700, transparent)' }}
        />
        {/* Ornate gold ring decoration */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-10"
          style={{ border: '2px solid #FFD700' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full opacity-5"
          style={{ border: '1px solid #FFD700' }}
        />
      </div>

      {/* Glittering stars */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300 pointer-events-none"
          style={{
            left: `${10 + i * 7.5}%`,
            top: `${15 + (i % 5) * 17}%`,
            fontSize: i % 3 === 0 ? '1.2rem' : '0.7rem',
            opacity: 0.6,
          }}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
        >
          ✦
        </motion.div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-4xl">👑</span>
        </motion.div>

        {/* Decorative line above names */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '180px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px mx-auto mb-4"
          style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FBBF24, #FFD700, transparent)' }}
        />

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 gold-shimmer"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Nikhil ❤️ Prachi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base mb-2 tracking-widest uppercase"
          style={{ color: '#E9D5FF', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.25em' }}
        >
          Together with their families
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold mb-8"
          style={{ color: '#FFD700', fontFamily: '"Playfair Display", serif', textShadow: '0 0 20px rgba(255,215,0,0.6)' }}
        >
          ✦ 10 May 2026 ✦
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '260px' }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FBBF24, #FFD700, transparent)' }}
        />

        {/* CTA Button */}
        <motion.a
          href="#story"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(255,215,0,0.7)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-4 rounded-full font-semibold tracking-wider cursor-pointer glow-gold"
          style={{
            background: 'linear-gradient(135deg, #92400E, #D97706, #FFD700, #D97706, #92400E)',
            backgroundSize: '200% auto',
            color: '#1A0533',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '0.15em',
            fontWeight: '700',
            fontSize: '0.95rem',
            border: '1px solid rgba(255,215,0,0.5)',
          }}
        >
          View Royal Invitation 👑
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <div
          className="w-6 h-10 border-2 rounded-full mx-auto flex items-start justify-center pt-2"
          style={{ borderColor: '#FFD700', boxShadow: '0 0 10px rgba(255,215,0,0.4)' }}
        >
          <div className="w-1 h-3 rounded-full" style={{ background: '#FFD700' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
