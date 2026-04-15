import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Awards Won", value: 12, suffix: "" },
  { label: "Team Experts", value: 25, suffix: "" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[20vw] font-bold uppercase italic whitespace-nowrap leading-none">
          SHAUKRIT STUDIO SHAUKRIT STUDIO
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            About Us
          </span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase italic mb-8 leading-[0.9]">
            We Are The <br />
            <span className="text-secondary">Future</span> Of Digital <br />
            Creation.
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12">
            Shaukrit Studio is a high-end digital agency born from the intersection of technology and creativity. 
            We don't just provide services; we build digital powerhouses for brands that want to lead, not follow.
          </p>

          <div className="grid grid-cols-2 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-accent uppercase tracking-[2px] text-[11px] font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-xl overflow-hidden glass border border-secondary/20 p-6">
            <div className="w-full h-full rounded-lg overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/agency/800/800" 
                alt="Agency Life" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
            </div>
          </div>
          
          {/* Floating Status Element */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass p-5 rounded-lg border border-secondary/30 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#FF0033] animate-pulse" />
              <div>
                <div className="text-white font-bold uppercase text-[10px] tracking-widest">Operations Online</div>
                <div className="text-secondary text-[10px] font-bold tracking-widest">studio@shaukrit.io</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
