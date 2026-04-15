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
          ? 'rgba(26,5,51,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(255,215,0,0.2)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,215,0,0.25)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold gold-shimmer"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          N ❤️ P
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ color: '#E9D5FF', fontFamily: 'Poppins, sans-serif' }}
              onMouseEnter={e => (e.target.style.color = '#FFD700')}
              onMouseLeave={e => (e.target.style.color = '#E9D5FF')}
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
          <span className="block w-6 h-0.5" style={{ background: '#FFD700' }} />
          <span className="block w-6 h-0.5" style={{ background: '#FFD700' }} />
          <span className="block w-6 h-0.5" style={{ background: '#FFD700' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{
            background: 'rgba(26,5,51,0.97)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(255,215,0,0.2)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-2 border-b"
              style={{ color: '#E9D5FF', fontFamily: 'Poppins, sans-serif', borderColor: 'rgba(255,215,0,0.15)' }}
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
