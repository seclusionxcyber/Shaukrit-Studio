import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onFinish }: { onFinish: () => void, key?: string }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);
    
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Particles Effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 2, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-secondary rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-48 h-48 flex items-center justify-center"
        >
          {/* Eye Outer */}
          <svg viewBox="0 0 200 100" className="w-full h-full text-white/20 fill-current">
            <path d="M10,50 Q100,0 190,50 Q100,100 10,50 Z" />
          </svg>
          
          {/* Glowing Eye Inner */}
          <motion.div
            animate={{ 
              boxShadow: ["0 0 20px #00BFFF", "0 0 40px #00BFFF", "0 0 20px #00BFFF"],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-20 h-20 rounded-full border-2 border-secondary/50 flex items-center justify-center overflow-hidden"
          >
             {/* Lightning Bolt */}
             <motion.svg 
               viewBox="0 0 24 24" 
               className="w-12 h-12 text-secondary fill-current"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1.2, duration: 0.3, type: "spring" }}
             >
               <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
             </motion.svg>
             
             {/* Lightning Strike Effect */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 1, 0, 1, 0] }}
               transition={{ delay: 1.2, duration: 0.4 }}
               className="absolute inset-0 bg-white/30"
             />
          </motion.div>
        </motion.div>

        {/* Brand Text */}
        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-white uppercase italic">
                <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent animate-pulse">
                  Shaukrit Studio
                </span>
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent mt-2"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
