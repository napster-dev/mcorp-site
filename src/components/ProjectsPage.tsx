import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../utils/projectData';
import ProjectPreviewModal from './ProjectPreviewModal';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Civil Works'];

  useEffect(() => {
    // Scroll to top when page is loaded
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  return (
    <section className="pt-32 pb-24 md:pb-32 bg-background min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-heading leading-tight mb-4">
              Our <span className="text-gradient-rust">Projects</span>
            </h1>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl">
              Explore our extensive portfolio of high-end developments, residential masterworks, and civil engineering infrastructure across the region.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 md:gap-6 justify-start md:justify-end w-full md:w-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs md:text-sm font-poppins uppercase tracking-widest pb-2 border-b-2 transition-all duration-300 ${
                  filter === cat ? 'border-rust text-rust' : 'border-transparent text-muted-strong hover:text-heading'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden aspect-square border border-rust cursor-pointer rounded-sm hover:shadow-[0_0_20px_rgba(153,27,6,0.5)] hover:border-rust transition-all duration-500"
              >
                {/* Main Image (Grayscale base, color and scale on hover) */}
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                
                {/* Always-visible text and details overlay with slight blur */}
                <div className="absolute bottom-0 left-0 w-full z-10 p-6 md:p-8 bg-black/60 backdrop-blur-md border-t border-rust/10 flex flex-col justify-end transition-all duration-500 group-hover:bg-black/70">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <span className="text-rust font-poppins text-[10px] uppercase tracking-[0.25em]">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-white/50 font-poppins tracking-wider whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-heading mb-2 leading-snug group-hover:text-rust transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Additional metadata details */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/60 font-poppins tracking-wide opacity-80 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                    <span>Loc: {project.location}</span>
                    <span className="hidden sm:inline text-white/30">•</span>
                    <span>Client: {project.client}</span>
                  </div>
                  
                  {/* Subtle interact indicator inside overlay */}
                  <div className="mt-3 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-rust font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>Explore details</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Subtle top category indicator, fades out on hover */}
                <div className="absolute top-6 right-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
                   <div className="bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">
                      <span className="text-[10px] text-white/70 uppercase tracking-widest">{project.category}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted font-poppins text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectPreviewModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onPrev={handlePrevProject}
            onNext={handleNextProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPage;
