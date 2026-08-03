import { motion } from 'motion/react';
import { ABOUT_IMAGE } from '../assets/images';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 bg-studio-navy overflow-hidden relative">
      <div className="absolute -right-20 top-0 text-[20vw] font-display font-bold text-studio-white/[0.02] select-none leading-none pointer-events-none">
        SHAMAYIM
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square md:aspect-[3/4] bg-studio-charcoal rounded-2xl overflow-hidden border border-studio-white/10 group"
        >
          <img
            src={ABOUT_IMAGE}
            alt="SHAMAYIM STUDIO Production"
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-navy via-transparent to-transparent opacity-60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-studio-amber text-xs uppercase tracking-[0.5em] font-semibold mb-8 block">Sobre o Estúdio</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-studio-white mb-10 leading-tight">
            ESTÉTICA <br /> COM <span className="text-studio-amber italic font-serif">PROPÓSITO.</span>
          </h2>
          <div className="space-y-6 text-studio-white/60 text-lg md:text-xl font-light leading-relaxed">
            <p>
              O SHAMAYIM STUDIO nasceu da necessidade ou melhor da cede de reproduzir a visão celeste em visual, desings e videos que exprimem exatamente uma visão divina um novo patamar de excelência audio visual.
            </p>
            <p>
              Não somos apenas uma agência; somos curadores de atmosfera. Misturamos profissionalidade artistica com uma sensibilidade espiritual e emocional para criar visuais imersivos que comunicam profundidade, autoridade e presença.
            </p>
            <p>
              Nosso compromisso é com o Deus através da tradução audio visual dos ministérios que fala mais alto e com detalhes que refletem a perfeição de um padrão internacional.
            </p>
          </div>
          <div className="mt-12 flex items-center space-x-6">
            <div className="h-[1px] w-20 bg-studio-amber" />
            <span className="text-[10px] uppercase tracking-widest text-studio-white/40">Since 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
