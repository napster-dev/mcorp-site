import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 scale-110">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070"
          alt="Luxury Architecture"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-background"></div>
        <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/50'}`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-rust font-poppins text-lg uppercase tracking-[0.6em] mb-4">
              Islamabad's Premier Developer
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-poppins font-bold text-white leading-none mb-8"
          >
            BUILT <span className="text-gradient-rust italic">DIFFERENT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className={`text-xl md:text-2xl font-light max-w-2xl mx-auto md:mx-0 mb-12 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-black'}`}
          >
            MCORP is a forward-thinking construction firm redefining the landscape of modern architecture and engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          >
            <a
              href="#projects"
              className="px-10 py-5 bg-rust text-white font-poppins font-bold uppercase tracking-widest hover:bg-rust-light transition-all duration-300 w-full md:w-auto text-center"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              className={`px-10 py-5 border font-poppins font-medium uppercase tracking-widest transition-all duration-300 w-full md:w-auto text-center backdrop-blur-sm ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white hover:text-background' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}
            >
              Our Philosophy
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[20px] uppercase tracking-[0.4em] text-gray-500 mb-4 rotate-90 origin-left"></span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-rust"
        >
          <ArrowDown size={40} />
        </motion.div>
      </motion.div>

      {/* Vertical Side Lines for Emaar-like feel */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
      <div className="absolute right-12 top-0 bottom-0 w-px bg-white/5 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
