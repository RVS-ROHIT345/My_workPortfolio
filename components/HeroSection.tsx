
import React, { Suspense, lazy } from 'react';
import AnimatedSection from './AnimatedSection';

// Lazy load the heavy 3D background component to improve initial load performance
const LiquidEther = lazy(() => import('./LiquidEther'));

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#112240] rounded-full flex items-center justify-center text-[#ccd6f6] hover:bg-[#233554] hover:text-[#64ffda] transition-all duration-300 pointer-events-auto">
        {children}
    </a>
);

const HeroSection: React.FC = () => {
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Fixed header offset for smooth scrolling
          const headerOffset = 100; 
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };

    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-[#0a192f]" />}>
            <LiquidEther
              colors={["#112240", "#2D64FC", "#64ffda"]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </Suspense>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 pointer-events-none">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left">
              <AnimatedSection animation="fade-in" delay="delay-0">
                <div className="inline-flex items-center bg-[#112240] border border-[#233554] rounded-full px-4 py-1.5 text-sm mb-6 text-slate-200">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                  Available for Opportunities
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-in-up" delay="delay-100">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">
                  I'm Venkata Rohit Ramena.
                  <br />I Code <span className="text-[#FC9904]">*</span> Create
                  <br />
                  <span className="text-[#FC9904]">*</span> Innovate.
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="slide-in-up" delay="delay-200">
                <p className="mt-6 max-w-lg mx-auto md:mx-0 text-lg md:text-xl text-slate-300">
                  Strategic Software Developer with 3+ years experience
                  engineering AI-driven web applications and scalable
                  microservices.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slide-in-up" delay="delay-300">
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                  <a
                    href="#projects"
                    onClick={handleNavClick}
                    className="btn-hover-slide my-work-btn px-6 py-3 font-bold rounded-lg pointer-events-auto hover:text-white"
                  >
                    View Projects
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1sRrcbYVTU5_K3ioIO4GKI0Te0zFLDWbb/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hover-slide resume-btn px-6 py-3 font-semibold rounded-lg pointer-events-auto hover:text-white"
                  >
                    Resume
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Avatar */}
            <AnimatedSection
              animation="fade-in"
              delay="delay-200"
              className="flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-300 via-transparent to-teal-300 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute inset-0 border-[10px] border-teal-300/30 rounded-full"></div>
                <div className="absolute inset-4 bg-[#0a192f] rounded-full overflow-hidden">
                  <img
                    src="https://em-content.zobj.net/source/apple/354/man-technologist_1f468-200d-1f4bb.png"
                    alt="Satya Rohit"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 flex justify-center items-center space-x-3 p-2 bg-[#112240]/50 backdrop-blur-sm rounded-full">
                  <SocialIcon href="https://github.com/RVS-ROHIT345">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </SocialIcon>

                  <SocialIcon href="https://www.linkedin.com/in/venkata-satya-rohit-ramena/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1-.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <a
          href="#about"
          onClick={handleNavClick}
          className="group absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-[#FC9904] flex items-center justify-center overflow-hidden pointer-events-auto"
          aria-label="Go to About section"
        >
          <span className="absolute inset-0 bg-[#FC9904] -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <svg
            className="relative w-6 h-6 text-[#FC9904] group-hover:text-[#0a192f] transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>
    );
};

export default HeroSection;
