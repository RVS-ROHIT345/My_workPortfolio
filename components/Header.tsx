import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // The header changes height on scroll. A fixed offset provides a consistent scroll-to point.
      const headerOffset = 100; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Publication'];

  const ContactButton: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => (
    <a
      href="#contact"
      onClick={handleNavClick}
      className={`
        blob-btn
        ${isMobile 
          ? 'py-3 px-5 mt-2' 
          : 'ml-2 py-3 px-5'
        }
        font-bold text-base
      `}
    >
      Contact me
      <span className="blob-btn__inner">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
          <span className="blob-btn__blob"></span>
        </span>
      </span>
    </a>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div 
        className={`transition-all duration-500 ease-in-out ${isScrolled ? 'w-full max-w-5xl mt-4' : 'w-full mt-0'}`}
      >
        <div 
          className={`
            mx-auto transition-all duration-500 ease-in-out flex items-center justify-between
            ${isScrolled 
              ? 'px-6 py-2 bg-[#2D64FC] rounded-full shadow-lg' 
              : 'px-4 sm:px-6 lg:px-8 py-6 bg-[#2D64FC]'
            }
          `}
        >
          <a href="#home" onClick={handleNavClick} className="flex items-center space-x-2 text-xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#64ffda]">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V6.05263C14.0159 6.21319 14.9649 6.58554 15.7915 7.1359L16.8528 6.55279C17.34 6.28723 17.9425 6.46053 18.208 6.94778L19.5 9.05222C19.7656 9.53947 19.5923 10.142 19.105 10.4075L18.0438 10.9906C18.3289 11.5351 18.5 12.1398 18.5 12.75C18.5 13.3602 18.3289 13.9649 18.0438 14.5094L19.105 15.0925C19.5923 15.358 19.7656 15.9605 19.5 16.4478L18.208 18.5522C17.9425 19.0395 17.34 19.2128 16.8528 18.9472L15.7915 18.3641C14.9649 18.9145 14.0159 19.2868 13 19.4474V20.5C13 21.0523 12.5523 21.5 12 21.5C11.4477 21.5 11 21.0523 11 20.5V19.4474C9.98413 19.2868 9.03509 18.9145 8.20854 18.3641L7.14721 18.9472C6.66001 19.2128 6.05753 19.0395 5.79197 18.5522L4.5 16.4478C4.23444 15.9605 4.40774 15.358 4.89499 15.0925L6.01255 14.4815C5.69707 13.9456 5.5 13.3523 5.5 12.75C5.5 12.1477 5.69707 11.5544 6.01255 11.0185L4.89499 10.4075C4.40774 10.142 4.23444 9.53947 4.5 9.05222L5.79197 6.94778C6.05753 6.46053 6.66001 6.28723 7.14721 6.55279L8.20854 7.1359C9.03509 6.58554 9.98413 6.21319 11 6.05263V5C11 4.44772 11.4477 4 12 4ZM12 9.75C10.3431 9.75 9 11.1033 9 12.75C9 14.3967 10.3431 15.75 12 15.75C13.6569 15.75 15 14.3967 15 12.75C15 11.1033 13.6569 9.75 12 9.75Z" fill="currentColor"/>
            </svg>
            <span className="text-slate-100">
                Dev<span className="text-[#64ffda]">Nest</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={handleNavClick}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-[#FC9904] rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
            <ContactButton />
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-white hover:bg-white/20 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 mx-4 p-4 bg-[#2D64FC] rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={handleNavClick}
                  className="px-4 py-2 text-base font-medium text-slate-200 hover:text-[#FC9904] hover:bg-white/20 rounded-md transition-colors"
                >
                  {item}
                </a>
              ))}
              <ContactButton isMobile={true} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;