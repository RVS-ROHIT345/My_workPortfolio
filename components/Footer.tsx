
import React from 'react';

const Footer: React.FC<{ onBackToTopClick: () => void }> = ({ onBackToTopClick }) => {
    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 100; 
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };

    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Publication'];

    return (
        <footer className="relative bg-[#0a192f] py-12 border-t border-[#233554] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Vibrant Radial Gradient Glow: Deep Blue core -> Warm Amber outer */}
                <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: 'radial-gradient(circle at 50% 100%, rgba(45, 100, 252, 0.95) 0%, rgba(45, 100, 252, 0.5) 30%, rgba(245, 158, 11, 0.4) 60%, transparent 85%)',
                    }}
                />
                
                {/* Noise Texture Overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Logo */}
                    <a href="#home" onClick={handleNavClick} className="flex items-center space-x-2 text-2xl font-bold">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#64ffda]">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V6.05263C14.0159 6.21319 14.9649 6.58554 15.7915 7.1359L16.8528 6.55279C17.34 6.28723 17.9425 6.46053 18.208 6.94778L19.5 9.05222C19.7656 9.53947 19.5923 10.142 19.105 10.4075L18.0438 10.9906C18.3289 11.5351 18.5 12.1398 18.5 12.75C18.5 13.3602 18.3289 13.9649 18.0438 14.5094L19.105 15.0925C19.5923 15.358 19.7656 15.9605 19.5 16.4478L18.208 18.5522C17.9425 19.0395 17.34 19.2128 16.8528 18.9472L15.7915 18.3641C14.9649 18.9145 14.0159 19.2868 13 19.4474V20.5C13 21.0523 12.5523 21.5 12 21.5C11.4477 21.5 11 21.0523 11 20.5V19.4474C9.98413 19.2868 9.03509 18.9145 8.20854 18.3641L7.14721 18.9472C6.66001 19.2128 6.05753 19.0395 5.79197 18.5522L4.5 16.4478C4.23444 15.9605 4.40774 15.358 4.89499 15.0925L6.01255 14.4815C5.69707 13.9456 5.5 13.3523 5.5 12.75C5.5 12.1477 5.69707 11.5544 6.01255 11.0185L4.89499 10.4075C4.40774 10.142 4.23444 9.53947 4.5 9.05222L5.79197 6.94778C6.05753 6.46053 6.66001 6.28723 7.14721 6.55279L8.20854 7.1359C9.03509 6.58554 9.98413 6.21319 11 6.05263V5C11 4.44772 11.4477 4 12 4ZM12 9.75C10.3431 9.75 9 11.1033 9 12.75C9 14.3967 10.3431 15.75 12 15.75C13.6569 15.75 15 14.3967 15 12.75C15 11.1033 13.6569 9.75 12 9.75Z" fill="currentColor"/>
                        </svg>
                        <span className="text-slate-100">Dev<span className="text-[#64ffda]">Nest</span></span>
                    </a>

                    {/* Center: Nav Links */}
                    <nav className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {navItems.map(item => (
                            <a 
                                key={item} 
                                href={`#${item.toLowerCase()}`} 
                                onClick={handleNavClick}
                                className="text-base font-medium text-slate-300 hover:text-[#64ffda] transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Back to Top */}
                    <button 
                        onClick={onBackToTopClick}
                        className="group w-12 h-12 bg-[#64ffda] rounded-full flex items-center justify-center text-[#0a192f] hover:bg-opacity-90 transition-colors shadow-lg shadow-blue-500/20"
                        aria-label="Back to top"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Venkata Satya Rohit Ramena. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
