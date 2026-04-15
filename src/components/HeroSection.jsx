import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFB6C1 0%, #FFCBA4 50%, #FFF8F0 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: '#D4AF37' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: '#FFB6C1' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: '#D4AF37' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Decorative top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl mb-4"
        >
          🌸
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
        >
          Nikhil ❤️ Prachi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg mb-2"
          style={{ color: '#A0522D', fontFamily: 'Poppins, sans-serif' }}
        >
          Together with their families
        </motion.p>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold mb-8"
          style={{ color: '#D4AF37', fontFamily: '"Playfair Display", serif' }}
        >
          10 May 2026
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-px mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
        />

        {/* CTA Button */}
        <motion.a
          href="#story"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 rounded-full text-white font-semibold tracking-wider cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
            boxShadow: '0 10px 30px rgba(212,175,55,0.4)',
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '0.1em',
          }}
        >
          View Invitation ✨
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
          style={{ borderColor: '#D4AF37' }}
        >
          <div className="w-1 h-3 rounded-full" style={{ background: '#D4AF37' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
