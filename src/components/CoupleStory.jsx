import { motion } from 'framer-motion';

const storyItems = [
  {
    year: '2019',
    title: 'How We Met',
    description: 'Two hearts found each other in the most unexpected of places. A chance encounter that would change both our lives forever.',
    icon: '💫',
    align: 'left',
    accent: '#7C3AED',
  },
  {
    year: '2021',
    title: 'Our Journey',
    description: 'Through laughter, shared dreams, and countless memories, we built something beautiful together. Every moment became a treasure.',
    icon: '🌸',
    align: 'right',
    accent: '#BE123C',
  },
  {
    year: '2023',
    title: 'The Proposal',
    description: 'Under a sky full of stars, with flowers all around, Nikhil got down on one knee and asked Prachi to spend forever with him. She said yes!',
    icon: '💍',
    align: 'left',
    accent: '#D97706',
  },
  {
    year: '2026',
    title: 'Forever Begins',
    description: 'On 10 May 2026, we begin our forever. Join us as we celebrate this beautiful new chapter of our lives.',
    icon: '❤️',
    align: 'right',
    accent: '#FFD700',
  },
];

const StoryItem = ({ item, index }) => {
  const isLeft = item.align === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex items-center gap-8 mb-12`}
      style={{ flexDirection: isLeft ? 'row' : 'row-reverse' }}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div
          className="inline-block p-6 rounded-2xl relative"
          style={{
            background: 'linear-gradient(135deg, rgba(76,29,149,0.5), rgba(59,7,100,0.7))',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${item.accent}40`,
            boxShadow: `0 8px 32px ${item.accent}25`,
          }}
        >
          <span
            className="text-sm font-bold tracking-widest"
            style={{ color: item.accent, fontFamily: 'Poppins, sans-serif', textShadow: `0 0 10px ${item.accent}60` }}
          >
            ✦ {item.year} ✦
          </span>
          <h3
            className="text-xl font-bold mt-1 mb-2"
            style={{ color: '#FFD700', fontFamily: '"Playfair Display", serif' }}
          >
            {item.title}
          </h3>
          <p style={{ color: '#DDD6FE', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {item.description}
          </p>
        </div>
      </div>

      {/* Center icon */}
      <div className="flex-shrink-0 relative z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 15 }}
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
          style={{
            background: `linear-gradient(135deg, ${item.accent}, ${item.accent}99)`,
            boxShadow: `0 4px 20px ${item.accent}60`,
            border: `2px solid ${item.accent}80`,
          }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const CoupleStory = () => {
  return (
    <section id="story" className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F0521 0%, #1E0A3C 50%, #2A0E0E 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#7C3AED' }} />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#BE123C' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#FBBF24', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.35em' }}>
            ✦ OUR JOURNEY ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold gold-shimmer"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            A Love Story
          </h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, #FFD700, transparent)' }}
          />

          {storyItems.map((item, i) => (
            <StoryItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;
