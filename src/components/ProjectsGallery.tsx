import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Civil Works'];

  const projects = [
    {
      id: 1,
      title: 'Islamabad Modern Towers',
      category: 'Commercial',
      description: 'A futuristic commercial development in the heart of Islamabad.',
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 2,
      title: 'Luxury Villa G-11',
      category: 'Residential',
      description: 'A high-end residential project with modern aesthetic and robust engineering.',
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 3,
      title: 'Metropolitan Bridge',
      category: 'Civil Works',
      description: 'Large-scale infrastructure project demonstrating excellence in execution.',
      image: "https://images.unsplash.com/photo-1545558014-8687977e99e4?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 4,
      title: 'Blue Area Corporate Plaza',
      category: 'Commercial',
      description: 'A landmark commercial project focused on sustainable construction.',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069",
    },
    {
      id: 5,
      title: 'The Haven Residencies',
      category: 'Residential',
      description: 'Luxury apartments blending comfort with world-class amenities.',
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=2070",
    },
    {
      id: 6,
      title: 'Industrial Park Infrastructure',
      category: 'Civil Works',
      description: 'Comprehensive civil works and infrastructure for industrial development.',
      image: "https://images.unsplash.com/photo-1518005020481-4235e1284f18?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-heading leading-tight">
              A Legacy of <span className="text-gradient-rust">Excellence</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 md:gap-8 justify-start md:justify-end"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-poppins uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                  filter === cat ? 'border-rust text-rust' : 'border-transparent text-muted-strong hover:text-heading'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden aspect-4/5"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-rust font-poppins text-xs uppercase tracking-[0.3em] mb-2">{project.category}</span>
                  <h3 className="text-2xl font-poppins font-bold text-heading mb-3">{project.title}</h3>
                  <p className="text-muted text-sm mb-6 leading-relaxed">{project.description}</p>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 cursor-pointer group/link"
                  >
                    <span className="text-heading text-sm font-poppins font-semibold uppercase tracking-widest group-hover/link:text-rust transition-colors">View Project</span>
                    <div className="w-8 h-px bg-rust"></div>
                  </motion.div>
                </div>

                {/* Always visible category label in corner */}
                <div className="absolute top-6 right-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                   <div className="bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">
                      <span className="text-[10px] text-white/70 uppercase tracking-widest">{project.category}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
