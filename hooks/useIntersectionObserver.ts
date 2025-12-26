
import { useState, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = true,
  }: Args,
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef?.current; 
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (freezeOnceVisible) {
            observer.unobserve(node);
          }
        } else {
            if (!freezeOnceVisible) {
                setIsVisible(false);
            }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

  return isVisible;
}

export default useIntersectionObserver;
