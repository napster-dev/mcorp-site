import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, User, MapPin } from 'lucide-react';
import { Project } from '../utils/projectData';

interface ProjectPreviewModalProps {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when switching to a different project
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xs p-4 md:p-8">
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Large Navigation Arrow - Left (Floating outside on Desktop, absolute inside on Mobile) */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-surface/85 border border-rust/30 text-muted hover:text-heading hover:bg-rust hover:border-rust hover:shadow-[0_0_20px_rgba(153,27,6,0.6)] active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
        aria-label="Previous Project"
      >
        <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Large Navigation Arrow - Right (Floating outside on Desktop, absolute inside on Mobile) */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-surface/85 border border-rust/30 text-muted hover:text-heading hover:bg-rust hover:border-rust hover:shadow-[0_0_20px_rgba(153,27,6,0.6)] active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
        aria-label="Next Project"
      >
        <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
      </button>

      {/* Main Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative w-full max-w-5xl bg-surface border border-rust/20 rounded-sm shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-[85vh] z-40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-rust transition-colors z-30 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/5 shadow-md active:scale-95 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* LEFT COLUMN: Media Gallery (Shopify style) */}
        <div className="w-full md:w-3/5 flex flex-col p-4 md:p-8 border-b md:border-b-0 md:border-r border-border-subtle bg-black/15 justify-center">
          {/* Main Large View Container */}
          <div className="relative w-full aspect-video rounded-xs overflow-hidden bg-black/20 group">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} - view ${currentImageIndex + 1}`}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />

            {/* In-gallery Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:bg-rust hover:border-rust transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:bg-rust hover:border-rust transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
            >
              <ChevronRight size={18} />
            </button>

            {/* Current Image Indicator Badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/10 text-[10px] text-white/80 tracking-widest uppercase font-poppins rounded-xs">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnail Slider Grid below Main View */}
          <div className="mt-4 flex items-center space-x-3 overflow-x-auto py-2 scrollbar-none justify-center">
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-xs overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'border-2 border-rust opacity-100 shadow-[0_0_10px_rgba(153,27,6,0.4)] scale-105' 
                    : 'border border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} thumb ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Project Details with Internal Scroll */}
        <div className="w-full md:w-2/5 flex flex-col p-6 md:p-8 justify-between max-h-[50vh] md:max-h-none overflow-hidden">
          {/* Header & Meta */}
          <div className="mb-4">
            <span className="text-rust font-poppins text-xs font-semibold uppercase tracking-[0.25em] mb-2 block">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-heading leading-tight tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Detailed Info Grid */}
          <div className="grid grid-cols-1 gap-3 py-4 border-t border-b border-border-subtle my-4">
            <div className="flex items-center space-x-3 text-body-secondary text-sm">
              <Calendar size={16} className="text-rust shrink-0" />
              <span><strong>Year:</strong> {project.year}</span>
            </div>
            <div className="flex items-center space-x-3 text-body-secondary text-sm">
              <User size={16} className="text-rust shrink-0" />
              <span><strong>Client:</strong> {project.client}</span>
            </div>
            <div className="flex items-center space-x-3 text-body-secondary text-sm">
              <MapPin size={16} className="text-rust shrink-0" />
              <span><strong>Location:</strong> {project.location}</span>
            </div>
          </div>

          {/* Internally scrollable long-form details with custom rust scrollbar */}
          <div className="flex-1 overflow-y-auto pr-2 mb-6 max-h-[25vh] md:max-h-[35vh]">
            <h4 className="text-sm font-poppins font-semibold text-heading uppercase tracking-widest mb-2">
              Project Overview
            </h4>
            <p className="text-muted text-sm leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Footer Contact Prompt */}
          <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">
              Mcorp Engineering
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="text-xs text-rust font-poppins uppercase tracking-widest font-semibold hover:text-heading transition-colors"
            >
              Inquire Project →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPreviewModal;
