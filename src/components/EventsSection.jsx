import { motion } from 'framer-motion';

const events = [
  {
    title: 'Mehndi Ceremony',
    date: '8 May 2026',
    time: '4:00 PM onwards',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'Join us for an evening of beautiful henna art, music, and celebrations.',
    icon: '🌿',
    color: '#22c55e',
  },
  {
    title: 'Sangeet Night',
    date: '9 May 2026',
    time: '7:00 PM onwards',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'An evening of music, dance, and joyous celebrations with family and friends.',
    icon: '🎵',
    color: '#ec4899',
  },
  {
    title: 'Wedding Ceremony',
    date: '10 May 2026',
    time: '11:00 AM',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'The sacred union of Nikhil and Prachi in the presence of family and friends.',
    icon: '💍',
    color: '#D4AF37',
  },
  {
    title: 'Wedding Reception',
    date: '10 May 2026',
    time: '7:00 PM onwards',
    venue: 'Sweta Lawn, Nigdi, Pune',
    description: 'Celebrate the newlyweds with a grand dinner and festivities.',
    icon: '🥂',
    color: '#8b5cf6',
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
          background: `${event.color}20`,
          border: `2px solid ${event.color}`,
          boxShadow: `0 4px 15px ${event.color}30`,
        }}
      >
        {event.icon}
      </div>
      {index < events.length - 1 && (
        <div
          className="w-px flex-1 mt-2"
          style={{ background: 'linear-gradient(180deg, #D4AF37, transparent)', minHeight: '40px' }}
        />
      )}
    </div>

    {/* Card */}
    <div
      className="flex-1 p-6 rounded-2xl mb-4"
      style={{
        background: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(212,175,55,0.3)',
        boxShadow: '0 8px 32px rgba(212,175,55,0.1)',
      }}
    >
      <div className="flex flex-wrap gap-2 mb-2">
        <span
          className="text-xs px-3 py-1 rounded-full font-semibold"
          style={{
            background: `${event.color}20`,
            color: event.color,
            border: `1px solid ${event.color}40`,
          }}
        >
          {event.date}
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}
        >
          {event.time}
        </span>
      </div>
      <h3
        className="text-xl font-bold mb-1"
        style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
      >
        {event.title}
      </h3>
      <p
        className="text-sm mb-2"
        style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif' }}
      >
        📍 {event.venue}
      </p>
      <p style={{ color: '#A0522D', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem', lineHeight: 1.6 }}>
        {event.description}
      </p>
    </div>
  </motion.div>
);

const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #FFF8F0, #FFECE0)' }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest mb-2" style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.3em' }}>
            JOIN US FOR
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
          >
            Wedding Events
          </h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
        </motion.div>

        {events.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
