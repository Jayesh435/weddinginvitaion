import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="py-12 px-4 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F0521 0%, #1A0533 50%, #0A0A1A 100%)',
      }}
    >
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FBBF24, #FFD700, transparent)' }} />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#7C3AED' }} />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ background: '#BE123C' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="text-4xl mb-4">👑</p>
        <h2
          className="text-3xl font-bold mb-2 gold-shimmer"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Nikhil &amp; Prachi
        </h2>
        <p
          className="text-lg mb-6 italic"
          style={{ color: '#C4B5FD', fontFamily: '"Playfair Display", serif' }}
        >
          With love, Nikhil &amp; Prachi
        </p>
        <div className="w-24 h-px mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
        <p style={{ color: '#A78BFA', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
          ✦ 10 May 2026 • Sweta Lawn, Nigdi, Pune ✦
        </p>
        <p style={{ color: '#7C3AED', fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', marginTop: '8px', opacity: 0.8 }}>
          👑 Made with royal love for our special day
        </p>
      </motion.div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FBBF24, #FFD700, transparent)' }} />
    </footer>
  );
};

export default Footer;
