import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/50 backdrop-blur-md py-10 px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
        <div className="flex gap-12">
          <div className="stat-box">
            <span className="block text-3xl font-extrabold text-white">150+</span>
            <span className="text-[11px] uppercase tracking-widest text-accent font-bold">Elite Projects</span>
          </div>
          <div className="stat-box">
            <span className="block text-3xl font-extrabold text-white">12M</span>
            <span className="text-[11px] uppercase tracking-widest text-accent font-bold">Organic Reach</span>
          </div>
          <div className="stat-box">
            <span className="block text-3xl font-extrabold text-white">98%</span>
            <span className="text-[11px] uppercase tracking-widest text-accent font-bold">Retention Rate</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-xs tracking-widest text-white/60 uppercase font-bold">
          <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#FF0033] animate-pulse" />
          OPERATIONS ONLINE: studio@shaukrit.io
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-[0.4em]">
        &copy; {new Date().getFullYear()} Shaukrit Studio. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] glow-blue opacity-50" />
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] glow-red opacity-30" />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" onFinish={() => setLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
            
            {/* Custom Cursor Glow */}
            <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
              <div 
                className="absolute w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
                style={{ 
                  left: 'var(--mouse-x, 50%)', 
                  top: 'var(--mouse-y, 50%)' 
                }}
              />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

// Global mouse tracker for the cursor glow
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
}

