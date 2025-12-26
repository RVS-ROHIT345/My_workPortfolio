
import React from 'react';
import { EXPERIENCES } from '../constants';
import AnimatedSection from './AnimatedSection';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">
            My Professional Journey
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-3.5 sm:left-1/2 top-0 h-full w-0.5 bg-[#233554] -translate-x-1/2"></div>
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className={`relative mb-12 flex items-center w-full ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                  {/* The dot is positioned relative to the timeline bar, not the card content */}
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#64ffda] rounded-full border-4 border-[#112240] z-10
                                  left-3.5 -translate-x-1/2 
                                  sm:left-1/2 sm:-translate-x-1/2">
                  </div>
                  
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <AnimatedSection animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}>
                        <div className="bg-[#112240] p-6 rounded-lg shadow-md border border-[#233554] ml-12 sm:ml-0">
                             <h3 className="text-2xl md:text-3xl font-bold text-slate-100">{exp.role}</h3>
                            <p className="text-[#64ffda] font-semibold text-lg mb-1">{exp.company}</p>
                            <time className="block mb-3 text-base font-normal text-slate-400">{exp.period} | {exp.location}</time>
                            <ul className="list-disc list-inside text-slate-300 text-lg space-y-1 text-left">
                              {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                              ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                  </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExperienceSection;
