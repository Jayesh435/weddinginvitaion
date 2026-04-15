import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer
      className="py-12 px-4 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8B4513, #6B3410)',
      }}
    >
      {/* Decorative top line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-4xl mb-4">🌸</p>
        <h2
          className="text-3xl font-bold mb-2"
          style={{ color: '#D4AF37', fontFamily: '"Playfair Display", serif' }}
        >
          Nikhil & Prachi
        </h2>
        <p
          className="text-lg mb-6 italic"
          style={{ color: '#FFCBA4', fontFamily: '"Playfair Display", serif' }}
        >
          With love, Nikhil & Prachi
        </p>
        <div className="w-24 h-px mx-auto mb-6" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        <p style={{ color: '#D2B48C', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
          10 May 2026 • Sweta Lawn, Nigdi, Pune
        </p>
        <p style={{ color: '#D2B48C', fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', marginTop: '8px', opacity: 0.7 }}>
          ❤️ Made with love for our special day
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
