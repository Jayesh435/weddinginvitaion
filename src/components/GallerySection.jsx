import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  { id: 1, bg: 'linear-gradient(135deg, #7C3AED, #4C1D95)', emoji: '💑', label: 'Together' },
  { id: 2, bg: 'linear-gradient(135deg, #B45309, #FFD700)', emoji: '💍', label: 'Engagement' },
  { id: 3, bg: 'linear-gradient(135deg, #BE123C, #9F1239)', emoji: '🌹', label: 'Romance' },
  { id: 4, bg: 'linear-gradient(135deg, #6D28D9, #A855F7)', emoji: '🌸', label: 'Memories' },
  { id: 5, bg: 'linear-gradient(135deg, #065F46, #10B981)', emoji: '🌿', label: 'Nature' },
  { id: 6, bg: 'linear-gradient(135deg, #1E40AF, #3B82F6)', emoji: '✨', label: 'Magic' },
  { id: 7, bg: 'linear-gradient(135deg, #92400E, #D97706)', emoji: '🕯️', label: 'Candlelight' },
  { id: 8, bg: 'linear-gradient(135deg, #9B1C1C, #DC2626)', emoji: '❤️', label: 'Love' },
  { id: 9, bg: 'linear-gradient(135deg, #78350F, #FFD700)', emoji: '👑', label: 'Royal' },
];

const GallerySection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A0533 0%, #4A0000 50%, #1E1B4B 100%)' }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: '#7C3AED' }} />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: '#FFD700' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#FBBF24', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.35em' }}>
            ✦ OUR MEMORIES ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold gold-shimmer"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Photo Gallery
          </h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.04, zIndex: 10 }}
              onClick={() => setSelected(item)}
              className="relative cursor-pointer rounded-2xl overflow-hidden"
              style={{
                aspectRatio: i % 3 === 1 ? '3/4' : '4/3',
                background: item.bg,
                boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,215,0,0.2)',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl mb-2">{item.emoji}</span>
                <span
                  className="text-white font-semibold text-sm px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(5px)' }}
                >
                  {item.label}
                </span>
              </div>
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(255,215,0,0.25)', backdropFilter: 'blur(2px)' }}
              >
                <span className="text-white text-3xl">🔍</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: '80vw',
                maxWidth: '500px',
                aspectRatio: '4/3',
                background: selected.bg,
                boxShadow: '0 25px 80px rgba(255,215,0,0.3)',
                border: '2px solid rgba(255,215,0,0.4)',
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-8xl mb-4">{selected.emoji}</span>
                <span
                  className="text-white text-xl font-bold px-6 py-2 rounded-full"
                  style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(5px)' }}
                >
                  {selected.label}
                </span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: 'rgba(255,215,0,0.2)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,215,0,0.4)' }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
