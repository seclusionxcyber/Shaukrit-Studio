import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-black to-black" />
        
        {/* Particle Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #00BFFF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Glowing Orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -120, 120, 0],
            y: [0, 80, -80, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-secondary text-lg font-light tracking-[0.3em] uppercase mb-8">
            Video &bull; Design &bull; Web &bull; Growth
          </span>
          
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[1.05] mb-12 uppercase hero-text">
            We Turn Ideas <br />
            Into Digital <br />
            <span className="text-secondary">Power.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-secondary text-primary font-bold uppercase tracking-widest rounded-[4px] shadow-[0_8px_24px_rgba(0,191,255,0.3)]"
            >
              Initiate Project
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-[4px] hover:bg-white/5 transition-all"
            >
              Watch Reel
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em]">Scroll</span>
      </motion.div>
    </section>
  );
}
