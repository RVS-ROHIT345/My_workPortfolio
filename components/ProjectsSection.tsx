
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div 
      className="sticky bg-[#112240] p-6 md:p-10 rounded-3xl shadow-2xl border-4 border-[#2D64FC] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px] mb-12"
      style={{ top: `${80 + index * 40}px` }}
    >
      {/* Left Col: Text Content */}
      <div className="order-2 lg:order-1">
        <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-100 mb-4">{project.title}</h3>
        <p className="text-slate-300 mb-6 text-lg md:text-xl leading-relaxed">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-[#233554] text-[#64ffda] rounded-full text-sm font-medium border border-[#64ffda]/30">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#64ffda] text-[#0a192f] font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 border-2 border-[#64ffda] text-[#64ffda] font-bold rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-all transform hover:-translate-y-1"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Right Col: Images */}
      <div className="order-1 lg:order-2 relative group h-64 md:h-80 lg:h-full min-h-[250px] overflow-hidden rounded-2xl">
        <img 
          src={project.image1} 
          alt={`${project.title} screenshot 1`} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Hover image overlay effect */}
        <div className="absolute top-4 right-4 w-1/2 h-1/2 rounded-xl overflow-hidden border-2 border-[#64ffda] shadow-2xl translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
          <img src={project.image2} alt={`${project.title} screenshot 2`} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-[#0a192f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" className="mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            A selection of my recent works ranging from full-stack platforms to AI research implementations.
          </p>
        </AnimatedSection>

        {/* The Stacking Container */}
        <div className="relative max-w-6xl mx-auto pb-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
