import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #0F0521 0%, #3B0764 40%, #7C1D2E 100%)' }}
        >
          {/* Ambient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: '#7C3AED' }} />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: '#BE123C' }} />
          </div>

          <div className="relative text-center z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="text-6xl mb-4"
            >
              👑
            </motion.div>
            <motion.h1
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl font-bold gold-shimmer mb-1"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Nikhil ❤️ Prachi
            </motion.h1>
            <motion.p
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              style={{ color: '#C4B5FD', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem' }}
            >
              Loading your royal invitation...
            </motion.p>
            {/* Gold dots loader */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#FFD700' }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
