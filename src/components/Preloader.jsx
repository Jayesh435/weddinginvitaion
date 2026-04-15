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
          style={{ background: 'linear-gradient(135deg, #FFB6C1 0%, #FFCBA4 50%, #FFF8F0 100%)' }}
        >
          <div className="text-center">
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
              🌸
            </motion.div>
            <motion.h1
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-playfair text-3xl text-rose-600"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Nikhil ❤️ Prachi
            </motion.h1>
            <motion.p
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="text-rose-400 mt-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Loading your invitation...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
