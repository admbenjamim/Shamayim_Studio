import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../assets/images';

interface GalleryProps {
  onSelectProject?: (projectId: string) => void;
}

export default function Gallery({ onSelectProject }: GalleryProps) {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-studio-navy px-6 border-t border-studio-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 space-y-6 md:space-y-0 text-center md:text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-8xl font-display font-bold uppercase tracking-tight text-studio-white">
              TRABALHOS <br /> <span className="text-studio-white/20">SELECIONADOS</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:max-w-xs text-right">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-studio-white/40 leading-relaxed font-bold">
              UMA COLECÇÃO DE EXPERIÊNCIAS VISUAIS CRIADAS COM PRECISÃO E INTENÇÃO.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {PROJECTS_DATA.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onSelectProject?.(work.id)}
            >
              <div className="relative aspect-square bg-studio-charcoal overflow-hidden rounded-2xl border border-studio-white/10 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="w-16 h-16 rounded-full bg-studio-amber/20 backdrop-blur-md border border-studio-amber/50 flex items-center justify-center text-studio-amber shadow-2xl">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                {/* Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm md:text-xl font-display font-bold text-studio-white group-hover:text-studio-amber transition-colors uppercase tracking-tight mb-2">
                    {work.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-studio-white/40 font-bold">
                    {work.category}
                  </p>
                </div>
                <ArrowUpRight size={14} className="text-studio-white/20 group-hover:text-studio-amber transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

