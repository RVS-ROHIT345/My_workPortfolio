import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

/*
  Tailwind JIT Safelist for CDN:
  Ensures these dynamically added classes are generated.
  
  Initial States:
  opacity-0 translate-y-10
  opacity-0 -translate-x-10
  opacity-0 translate-x-10
  opacity-0

  Final States:
  opacity-100 translate-y-0
  opacity-100 translate-x-0
  
  Delays:
  delay-0 delay-100 delay-200 delay-300 delay-400 delay-500
*/


interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-up' | 'slide-in-left' | 'slide-in-right';
  delay?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'slide-in-up', 
  delay = 'delay-100' 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade-in':
        return `transition-opacity duration-700 ${delay} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide-in-up':
        return `transition-all duration-700 ${delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
      case 'slide-in-left':
        return `transition-all duration-700 ${delay} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`;
      case 'slide-in-right':
        return `transition-all duration-700 ${delay} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`;
      default:
        return '';
    }
  };

  return (
    <div ref={ref} className={`${className} ${getAnimationClasses()}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;