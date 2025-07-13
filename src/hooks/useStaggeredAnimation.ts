import { useEffect, useRef, RefObject } from 'react';

interface StaggeredAnimationOptions {
  threshold?: number;
  staggerDelay?: number;
}

export const useStaggeredAnimation = <T extends HTMLElement>(
  options: StaggeredAnimationOptions = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);
  const { threshold = 0.1, staggerDelay = 100 } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('visible');
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
      currentElement.classList.add('stagger-children');
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, staggerDelay]);

  return elementRef;
};