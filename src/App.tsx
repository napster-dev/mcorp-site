import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectsGallery from './components/ProjectsGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { LoadingLogo } from './components/Logo';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for high-end feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-background text-body min-h-screen selection:bg-rust selection:text-white transition-colors duration-500">
        <CustomCursor />

        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  <Logo className="w-60 h-60" />
                </div>
                <motion.div
                  className="absolute inset-0 border-t-2 border-rust"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
              </motion.div>
              <div className="mt-8 w-40 h-px bg-rust/10 relative overflow-hidden">

                <motion.div
                  className="absolute inset-0 bg-rust"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className={`${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <ProjectsGallery />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
