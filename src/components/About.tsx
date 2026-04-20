import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-background transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-rust/10 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
              alt="MCORP Building Design"
              className="w-full h-auto aspect-3/4 object-cover filter grayscale"
            />
            <div className="absolute -bottom-8 -right-8 bg-rust p-8 hidden md:block">
              <span className="text-white font-poppins text-sm uppercase tracking-widest block mt-2 font-semibold">Established</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-6xl font-poppins font-bold text-heading mb-6">
                Redefining the <span className="text-gradient-rust">Industry Standards</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
              Mcorp is a forward-thinking construction and development firm committed to delivering high-quality, precision-driven projects across residential, commercial, and institutional sectors. Headquartered in Islamabad, our approach blends modern design sensibilities with robust engineering to create spaces that are both functional and future-ready.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="border-l border-rust pl-6 py-2">
                <h4 className="text-heading font-poppins font-semibold mb-2">Innovation</h4>
                <p className="text-muted-strong text-sm">We prioritize efficiency and excellence in execution using cutting-edge technologies.</p>
              </div>
              <div className="border-l border-rust pl-6 py-2">
                <h4 className="text-heading font-poppins font-semibold mb-2">Integrity</h4>
                <p className="text-muted-strong text-sm">We don't just build structures — we build confidence, value, and enduring partnerships.</p>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="mt-8 flex items-center space-x-4 cursor-pointer group"
            >
              <div className="w-12 h-px bg-rust group-hover:w-20 transition-all duration-300"></div>
              <span className="text-rust font-poppins uppercase tracking-widest text-sm font-semibold">Read our story</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Text in background */}
      <div className="absolute -bottom-20 right-0 opacity-[0.03] select-none pointer-events-none hidden lg:block overflow-hidden">
        <h3 className="text-[250px] font-bold text-heading leading-none whitespace-nowrap">BUILT DIFFERENT</h3>
      </div>
    </section>
  );
};

export default About;
