import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_GALLERY } from '../assets/images';
export default function Hero() {
  const stats = [
    { label: "PROJETOS ENTREGUES", value: "50+" },
    { label: "VISÃO PREMIUM", value: "100%" },
    { label: "PADRÃO INTERNACIONAL", value: "ELITE" },
  ];
  const galleryItems = HERO_GALLERY.map((img, index) => ({
    id: index + 1,
    image: img
  }));
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-studio-navy pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex-1 flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-24 relative z-10 w-full">
        {/* Left Side: Content */}
        <div className="flex-1 text-left pt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center space-x-2 mb-8"
          >
            <span className="text-studio-amber text-lg">{'>'}</span>
            <span className="text-studio-white/60 text-xs uppercase tracking-[0.3em] font-bold">
              DISPONÍVEL PARA PROJETOS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(16px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tight leading-[0.85] mb-12 text-studio-white"
          >
            PRODUZIR <br /> IDENTIDADE<span className="text-studio-amber">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-base md:text-xl text-studio-white/60 font-light tracking-wide mb-12 leading-relaxed"
          >
            TRANSFORMAMOS A VISÃO DE MINISTÉRIOS E ARTISTAS EM EXPERIÊNCIAS VISUAIS DE ELITE.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <a
              href={`https://wa.me/244928490763?text=${encodeURIComponent(
                'Olá, SHAMAYIM STUDIO! Saudações cordiais. Gostaria de iniciar um projeto convosco e saber mais sobre os vossos serviços.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 px-10 py-5 bg-studio-amber text-studio-navy font-display font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all duration-300 w-full sm:w-auto rounded-full"
            >
              <span>INICIAR PROJETO</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="px-10 py-5 text-studio-white font-display font-bold uppercase tracking-[0.2em] text-sm hover:text-studio-amber transition-colors duration-300 w-full sm:w-auto rounded-full border border-studio-white/10 text-center"
            >
              EXPLORAR PORTFÓLIO
            </a>
          </motion.div>
          {/* Mobile Only: Horizontal Scrolling Gallery */}
          <div className="md:hidden w-screen -mx-6 overflow-hidden mt-16">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 px-6 w-max"
            >
              {[...galleryItems, ...galleryItems, ...galleryItems].map((item, idx) => (
                <div key={`mob-${idx}`} className="w-56 aspect-[4/5] bg-studio-charcoal border border-studio-white/10 rounded-2xl shadow-xl relative overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={`Work ${idx}`} className="w-full h-full object-cover grayscale-[20%]" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Right Side: Scrolling Flyer Gallery (Desktop & Tablet) */}
        <div className="hidden md:block w-[600px] lg:w-[650px] h-[850px] lg:h-[950px] relative">
          <div className="absolute inset-0 grid grid-cols-2 gap-4 h-full overflow-hidden">
            {/* Column 1: Scrolling Up */}
            <motion.div animate={{ y: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
              {[...galleryItems, ...galleryItems].map((item, idx) => (
                <div key={`c1-${idx}`} className="w-full aspect-[4/5] bg-studio-charcoal border border-studio-white/10 rounded-2xl shadow-2xl relative overflow-hidden group">
                  <img src={item.image} alt={`Work ${idx}`} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              ))}
            </motion.div>
            {/* Column 2: Scrolling Down */}
            <motion.div animate={{ y: [-1000, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4 mt-12">
              {[...galleryItems, ...galleryItems].map((item, idx) => (
                <div key={`c2-${idx}`} className="w-full aspect-[4/5] bg-studio-charcoal border border-studio-white/10 rounded-2xl shadow-2xl relative overflow-hidden group">
                  <img src={item.image} alt={`Work ${idx}`} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              ))}
            </motion.div>
            {/* Fades */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-studio-navy via-transparent to-studio-navy" />
          </div>
        </div>
      </div>
      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 w-full py-16 lg:py-24 border-t border-studio-white/10 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <span className="text-3xl md:text-4xl font-display font-bold text-studio-white mb-2">{stat.value}</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-studio-white/40 font-bold">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}