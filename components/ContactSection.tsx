
import React from 'react';
import AnimatedSection from './AnimatedSection';

const SocialIcon = ({ href, children }: { href: string; children?: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group/icon relative flex items-center justify-center w-12 h-12 bg-[#233554] rounded-full text-slate-300 transition-all duration-300 hover:scale-110 hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-[0_0_15px_rgba(100,255,218,0.4)]"
    >
        {children}
    </a>
);

const ContactInfoCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
    <div className="group relative bg-[#112240] p-4 sm:p-6 rounded-xl shadow-lg border border-[#233554] flex items-center space-x-4 sm:space-x-5 transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda]/50 hover:shadow-[0_10px_30px_-10px_rgba(100,255,218,0.2)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#64ffda]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
        
        <div className="relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#233554] rounded-full flex items-center justify-center text-slate-200 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#64ffda] group-hover:text-[#0a192f] group-hover:shadow-[0_0_15px_rgba(100,255,218,0.4)]">
            <div className="scale-90 sm:scale-100">
                {icon}
            </div>
        </div>
        <div className="relative z-10 flex-1 min-w-0">
            <h4 className="text-lg sm:text-xl font-bold text-slate-200 group-hover:text-[#64ffda] transition-colors duration-300 truncate sm:overflow-visible sm:whitespace-normal">{title}</h4>
            <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-200 transition-colors duration-300 break-all sm:break-words">{value}</p>
        </div>
    </div>
);

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="relative py-16 md:py-24 bg-[#0a192f] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-[float_7s_infinite_ease-in-out]"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-[float_7s_infinite_ease-in-out_2s]"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 pb-2">Get In Touch</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
                            I'm always looking for interesting projects and opportunities to innovate. Feel free to reach out via email or connect with me on social media.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="group relative bg-[#112240] p-8 rounded-xl shadow-lg border border-[#233554] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#64ffda]/50 hover:shadow-[0_10px_30px_-10px_rgba(100,255,218,0.2)]">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-[#64ffda] transition-colors duration-300">Let's Connect</h3>
                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    Whether you're looking for a Full-Stack Engineer, an AI Specialist, or just want to talk about the future of tech, I'm here.
                                </p>
                            </div>
                            <div className="flex space-x-4">
                               <SocialIcon href="https://github.com/RVS-ROHIT345">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                               </SocialIcon>
                               <SocialIcon href="https://www.linkedin.com/in/venkata-satya-rohit-ramena/">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1-.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                               </SocialIcon>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <ContactInfoCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/></svg>}
                                title="Email"
                                value="rohitkumarrohit817@gmail.com"
                            />
                             <ContactInfoCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.28 1.465l-2.135 2.135a11.945 11.945 0 0 0 6.062 6.062l2.135-2.135a1.454 1.454 0 0 1 1.466.281l2.296 1.756a1.745 1.745 0 0 1 .163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>}
                                title="Phone"
                                value="+1 (571) 326-6787"
                            />
                             <ContactInfoCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>}
                                title="Location"
                                value="Fairfax, VA, USA"
                            />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactSection;
