import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Instagram, Youtube, Facebook } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "TELEFONE & WHATSAPP",
      value: "+244 928 490 763",
      helper: "Disponível para chamadas e mensagens instantâneas."
    },
    {
      icon: <Mail size={20} />,
      label: "E-MAIL DIRETO",
      value: "shamayimstudio1@gmail.com",
      helper: "Respondemos em até 24 horas úteis."
    },
    {
      icon: <MapPin size={20} />,
      label: "LOCALIZAÇÃO",
      value: "Luanda, Angola",
      helper: "Atendimento Global (Online & Presencial)."
    },
    {
      icon: <Clock size={20} />,
      label: "HORÁRIO DE ATENDIMENTO",
      value: "Seg - Sáb / 09h - 18h",
      helper: "Finais de semana sob agendamento."
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-40 bg-studio-navy px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Contact Details */}
        <div className="flex-1 space-y-12">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-studio-amber text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-4 block"
            >
              VAMOS CONVERSAR
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-medium text-studio-white leading-tight"
            >
              Sua visão é  <br />
              <span className="text-studio-white font-bold italic font-serif">nosso foco.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 text-studio-amber">
                  {info.icon}
                  <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold">{info.label}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-display font-bold text-studio-white">{info.value}</p>
                  <p className="text-[10px] md:text-xs text-studio-white/40 uppercase tracking-wide leading-relaxed font-medium">
                    {info.helper}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links cluster */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-4 pt-8"
          >
            {[
              { icon: <Instagram size={20} />, href: "https://www.instagram.com/shamayimstudio", name: "Instagram" },
              { icon: <Youtube size={20} />, href: "https://www.youtube.com/@shamayimstudio", name: "Youtube" },
              { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1GZpCHXo8S/?mibextid=wwXIfr", name: "Facebook" },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                ),
                href: "https://www.tiktok.com/@shamayimstudio",
                name: "TikTok"
              }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-studio-white/10 text-studio-white/40 hover:text-studio-amber hover:border-studio-amber hover:bg-studio-amber/5 transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Elite Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[500px] bg-black border border-studio-white/10 rounded-[48px] p-8 md:p-14 md:aspect-[4/5] flex flex-col justify-center relative group overflow-hidden"
        >
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute inset-x-0 top-0 h-40 bg-studio-amber/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-display font-medium text-studio-white leading-tight">
              Interessado em <br />
              <span className="font-bold">um projeto de elite ?</span>
            </h3>
            <p className="text-studio-white/60 text-sm md:text-base font-light leading-relaxed">
              Preencha os detalhes ou fale diretamente connosco pelo WhatsApp para uma resposta imediata.
            </p>
            <div className="pt-4 space-y-4">
              <motion.a
                href={`https://wa.me/244928490763?text=${encodeURIComponent(
                  'Olá, SHAMAYIM STUDIO! Saudações cordiais. Vi o vosso trabalho e gostaria de obter mais informações sobre os vossos serviços de produção audiovisual e identidade visual.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-16 md:h-20 flex items-center justify-center space-x-4 bg-studio-amber text-studio-navy rounded-full font-display font-bold uppercase tracking-widest text-sm transition-all duration-300"
              >
                <MessageCircle size={20} fill="currentColor" />
                <span>Falar no WhatsApp</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-16 md:h-20 flex items-center justify-center space-x-4 border border-studio-white/20 text-studio-white rounded-full font-display font-bold uppercase tracking-widest text-sm transition-all duration-300"
              >
                <Calendar size={20} />
                <span>Ver agenda de reunião</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
