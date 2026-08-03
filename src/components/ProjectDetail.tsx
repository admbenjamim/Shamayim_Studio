import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Play, Volume, MessageCircle, CheckCircle2 } from 'lucide-react';
import { ProjectDetailData, PROJECTS_DATA, LOGO } from '../assets/images';

interface ProjectDetailProps {
  project: ProjectDetailData;
  onBack: () => void;
  onSelectProject: (projectId: string) => void;
}

export default function ProjectDetail({ project, onBack, onSelectProject }: ProjectDetailProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll to top when project opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [project.id]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Find next project
  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-studio-navy text-studio-white pb-24 relative"
    >
      {/* Top Header Bar */}
      <header className="sticky top-0 left-0 w-full z-50 bg-studio-navy/90 backdrop-blur-xl border-b border-studio-white/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-3 text-studio-white/60 hover:text-studio-amber transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar aos Trabalhos</span>
          </button>

          <img
            src={LOGO}
            alt="SHAMAYIM STUDIO"
            className="h-6 md:h-8 w-auto hidden sm:block"
            referrerPolicy="no-referrer"
          />

          <a
            href={`https://wa.me/244928490763?text=${encodeURIComponent(
              `Olá, SHAMAYIM STUDIO! Saudações cordiais. Gostaria de realizar um projeto semelhante a "${project.title}". Podem enviar-me mais informações e um orçamento?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 md:px-5 md:py-2.5 bg-studio-amber text-studio-navy font-display font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full hover:brightness-110 transition-all"
          >
            <MessageCircle size={14} fill="currentColor" />
            <span>Orçamento Similar</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 space-y-16">
        {/* Project Header Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <span className="w-2 h-2 rounded-full bg-studio-amber" />
            <span className="text-studio-amber text-xs md:text-sm uppercase tracking-[0.4em] font-bold">
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-studio-white leading-none"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-studio-white/70 font-light max-w-3xl leading-relaxed"
          >
            {project.subtitle}
          </motion.p>
        </div>

        {/* Project Metadata Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-studio-white/10"
        >
          <div>
            <p className="text-[10px] uppercase tracking-widest text-studio-white/40 mb-1">Cliente</p>
            <p className="text-sm md:text-base font-display font-bold text-studio-white">{project.client}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-studio-white/40 mb-1">Ano</p>
            <p className="text-sm md:text-base font-display font-bold text-studio-white">{project.year}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-studio-white/40 mb-1">Função / Papel</p>
            <p className="text-sm md:text-base font-display font-bold text-studio-white">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-studio-white/40 mb-1">Formato</p>
            <p className="text-sm md:text-base font-display font-bold text-studio-amber">{project.duration}</p>
          </div>
        </motion.div>

        {/* Featured Video / Main Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-video bg-studio-charcoal rounded-3xl overflow-hidden border border-studio-white/10 group cursor-pointer shadow-2xl"
          onClick={togglePlay}
        >
          {project.videoUrl ? (
            <>
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.image}
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-studio-amber/90 text-studio-navy flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} className="fill-current ml-1" />
                  </div>
                </div>
              )}
              <div className="absolute top-6 right-6 flex space-x-3">
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-studio-amber hover:text-studio-navy transition-colors"
                  title={isMuted ? "Ativar som" : "Desativar som"}
                >
                  <Volume size={18} />
                </button>
              </div>
            </>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>

        {/* Project Results Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-studio-charcoal border border-studio-white/10 rounded-2xl">
          {project.results.map((res, i) => (
            <div key={i} className="flex items-center space-x-4">
              <CheckCircle2 size={24} className="text-studio-amber flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-studio-white/40">{res.label}</p>
                <p className="text-xl font-display font-bold text-studio-white">{res.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Narrative Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pt-8 items-start">
          {/* Overview & Concept */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-studio-amber font-bold mb-3 block">
                01. VISÃO GERAL
              </span>
              <h2 className="text-3xl font-display font-bold uppercase text-studio-white mb-4">
                Visão & Contexto
              </h2>
              <p className="text-studio-white/70 text-base md:text-lg font-light leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-studio-amber font-bold mb-3 block">
                02. O CONCEITO
              </span>
              <h3 className="text-2xl font-display font-bold uppercase text-studio-white mb-3">
                Linguagem Estética
              </h3>
              <p className="text-studio-white/70 text-base font-light leading-relaxed">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-8 p-8 md:p-12 bg-black/40 border border-studio-white/10 rounded-3xl">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-studio-amber font-bold mb-3 block">
                03. O DESAFIO
              </span>
              <h3 className="text-2xl font-display font-bold uppercase text-studio-white mb-3">
                Complexidade Técnica
              </h3>
              <p className="text-studio-white/70 text-base font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="pt-6 border-t border-studio-white/10">
              <span className="text-xs uppercase tracking-[0.4em] text-studio-amber font-bold mb-3 block">
                04. A SOLUÇÃO SHAMAYIM
              </span>
              <h3 className="text-2xl font-display font-bold uppercase text-studio-white mb-3">
                Execução de Elite
              </h3>
              <p className="text-studio-white/70 text-base font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid of Stills */}
        <div className="space-y-8 pt-12">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-studio-amber font-bold mb-2 block">
                GALERIA DE STILLS
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-studio-white">
                Capturas de Quadro
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-studio-white/40 hidden md:block">
              {project.gallery.length} Frames Selecionados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/3] bg-studio-charcoal rounded-2xl overflow-hidden border border-studio-white/10 group relative"
              >
                <img
                  src={img}
                  alt={`${project.title} frame ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-studio-amber font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  SHAMAYIM FRAME #{String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Next Project Footer Card */}
        <div className="pt-16 border-t border-studio-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-studio-white/40 mb-2">Próximo Projeto</p>
            <h3 className="text-3xl md:text-5xl font-display font-bold uppercase text-studio-white">
              {nextProject.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-studio-amber font-bold mt-1">
              {nextProject.category}
            </p>
          </div>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="flex items-center space-x-3 px-8 py-5 bg-studio-amber text-studio-navy font-display font-bold uppercase tracking-widest text-sm rounded-full hover:brightness-110 transition-all group whitespace-nowrap"
          >
            <span>Ver Próximo Projeto</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
