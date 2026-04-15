import { motion } from 'framer-motion';

const VenueSection = () => {
  const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Sweta+Lawn,+Nigdi,+Pune,+Maharashtra';
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.792!2d73.765!3d18.648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSweta+Lawn+Nigdi+Pune!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin';

  return (
    <section id="venue" className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #064E3B 0%, #065F46 40%, #1A0533 100%)' }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: '#10B981' }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: '#7C3AED' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-widest mb-2 font-semibold" style={{ color: '#FBBF24', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.35em' }}>
            ✦ CELEBRATE WITH US AT ✦
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold gold-shimmer"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            The Venue
          </h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, transparent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Venue info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(6,78,59,0.6), rgba(6,95,70,0.4))',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,215,0,0.25)',
                boxShadow: '0 8px 40px rgba(255,215,0,0.15)',
              }}
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: '#FFD700', fontFamily: '"Playfair Display", serif' }}
              >
                Sweta Lawn
              </h3>
              <p className="text-sm mb-4" style={{ color: '#6EE7B7', fontFamily: 'Poppins, sans-serif' }}>
                Nigdi, Pune, Maharashtra
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span style={{ color: '#A7F3D0', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                    Nigdi, Pune - 411044, Maharashtra
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span style={{ color: '#A7F3D0', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                    8-10 May 2026
                  </span>
                </div>
              </div>

              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,215,0,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold w-full justify-center glow-gold"
                style={{
                  background: 'linear-gradient(135deg, #92400E, #D97706, #FFD700)',
                  color: '#1A0533',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.9rem',
                }}
              >
                🗺️ Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden"
            style={{
              border: '2px solid rgba(255,215,0,0.3)',
              boxShadow: '0 8px 40px rgba(255,215,0,0.2)',
              height: '300px',
            }}
          >
            <iframe
              title="Venue Map"
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
