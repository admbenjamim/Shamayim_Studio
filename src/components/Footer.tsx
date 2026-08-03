import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';
import { LOGO } from '../assets/images';

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/shamayimstudio" },
    { icon: <Youtube size={18} />, href: "https://www.youtube.com/@shamayimstudio" },
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1GZpCHXo8S/?mibextid=wwXIfr" },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
      href: "https://www.tiktok.com/@shamayimstudio"
    },
    { icon: <Mail size={18} />, href: "mailto:shamayimstudio1@gmail.com" },
  ];

  return (
    <footer className="py-12 bg-studio-navy border-t border-studio-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src={LOGO}
              alt="SHAMAYIM STUDIO"
              className="h-8 md:h-10 w-auto"
              referrerPolicy="no-referrer"
            />
            <p className="text-[10px] uppercase tracking-widest text-studio-white/30">
              © 2024 SHAMAYIM STUDIO. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>

          <div className="flex space-x-8">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-studio-white/40 hover:text-studio-amber transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase tracking-widest text-studio-white/30 mb-2">Padrão Internacional.</p>
            <p className="text-[10px] uppercase tracking-widest text-studio-white/60 font-semibold">CRIATIVIDADE COM PROPÓSITO.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
