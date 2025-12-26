
import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';
import AnimatedSection from './AnimatedSection';

const PublicationSection: React.FC = () => {
    // Fix: Use an index to track which publication is expanded, rather than a single boolean for all.
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="publication" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">Publications</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {PUBLICATIONS.map((pub, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <div key={index} className="bg-[#112240] p-6 rounded-lg shadow-md border border-[#233554]">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-1">
                                        {pub.title}
                                    </h3>
                                    <p className="text-slate-400 text-base mb-4">{pub.journal} - {pub.date}</p>
                                    
                                    {isExpanded && (
                                        <p className="text-slate-300 text-lg leading-relaxed mb-4">
                                            {pub.abstract}
                                        </p>
                                    )}

                                    <button 
                                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                        className="font-semibold text-[#64ffda] hover:text-opacity-90 transition-colors flex items-center"
                                    >
                                        {isExpanded ? 'Show less' : 'Show publication'}
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ml-1 transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default PublicationSection;
