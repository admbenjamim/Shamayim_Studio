/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GlassWhatsApp from './components/GlassWhatsApp';
import ProjectDetail from './components/ProjectDetail';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from './assets/images';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const selectedProject = PROJECTS_DATA.find(p => p.id === selectedProjectId);

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    setTimeout(() => {
      const el = document.getElementById('portfolio');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative bg-studio-navy min-h-screen font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-studio-amber origin-left z-[100]"
        style={{ scaleX }}
      />

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onBack={handleBackToHome}
            onSelectProject={(id) => setSelectedProjectId(id)}
          />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar />
            <main>
              <Hero />
              <Showreel />
              <Services />
              <Gallery onSelectProject={(id) => setSelectedProjectId(id)} />
              <About />
              <ContactSection />
            </main>
            <Footer />
            <GlassWhatsApp />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Static Grain (Simulated Overlay) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-[9999] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}

