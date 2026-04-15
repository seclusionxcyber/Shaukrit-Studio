import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    text: "Shaukrit Studio transformed our brand from a generic startup to a futuristic powerhouse. Their attention to detail is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Nexus",
    text: "The video editing quality is insane. They captured our vision perfectly and delivered ahead of schedule. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Thorne Media",
    text: "Our social media growth exploded after partnering with Shaukrit. They truly understand the digital landscape.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold uppercase italic mb-4"
          >
            Client <span className="text-secondary">Feedback</span>
          </motion.h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[40px] border border-white/5 relative group hover:border-secondary/30 transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-secondary/20 group-hover:text-secondary/40 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary/20">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase italic">{t.name}</h4>
                  <p className="text-secondary text-xs font-bold tracking-widest uppercase">{t.role}</p>
                </div>
              </div>

              <p className="text-white/70 text-lg font-light italic leading-relaxed">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
