import { motion } from 'framer-motion';
import { Video, Palette, Globe, TrendingUp } from 'lucide-react';

const services = [
  {
    title: "Video Editing",
    description: "High-impact storytelling with cinematic transitions, sound design, and color grading that keeps viewers hooked.",
    icon: Video,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Graphic Design",
    description: "Futuristic visual identities, social media assets, and brand guidelines that make your business stand out.",
    icon: Palette,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Web Development",
    description: "Modern, high-performance websites built with the latest tech to provide seamless user experiences.",
    icon: Globe,
    color: "from-secondary to-blue-400"
  },
  {
    title: "Social Growth",
    description: "Data-driven strategies to scale your presence across platforms and build a loyal community.",
    icon: TrendingUp,
    color: "from-accent to-red-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase italic mb-4"
          >
            Our <span className="text-secondary">Services</span>
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 glass rounded-xl border border-secondary/15 hover:border-secondary transition-all duration-500"
            >
              <span className="text-[11px] uppercase tracking-[2px] text-secondary font-bold mb-6 block">
                {service.title}
              </span>
              
              <div className="w-12 h-12 mb-6 text-white/80 group-hover:text-secondary transition-colors">
                <service.icon className="w-full h-full" />
              </div>
              
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Core Capability</span>
                <div className="w-2 h-2 bg-secondary/30 rounded-full group-hover:bg-secondary transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
