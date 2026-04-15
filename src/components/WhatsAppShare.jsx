import { motion } from 'framer-motion';

const WhatsAppShare = () => {
  const message = `You're invited to our wedding 💍\nNikhil & Prachi Wedding\n${window.location.href}`;
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(37,211,102,0.6)' }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
      }}
      title="Share on WhatsApp"
    >
      💬
    </motion.a>
  );
};

export default WhatsAppShare;
