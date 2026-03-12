import { useState, useEffect } from 'react';

const BREAKPOINTS = {
  mobile: 0,
  tablet: 640,
  laptop: 1024,
  desktop: 1440,
};

/**
 * useMediaQuery — Returns the current breakpoint name and boolean helpers.
 *
 * Usage:
 *   const { breakpoint, isMobile, isTablet, isLaptop, isDesktop, isAboveMobile } = useMediaQuery();
 */
export default function useMediaQuery() {
  const getBreakpoint = () => {
    const w = window.innerWidth;
    if (w >= BREAKPOINTS.desktop) return 'desktop';
    if (w >= BREAKPOINTS.laptop) return 'laptop';
    if (w >= BREAKPOINTS.tablet) return 'tablet';
    return 'mobile';
  };

  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  useEffect(() => {
    let rafId;
    const handleResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setBreakpoint(getBreakpoint());
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isLaptop: breakpoint === 'laptop',
    isDesktop: breakpoint === 'desktop',
    isAboveMobile: breakpoint !== 'mobile',
    isAboveTablet: breakpoint === 'laptop' || breakpoint === 'desktop',
  };
}
