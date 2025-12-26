
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#112240]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading for all views including tablet and desktop */}
        <AnimatedSection animation="fade-in" className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">
            About Me
          </h2>
        </AnimatedSection>

        {/* Content grid: Row layout on tablet (md) and up, column on mobile */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection animation="slide-in-left">
            <div className="bg-[#112240] p-8 rounded-lg shadow-lg border border-[#233554]">
                <h3 className="text-2xl font-semibold text-slate-200 mb-4">My Journey</h3>
                <div className="space-y-4 text-slate-300 text-base md:text-lg">
                    <p>
                        I am a detail-oriented Software Developer with 3+ years of experience designing and deploying 
                        AI-powered and full-stack web applications. My journey spans enterprise, academic, and startup 
                        environments, giving me a versatile perspective on problem-solving.
                    </p>
                    <p>
                        Proficient in Java, Spring Boot, React, and Python, I have a deep passion for cloud-native 
                        development (Azure/AWS) and LLM-driven systems. I specialize in integrating multi-agent AI 
                        frameworks to automate complex decision-making processes and enhance user experiences.
                    </p>
                    <p>
                        Beyond code, I value craftsmanship, technical leadership, and continuous innovation. I strive 
                        to transform business challenges into scalable software outcomes that truly move the needle.
                    </p>
                </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-in-right">
            <div className="relative w-full max-w-sm mx-auto h-96">
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#64ffda]/10 rounded-full -translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#64ffda]/10 rounded-full translate-x-8 translate-y-8"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-[#E79302]">
                    <img 
                        src="public/images/rohit_about.jpg"
                        alt="Venkata Satya Rohit Ramena" 
                        className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
