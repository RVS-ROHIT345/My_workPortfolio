
import React from 'react';
import { EDUCATIONS } from '../constants';
import AnimatedSection from './AnimatedSection';

const EducationSection: React.FC = () => {
    return (
        <section id="education" className="py-16 md:py-24 bg-[#112240]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">
                        Education
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {EDUCATIONS.map((edu, index) => (
                           <AnimatedSection key={index} animation="slide-in-up" delay={`delay-${index * 100}`}>
                                <div className="card-container h-96 w-full">
                                    <div className="card relative h-full w-full">
                                        {/* Card Front */}
                                        <div className="card-front absolute h-full w-full rounded-lg overflow-hidden shadow-lg border border-[#233554]">
                                            <img src={edu.imageUrl} alt={edu.institution} className="w-full h-full object-cover"/>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                                                <h3 className="text-3xl font-bold text-slate-100">{edu.degree}</h3>
                                                <p className="text-lg text-slate-200">{edu.institution}</p>
                                                <p className="text-base text-slate-300 mt-1">{edu.period}</p>
                                            </div>
                                        </div>
                                        {/* Card Back */}
                                        <div className="card-back absolute h-full w-full bg-[#112240] rounded-lg shadow-lg p-6 border border-[#233554] flex flex-col">
                                            <h4 className="text-2xl font-semibold text-slate-200 mb-4">Relevant Courses</h4>
                                             <div className="flex flex-wrap gap-2">
                                                {edu.courses.map(course => 
                                                  <div key={course} className="bg-[#233554] text-slate-200 text-base font-medium px-3 py-1 rounded-full">
                                                    {course}
                                                  </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default EducationSection;
