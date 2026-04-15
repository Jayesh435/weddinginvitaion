import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import EnvelopeOpening from './components/EnvelopeOpening';
import PetalAnimation from './components/PetalAnimation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoupleStory from './components/CoupleStory';
import EventsSection from './components/EventsSection';
import VenueSection from './components/VenueSection';
import GallerySection from './components/GallerySection';
import CountdownTimer from './components/CountdownTimer';
import MusicPlayer from './components/MusicPlayer';
import WhatsAppShare from './components/WhatsAppShare';
import DownloadButton from './components/DownloadButton';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showEnvelope, setShowEnvelope] = useState(false);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowEnvelope(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnvelopeOpen = () => {
    setShowEnvelope(false);
    setTimeout(() => setShowMain(true), 500);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #1A0533 0%, #3B0764 30%, #7C1D2E 70%, #1A0533 100%)' }}>
      {/* Preloader */}
      <Preloader isLoading={isLoading} />

      {/* Envelope Opening */}
      <AnimatePresence>
        {showEnvelope && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <EnvelopeOpening onOpen={handleEnvelopeOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      <AnimatePresence>
        {showMain && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Floating petals */}
            <PetalAnimation />

            {/* Navigation */}
            <Navbar />

            {/* Main content */}
            <HeroSection />
            <CountdownTimer />
            <CoupleStory />
            <EventsSection />
            <VenueSection />
            <GallerySection />
            <DownloadButton />
            <Footer />

            {/* Floating buttons */}
            <WhatsAppShare />
            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
