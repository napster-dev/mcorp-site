import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../utils/teamData';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-heading mb-8">
            Building the <span className="text-gradient-rust">Future</span>
          </h1>
          <div className="w-24 h-1 bg-rust mb-8"></div>
          <div className="max-w-3xl text-lg md:text-xl text-muted font-light leading-relaxed space-y-6">
            <p>
              Founded with a vision to redefine the construction and development industry, Mcorp has grown from a passionate team into a leading force in modern architecture and engineering. We believe that every structure has a story to tell, and our job is to ensure it is one of resilience, innovation, and timeless design.
            </p>
            <p>
              Our journey is defined by a relentless pursuit of excellence. We don't just build spaces; we create environments that inspire, function flawlessly, and stand the test of time.
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-heading mb-16">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                {/* Squared and non-rounded styling */}
                <div className="relative overflow-hidden aspect-square mb-6 border border-border-subtle group-hover:border-rust transition-colors duration-500">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-rust p-4 lg:p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-8 h-8 flex flex-col justify-between">
                      <div className="w-full h-px bg-white"></div>
                      <div className="w-2/3 h-px bg-white"></div>
                      <div className="w-1/3 h-px bg-white"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-poppins font-bold text-heading mb-2">
                  {member.name}
                </h3>
                <p className="text-rust font-poppins text-sm uppercase tracking-widest font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
