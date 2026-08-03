import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Volume } from "lucide-react";
import { SHOWREEL } from "../assets/images";

export default function Showreel() {
  const previewImages = SHOWREEL.scenes;
  const videoSrc = SHOWREEL.video;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [centerVisible, setCenterVisible] = useState(true);

  // Clicar no botão central: desmutar, reiniciar e esconder o botão
  const handleCenterClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    try {
      v.muted = false;
      v.currentTime = 0;
      await v.play();
      setIsMuted(false);
      setCenterVisible(false);
    } catch {
      // Se o browser bloquear autoplay com som, mantém muted e botão visível
      v.muted = true;
      setIsMuted(true);
      setCenterVisible(true);
    }
  };

  // Clicar no bloco do vídeo (quando o botão está invisível): silenciar, reiniciar e mostrar botão
  const handleContainerClick = async () => {
    const v = videoRef.current;
    if (!v) return;

    // Se o botão já está visível (estado inicial), não faz nada
    if (centerVisible) return;

    // Silencia e reinicia, volta ao estado inicial
    v.muted = true;
    v.currentTime = 0;
    try {
      await v.play();
    } catch {
      // ignore
    }
    setIsMuted(true);
    setCenterVisible(true);
  };

  return (
    <section id="showreel" className="py-24 md:py-40 bg-studio-charcoal px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4 md:space-y-0">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tight text-studio-white">
              O <span className="text-studio-amber italic font-serif">Showreel</span>
            </h2>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-studio-white/40 text-sm md:text-base uppercase tracking-widest max-w-sm text-right">
            Explorando os limites do visual contemporâneo.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group aspect-video bg-studio-navy/40 overflow-hidden border border-studio-white/10 cursor-pointer"
          onClick={handleContainerClick}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            poster={previewImages[0]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Center play button (icon only). Becomes invisible after click */}
          {centerVisible && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
              <button
                onClick={handleCenterClick}
                aria-label="Ativar som e reiniciar"
                className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-studio-white/20 bg-studio-white/5 backdrop-blur-md hover:bg-studio-white/10 transition-all duration-200 text-studio-white"
              >
                <Play size={28} className="fill-current ml-1" />
              </button>
            </div>
          )}

          {/* Small corner mute icon (icon only, aparece apenas quando há som) */}
          {!isMuted && (
            <div className="absolute top-4 right-4 z-30">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-studio-white/10 border border-studio-white/10 transition-colors text-studio-white">
                <Volume size={16} />
              </div>
            </div>
          )}

          {/* Decorative overlay (non-interactive) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-studio-white/10 bg-transparent" />
          </div>

          {/* Video Text Overlays */}
          <div className="absolute bottom-10 left-10 hidden md:block pointer-events-none">
            <p className="text-[10px] uppercase tracking-[0.5em] text-studio-white/50 mb-2">Portfólio Volume 01</p>
            <p className="text-2xl font-display uppercase tracking-widest text-studio-white">Jornada Cinematográfica</p>
          </div>
        </motion.div>

        {/* Supporting Small Previews (cenas) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {previewImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (i + 1) }}
              className="aspect-video bg-studio-white/5 border border-studio-white/10 relative overflow-hidden group cursor-pointer"
            >
              <img
                src={src}
                alt={`Cena ${i + 1}`}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-studio-amber opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="absolute bottom-3 left-3 text-[8px] uppercase tracking-widest text-studio-white/30">
                Cena {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
