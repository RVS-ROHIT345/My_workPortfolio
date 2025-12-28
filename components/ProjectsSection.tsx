

// ProjectSlider: Show one project at a time with smooth transition


const ProjectSlider: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(700);
  const [isCompact, setIsCompact] = useState(false);

  // Responsive card width
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1536) return 900;
      if (window.innerWidth >= 1280) return 800;
      if (window.innerWidth >= 1024) return 700;
      if (window.innerWidth >= 640) return 540;
      return Math.min(window.innerWidth * 0.92, 420);
    }
    return 420;
  };
  useEffect(() => {
    const updateWidth = () => setCardWidth(getCardWidth());
    const updateCompact = () => {
      if (typeof window !== 'undefined') {
        setIsCompact(window.innerWidth < 1024);
      }
    };
    const handleResize = () => {
      updateWidth();
      updateCompact();
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (current < projects.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const handleNextLoop = () => {
    if (projects.length <= 1) return;
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex flex-col lg:flex-row items-center justify-center w-full"
        style={{ minHeight: isCompact ? undefined : 600 }}
      >
        {/* Left Arrow */}
        <div
          className="hidden lg:flex"
          style={{ width: '3.5rem', justifyContent: 'center', alignItems: 'center', height: 600, marginRight: '2rem' }}
        >
          <button
            onClick={handlePrev}
            className="z-10 bg-[#233554] text-slate-200 p-3 rounded-full shadow-lg hover:bg-[#2D64FC] transition disabled:opacity-40"
            disabled={current === 0}
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
        </div>
        {/* Card Slider */}
        <div
          className="overflow-hidden"
          style={{ minHeight: isCompact ? undefined : 600, width: cardWidth, maxWidth: '92vw' }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${projects.length * cardWidth}px`,
              transform: `translateX(-${current * cardWidth}px)`
            }}
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-shrink-0 flex-grow-0"
                style={{ width: cardWidth, maxWidth: '95vw', minWidth: cardWidth }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        <div
          className="hidden lg:flex"
          style={{ width: '3.5rem', justifyContent: 'center', alignItems: 'center', height: 600, marginLeft: '2rem' }}
        >
          <button
            onClick={handleNext}
            className="z-10 bg-[#233554] text-slate-200 p-3 rounded-full shadow-lg hover:bg-[#2D64FC] transition disabled:opacity-40"
            disabled={current === projects.length - 1}
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      {/* Bottom Arrow (Mobile/Tablet) */}
      <div className="lg:hidden mt-6">
        <button
          onClick={handleNextLoop}
          className="z-10 bg-[#233554] text-slate-200 p-3 rounded-full shadow-lg hover:bg-[#2D64FC] transition"
          aria-label="Next project"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#2D64FC]' : 'bg-[#233554]'} border-2 border-[#2D64FC] transition`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to project ${idx + 1}`}
            disabled={current === idx}
          />
        ))}
      </div>
    </div>
  );
};

import React, { useRef, useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        // Reduced padding, gap, and min-height for a more compact card
        <div className="bg-[#112240] p-6 md:p-8 rounded-xl shadow-lg border-4 border-[#2D64FC] flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch h-[900px] sm:h-[960px] md:h-[840px] lg:h-[600px] overflow-hidden">
            {/* Left Col: Text Content */}
            <div className="flex flex-col h-full">
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
            <div className="flex flex-col gap-5 sm:gap-6 mt-auto md:mt-0">
                {/* Added fixed height (h-52) to ensure consistent image rendering */}
                <div className="group rounded-xl overflow-hidden shadow-md border-2 border-[#233554] h-28 min-[321px]:h-32 sm:h-40 md:h-44 lg:h-52">
                    <img src={project.image1} alt={`${project.title} screenshot 1`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="group rounded-xl overflow-hidden shadow-md h-28 min-[321px]:h-32 sm:h-40 md:h-44 lg:h-52">
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
        {/* Project Slider Effect */}
        <ProjectSlider projects={PROJECTS} />
      </div>
    </section>
  );
};

export default ProjectsSection;
