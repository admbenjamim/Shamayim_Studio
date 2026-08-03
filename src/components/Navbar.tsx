import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { LOGO } from '../assets/images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'TRABALHOS', href: '#portfolio' },
    { name: 'EXPERTISE', href: '#services' },
    { name: 'ESTÚDIO', href: '#about' },
    { name: 'CONTACTO', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-6 md:px-8 lg:px-12 bg-gradient-to-b from-studio-navy to-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center"
        >
          <a href="/" aria-label="SHAMAYIM STUDIO logo" className="flex items-center">
            <img
              src={LOGO}
              alt="SHAMAYIM STUDIO"
              className="w-36 md:w-44 lg:w-56 h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center lg:space-x-12 md:space-x-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-[10px] lg:text-xs uppercase tracking-widest font-bold text-studio-white/50 hover:text-studio-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-2 px-5 lg:px-6 py-3 bg-studio-amber text-studio-navy font-display font-bold uppercase tracking-[0.1em] lg:tracking-[0.2em] text-[10px] lg:text-xs hover:brightness-110 transition-all duration-300 rounded-full whitespace-nowrap"
          >
            <span>ENTRE EM CONTACTO</span>
            <ArrowUpRight size={14} className="hidden lg:block" />
          </motion.a>
        </div>

        {/* mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-studio-white" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-studio-navy border-b border-studio-white/10 px-6 py-12 flex flex-col items-center space-y-8 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl uppercase tracking-widest font-bold text-studio-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2 px-8 py-4 bg-studio-amber text-studio-navy font-display font-bold uppercase tracking-widest text-sm rounded-full"
          >
            <span>ENTRE EM CONTACTO</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
