import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Identidade Visual",
      description: "Criação de logotipos e marcas distintas que geram impacto.",
      number: "01"
    },
    {
      title: "Cinema Cinematográfico",
      description: "Produzimos experiências visuais com peso e profundidade.",
      number: "02"
    },
    {
      title: "Estratégia Criativa",
      description: "Unindo a arte à presença institucional de forma estratégica.",
      number: "03"
    },
    {
      title: "Direção Digital",
      description: "Guiando a pegada digital de artistas e ministérios de elite.",
      number: "04"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-40 bg-studio-white text-studio-navy px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="lg:w-1/3">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-studio-navy/40 mb-8 block">
            NOSSA EXPERTISE
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-6xl md:text-8xl font-display font-medium uppercase tracking-tighter leading-[0.85]">
            MENOS É <br /> <span className="font-bold">PODEROSO.</span>
          </motion.h2>
        </div>

        <div className="lg:w-2/3 divide-y divide-studio-navy/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-10 md:py-16 group flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
            >
              <span className="text-xs font-bold text-studio-navy/20 group-hover:text-studio-amber transition-colors">
                {service.number}
              </span>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-studio-navy/60 font-medium max-w-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
