
import { useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  animation?: string;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);
  const { threshold = 0.1, delay = 0, animation = 'animate-fade-in-scroll' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target.classList.contains('animate-fade-in-scroll')) {
                entry.target.classList.add('visible');
              } else if (entry.target.classList.contains('animate-slide-in-right')) {
                entry.target.classList.add('visible');
              } else if (entry.target.classList.contains('animate-slide-in-left')) {
                entry.target.classList.add('visible');
              } else {
                // For any other animation class
                entry.target.classList.add('visible');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.classList.add(animation);
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, animation]);

  return elementRef;
};
