import { useEffect, useRef, RefObject } from 'react';

interface PageLoadAnimationOptions {
  delay?: number;
  animation?: string;
}

export const usePageLoadAnimation = <T extends HTMLElement>(
  options: PageLoadAnimationOptions = {}
): RefObject<T> => {
  const elementRef = useRef<T>(null);
  const { delay = 0, animation = 'animate-page-load' } = options;

  useEffect(() => {
    const currentElement = elementRef.current;
    if (currentElement) {
      // Set initial hidden state
      currentElement.style.opacity = '0';
      
      setTimeout(() => {
        currentElement.classList.add(animation);
        currentElement.style.opacity = '';
      }, delay);
    }
  }, [delay, animation]);

  return elementRef;
};