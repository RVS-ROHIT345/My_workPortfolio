
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        // Reduced padding, gap, and min-height for a more compact card
        <div className="bg-[#112240] p-6 md:p-8 rounded-xl shadow-lg border-4 border-[#2D64FC] grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[520px]">
            {/* Left Col: Text Content */}
            <div>
                {/* Reduced font size for the title */}
                <h3 className="font-serif text-4xl font-bold text-slate-100 mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map(tag => (
                        <div key={tag} className="flex items-center bg-[#233554] text-slate-200 text-sm font-medium px-4 py-2 rounded-full">
                            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 mr-2.5"></span>
                            {tag}
                        </div>
                    ))}
                </div>

                {/* View Project Link */}
                {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-semibold text-slate-200 hover:text-[#64ffda] transition-colors duration-300 group inline-flex items-center text-base"
                    >
                        <span>View Project</span>
                        <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                )}
            </div>
            
            {/* Right Col: Images */}
            <div className="flex flex-col gap-6">
                {/* Added fixed height (h-52) to ensure consistent image rendering */}
                <div className="group rounded-xl overflow-hidden shadow-md border-2 border-[#233554] h-52">
                    <img src={project.image1} alt={`${project.title} screenshot 1`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="group rounded-xl overflow-hidden shadow-md h-52">
                    <img src={project.image2} alt={`${project.title} screenshot 2`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
            </div>
        </div>
    );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">
            Featured Projects
          </h2>
           <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto mb-16">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </AnimatedSection>
        <div className="relative" style={{ paddingBottom: `${(PROJECTS.length - 1) * 6}rem` }}>
          {PROJECTS.map((project, index) => (
            <div 
              key={project.title}
              className="sticky"
              style={{
                top: `calc(8rem + ${index * 2}rem)`,
                zIndex: index + 1
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
