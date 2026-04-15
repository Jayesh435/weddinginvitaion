import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'FIRST MEETING',
    subtitle: 'Where our story began',
    cardBg: 'linear-gradient(140deg, #4D0018 0%, #220012 55%, #0F031C 100%)',
    orb: '#9F1239',
    bride: true,
  },
  {
    id: 2,
    title: 'OUR JOURNEY',
    subtitle: 'Building dreams together',
    cardBg: 'linear-gradient(140deg, #2B0A3F 0%, #20072F 55%, #0F031C 100%)',
    orb: '#6D28D9',
    bride: false,
  },
  {
    id: 3,
    title: 'THE PROPOSAL',
    subtitle: 'She said yes! 💍',
    cardBg: 'linear-gradient(140deg, #1D0A44 0%, #240538 60%, #0F031C 100%)',
    orb: '#7E22CE',
    bride: false,
  },
  {
    id: 4,
    title: 'ENGAGEMENT DAY',
    subtitle: 'Officially forever',
    cardBg: 'linear-gradient(140deg, #372010 0%, #23101F 60%, #0F031C 100%)',
    orb: '#7C2D12',
    bride: true,
  },
  {
    id: 5,
    title: 'PRE-WEDDING',
    subtitle: 'Moments before forever',
    cardBg: 'linear-gradient(140deg, #5A001A 0%, #2A0019 60%, #0F031C 100%)',
    orb: '#BE123C',
    bride: false,
  },
  {
    id: 6,
    title: 'TOGETHER',
    subtitle: 'Two hearts, one destiny',
    cardBg: 'linear-gradient(140deg, #340C44 0%, #1E082F 60%, #0F031C 100%)',
    orb: '#7C3AED',
    bride: false,
  },
];

const CoupleIllustration = ({ bride }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute rounded-full"
        style={{
          width: '72%',
          height: '72%',
          background: 'radial-gradient(circle at 35% 30%, rgba(190,24,93,0.35), rgba(88,28,135,0.18) 55%, transparent 75%)',
        }}
      />
      <div
        className="absolute bottom-[18%] w-[72%] h-[22%] rounded-[40%]"
        style={{ background: 'rgba(248, 237, 227, 0.14)' }}
      />

      <div className="absolute left-[39%] bottom-[31%] flex flex-col items-center" style={{ color: 'rgba(243,237,231,0.86)' }}>
        <div className="w-10 h-10 rounded-full" style={{ background: 'currentColor' }} />
        {bride ? (
          <>
            <div className="w-12 h-12 rounded-t-full mt-1" style={{ background: 'currentColor' }} />
            <div
              style={{
                width: 62,
                height: 50,
                background: 'currentColor',
                clipPath: 'polygon(50% 0, 96% 100%, 4% 100%)',
                marginTop: 2,
              }}
            />
          </>
        ) : (
          <>
            <div className="w-12 h-14 rounded-t-lg mt-1" style={{ background: 'currentColor' }} />
            <div className="w-[10px] h-9 absolute -bottom-8 left-3" style={{ background: 'currentColor' }} />
            <div className="w-[10px] h-9 absolute -bottom-8 right-3" style={{ background: 'currentColor' }} />
          </>
        )}
      </div>

      <div className="absolute left-[53%] bottom-[31%] flex flex-col items-center" style={{ color: 'rgba(243,237,231,0.86)' }}>
        <div className="w-9 h-9 rounded-full" style={{ background: 'currentColor' }} />
        <div className="w-10 h-14 rounded-t-lg mt-1" style={{ background: 'currentColor' }} />
        <div className="w-[9px] h-8 absolute -bottom-7 left-3" style={{ background: 'currentColor' }} />
        <div className="w-[9px] h-8 absolute -bottom-7 right-3" style={{ background: 'currentColor' }} />
      </div>

      {[0, 1, 2, 3].map((dot) => (
        <div
          key={dot}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${24 + dot * 13}%`,
            top: `${24 + (dot % 2) * 12}%`,
            background: 'rgba(255, 206, 84, 0.55)',
          }}
        />
      ))}
    </div>
  );
};

const StoryCard = ({ item, i, onOpen }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      whileHover={{ y: -5 }}
      onClick={() => onOpen(item)}
      className="cursor-pointer"
    >
      <div
        className="relative rounded-sm overflow-hidden"
        style={{
          aspectRatio: '1 / 1.16',
          background: item.cardBg,
          border: '1px solid rgba(230,188,114,0.28)',
          boxShadow: '0 10px 26px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.02)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 38% 34%, ${item.orb}66 0%, ${item.orb}1A 56%, transparent 78%)`,
          }}
        />

        <div className="absolute inset-[8px]" style={{ border: '1px solid rgba(230,188,114,0.15)' }} />

        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l" style={{ borderColor: 'rgba(230,188,114,0.7)' }} />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r" style={{ borderColor: 'rgba(230,188,114,0.7)' }} />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l" style={{ borderColor: 'rgba(230,188,114,0.7)' }} />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r" style={{ borderColor: 'rgba(230,188,114,0.7)' }} />

        <CoupleIllustration bride={item.bride} />

        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: 'rgba(9, 5, 24, 0.34)' }}
        >
          <span className="text-2xl" style={{ color: 'rgba(245, 203, 120, 0.95)' }}>🔍</span>
        </div>
      </div>

      <h3
        className="mt-4 text-[0.95rem] md:text-lg font-semibold tracking-[0.18em]"
        style={{ color: '#E6BC72', fontFamily: '"Playfair Display", serif' }}
      >
        {item.title}
      </h3>
      <p
        className="mt-1 text-base italic"
        style={{ color: 'rgba(219, 206, 224, 0.78)', fontFamily: '"Playfair Display", serif' }}
      >
        {item.subtitle}
      </p>
    </motion.article>
  );
};

const GallerySection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070312 0%, #130514 42%, #0A0618 100%)' }}>
      {/* Background haze */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-[16%] w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#7C1D2E' }} />
        <div className="absolute bottom-0 right-[8%] w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#4C1D95' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#E6BC72', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.35em' }}>
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

        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {galleryItems.map((item, i) => (
            <StoryCard
              key={item.id}
              item={item}
              i={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

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
              className="relative rounded-md overflow-hidden"
              style={{
                width: '80vw',
                maxWidth: '500px',
                aspectRatio: '1 / 1.16',
                background: selected.cardBg,
                boxShadow: '0 25px 80px rgba(255,215,0,0.3)',
                border: '2px solid rgba(255,215,0,0.4)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 38% 34%, ${selected.orb}66 0%, ${selected.orb}1A 56%, transparent 78%)`,
                }}
              />
              <div className="absolute inset-[12px]" style={{ border: '1px solid rgba(230,188,114,0.18)' }} />
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l" style={{ borderColor: 'rgba(230,188,114,0.72)' }} />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r" style={{ borderColor: 'rgba(230,188,114,0.72)' }} />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l" style={{ borderColor: 'rgba(230,188,114,0.72)' }} />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r" style={{ borderColor: 'rgba(230,188,114,0.72)' }} />

              <CoupleIllustration bride={selected.bride} />

              <div className="absolute left-5 bottom-5 right-5">
                <h4 className="text-lg font-semibold tracking-[0.14em]" style={{ color: '#E6BC72', fontFamily: '"Playfair Display", serif' }}>
                  {selected.title}
                </h4>
                <p className="text-base italic mt-1" style={{ color: 'rgba(219, 206, 224, 0.9)', fontFamily: '"Playfair Display", serif' }}>
                  {selected.subtitle}
                </p>
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
