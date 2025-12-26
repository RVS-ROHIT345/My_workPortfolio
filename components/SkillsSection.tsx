
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    const [isCenterHovered, setIsCenterHovered] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const radius = isMobile ? 120 : 200;
    const ACCENT_COLOR = '#64ffda';

    if (isMobile) {
        return (
            <section id="skills" className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">My Tech Stack</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {SKILLS.map((skill, index) => (
                                <div key={index} className="bg-[#112240] p-4 rounded-lg shadow-md border border-[#233554] flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                                    <div className="w-12 h-12 mb-2 text-slate-300">{skill.icon}</div>
                                    <h3 className="font-semibold text-lg text-slate-200">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        );
    }

    return (
        <section id="skills" className="py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">My Tech Stack</h2>
                    <div className="relative h-[450px] w-full flex items-center justify-center">
                        {/* Central Node */}
                        <div 
                            className="z-20 absolute w-32 h-32 bg-[#112240] rounded-full flex items-center justify-center text-center shadow-lg border-2 cursor-pointer transition-all duration-300"
                            style={{ borderColor: isCenterHovered ? ACCENT_COLOR : '#233554' }}
                            onMouseEnter={() => setIsCenterHovered(true)}
                            onMouseLeave={() => setIsCenterHovered(false)}
                        >
                            <span className="font-semibold text-slate-200">Core Skills</span>
                        </div>

                        {/* Lines */}
                        {SKILLS.map((_, i) => {
                            const angle = i * (360 / SKILLS.length);
                            const isLineActive = isCenterHovered || hoveredSkill === i;
                            return (
                                <div
                                    key={`line-${i}`}
                                    className="absolute top-1/2 left-1/2 h-px transition-all duration-300 ease-out"
                                    style={{
                                        width: `${radius}px`,
                                        transformOrigin: '0% 50%',
                                        transform: `rotate(${angle}deg)`,
                                        zIndex: isLineActive ? 1 : 0,
                                        backgroundColor: isLineActive ? ACCENT_COLOR : '#233554'
                                    }}
                                />
                            );
                        })}

                        {/* Skill Nodes */}
                        {SKILLS.map((skill, i) => {
                            const angleRad = (i * (360 / SKILLS.length) * Math.PI) / 180;
                            const x = radius * Math.cos(angleRad);
                            const y = radius * Math.sin(angleRad);
                            const isSkillActive = hoveredSkill === i;
                            
                            return (
                                <div 
                                    key={skill.name} 
                                    className="absolute z-10 top-1/2 left-1/2" 
                                    style={{ transform: `translate(${x}px, ${y}px)` }}
                                    onMouseEnter={() => setHoveredSkill(i)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <div 
                                      className="relative z-20 w-24 h-24 bg-[#112240] rounded-full flex flex-col items-center justify-center p-2 text-center shadow-md border cursor-pointer transition-all duration-300"
                                      style={{ transform: 'translate(-50%, -50%)', borderColor: isSkillActive ? ACCENT_COLOR : '#233554', boxShadow: isSkillActive ? `0 0 15px ${ACCENT_COLOR}60` : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                                    >
                                        <div className={`w-10 h-10 mb-1 transition-colors duration-300 ${isSkillActive ? `text-[${ACCENT_COLOR}]` : 'text-slate-300'}`}>{skill.icon}</div>
                                        <h3 className="text-base font-semibold text-slate-300">{skill.name}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default SkillsSection;
