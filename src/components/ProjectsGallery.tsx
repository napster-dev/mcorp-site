import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../utils/projectData";
import ProjectPreviewModal from "./ProjectPreviewModal";

const ProjectsGallery: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const categories = ["All", "Residential", "Commercial", "Civil Works"];

  // Slice first 3 projects (one of each category: Commercial, Residential, Civil Works)
  const curatedProjects = projects.slice(0, 3);

  const filteredProjects =
    filter === "All"
      ? curatedProjects
      : curatedProjects.filter((p) => p.category === filter);

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id,
    );
    const prevIndex =
      (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(
      (p) => p.id === selectedProject.id,
    );
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-background overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-rust font-poppins text-sm uppercase tracking-[0.4em] mb-4 block">
              Portfolio
            </span>
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
                  filter === cat
                    ? "border-rust text-rust"
                    : "border-transparent text-muted-strong hover:text-heading"
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
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden aspect-square border border-rust cursor-pointer hover:shadow-[0_0_15px_rgba(153,27,6,0.4)] transition-all duration-500"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-rust font-poppins text-xs uppercase tracking-[0.3em] mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-poppins font-bold text-heading mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-[11px] text-muted mb-3 font-poppins tracking-wider">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>
                  <p className="text-muted text-sm mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-3 group/link">
                    <span className="text-heading text-sm font-poppins font-semibold uppercase tracking-widest group-hover/link:text-rust transition-colors">
                      View Project
                    </span>
                    <div className="w-8 h-px bg-rust"></div>
                  </div>
                </div>

                {/* Always visible category label in corner */}
                <div className="absolute top-6 right-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">
                    <span className="text-[10px] text-white/70 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See All Projects CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/projects"
            className="group px-8 py-4 border border-rust text-rust hover:bg-rust hover:text-white transition-all duration-500 text-sm font-poppins uppercase tracking-[0.2em] font-semibold hover:shadow-[0_0_20px_rgba(153,27,6,0.3)]"
          >
            See All Projects
          </Link>
        </motion.div>
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

export default ProjectsGallery;
