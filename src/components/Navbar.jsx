import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'Venue', href: '#venue' },
  { label: 'Gallery', href: '#gallery' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,248,240,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(212,175,55,0.15)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.2)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold" style={{ color: '#D4AF37', fontFamily: '"Playfair Display", serif' }}>
          N ❤️ P
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-yellow-600"
              style={{ color: '#7c4e2d', fontFamily: 'Poppins, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-yellow-700" />
          <span className="block w-6 h-0.5 bg-yellow-700" />
          <span className="block w-6 h-0.5 bg-yellow-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ background: 'rgba(255,248,240,0.95)', backdropFilter: 'blur(12px)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2 border-b border-yellow-100"
              style={{ color: '#7c4e2d', fontFamily: 'Poppins, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
