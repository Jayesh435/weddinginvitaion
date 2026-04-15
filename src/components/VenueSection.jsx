import { motion } from 'framer-motion';

const VenueSection = () => {
  const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Sweta+Lawn,+Nigdi,+Pune,+Maharashtra';
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.792!2d73.765!3d18.648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSweta+Lawn+Nigdi+Pune!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin';

  return (
    <section id="venue" className="py-20 px-4" style={{ background: '#FFF8F0' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-widest mb-2" style={{ color: '#D4AF37', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.3em' }}>
            CELEBRATE WITH US AT
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
          >
            The Venue
          </h2>
          <div className="w-24 h-px mx-auto mt-4" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
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
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,175,55,0.3)',
                boxShadow: '0 8px 32px rgba(212,175,55,0.15)',
              }}
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: '#8B4513', fontFamily: '"Playfair Display", serif' }}
              >
                Sweta Lawn
              </h3>
              <p className="text-sm mb-4" style={{ color: '#A0522D', fontFamily: 'Poppins, sans-serif' }}>
                Nigdi, Pune, Maharashtra
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span style={{ color: '#7c4e2d', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                    Nigdi, Pune - 411044, Maharashtra
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span style={{ color: '#7c4e2d', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                    8-10 May 2026
                  </span>
                </div>
              </div>

              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(212,175,55,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold w-full justify-center"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37, #B8962E)',
                  boxShadow: '0 8px 25px rgba(212,175,55,0.3)',
                  fontFamily: 'Poppins, sans-serif',
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
              border: '2px solid rgba(212,175,55,0.3)',
              boxShadow: '0 8px 32px rgba(212,175,55,0.2)',
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
