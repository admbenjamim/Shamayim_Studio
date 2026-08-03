import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function GlassWhatsApp() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-auto">
      <motion.a
        href={`https://wa.me/244928490763?text=${encodeURIComponent(
          'Olá, SHAMAYIM STUDIO! Saudações cordiais. Vi o vosso trabalho e gostaria de obter mais informações sobre os vossos serviços de produção audiovisual e identidade visual.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderColor: "rgba(255, 179, 0, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-3 px-6 py-3 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] group transition-all duration-500"
      >
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-studio-amber text-studio-navy group-hover:rotate-[360deg] transition-transform duration-700">
          <MessageCircle size={16} fill="currentColor" />
        </div>
        <div className="flex flex-col items-start pr-2">
          <span className="text-[9px] uppercase tracking-[0.2em] text-studio-white/40 font-bold leading-none mb-1">
            Online agora
          </span>
          <span className="text-xs font-display font-bold uppercase tracking-widest text-studio-white whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </div>

        {/* Subtle Indicator */}
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-studio-amber opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-studio-amber"></span>
        </div>
      </motion.a>
    </div>
  );
}
