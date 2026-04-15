import { motion } from 'framer-motion';

const events = [
  {
    title: 'Mehndi Ceremony',
    date: '8 May 2026',
    time: '4:00 PM onwards',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'Join us for an evening of beautiful henna art, music, and celebrations.',
    icon: '🌿',
    color: '#10B981',
    bg: 'linear-gradient(135deg, rgba(6,78,59,0.7), rgba(16,185,129,0.3))',
  },
  {
    title: 'Sangeet Night',
    date: '9 May 2026',
    time: '7:00 PM onwards',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'An evening of music, dance, and joyous celebrations with family and friends.',
    icon: '🎵',
    color: '#EC4899',
    bg: 'linear-gradient(135deg, rgba(131,24,67,0.7), rgba(236,72,153,0.3))',
  },
  {
    title: 'Wedding Ceremony',
    date: '10 May 2026',
    time: '11:00 AM',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'The sacred union of Nikhil and Prachi in the presence of family and friends.',
    icon: '💍',
    color: '#FFD700',
    bg: 'linear-gradient(135deg, rgba(92,64,0,0.7), rgba(255,215,0,0.3))',
  },
  {
    title: 'Wedding Reception',
    date: '10 May 2026',
    time: '7:00 PM onwards',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'Celebrate the newlyweds with a grand dinner and festivities.',
    icon: '🥂',
    color: '#A78BFA',
    bg: 'linear-gradient(135deg, rgba(46,16,101,0.7), rgba(167,139,250,0.3))',
  },
];

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="flex gap-6 mb-8"
  >
    {/* Timeline dot */}
    <div className="flex flex-col items-center flex-shrink-0">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl z-10"
        style={{
          background: `${event.color}25`,
          border: `2px solid ${event.color}`,
          boxShadow: `0 4px 20px ${event.color}50`,
        }}
      >
        {event.icon}
      </div>
      {index < events.length - 1 && (
        <div
          className="w-px flex-1 mt-2"
          style={{ background: `linear-gradient(180deg, ${event.color}80, transparent)`, minHeight: '40px' }}
        />
      )}
    </div>

    {/* Card */}
    <div
      className="flex-1 p-6 rounded-2xl mb-4"
      style={{
        background: event.bg,
        backdropFilter: 'blur(12px)',
        border: `1px solid ${event.color}35`,
        boxShadow: `0 8px 32px ${event.color}20`,
      }}
    >
      <div className="flex flex-wrap gap-2 mb-2">
        <span
          className="text-xs px-3 py-1 rounded-full font-semibold"
          style={{
            background: `${event.color}25`,
            color: event.color,
            border: `1px solid ${event.color}50`,
          }}
        >
          {event.date}
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ background: 'rgba(255,215,0,0.15)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)' }}
        >
          {event.time}
        </span>
      </div>
      <h3
        className="text-xl font-bold mb-1"
        style={{ color: '#FFD700', fontFamily: '"Playfair Display", serif' }}
      >
        {event.title}
      </h3>
      <p
        className="text-sm mb-2"
        style={{ color: event.color, fontFamily: 'Poppins, sans-serif' }}
      >
        📍 {event.venue}
      </p>
      <p style={{ color: '#DDD6FE', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem', lineHeight: 1.6 }}>
        {event.description}
      </p>
    </div>
  </motion.div>
);

const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1E1B4B 40%, #2D1B69 70%, #1A0533 100%)' }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: '#EC4899' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: '#10B981' }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#FBBF24', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.35em' }}>
            ✦ JOIN US FOR ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold gold-shimmer"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Wedding Events
          </h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
        </motion.div>

        {events.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
