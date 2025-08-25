import { useState, useEffect } from 'react';
import { throttle } from '../utils';

/**
 * Custom hook for scroll spy functionality
 * @param {string[]} sections - Array of section IDs to observe
 * @param {number} offset - Offset from top in pixels
 * @returns {string} - Currently active section ID
 */
export const useScrollSpy = (sections, offset = 100) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY + offset;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return activeSection;
};

/**
 * Custom hook to detect if user has scrolled
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean} - Whether user has scrolled past threshold
 */
export const useScrolled = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > threshold);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

/**
 * Custom hook for intersection observer
 * @param {Object} options - Intersection observer options
 * @returns {Array} - [ref, isIntersecting, entry]
 */
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
      ...options
    });

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options]);

  return [setRef, isIntersecting, entry];
};

export default useScrollSpy;