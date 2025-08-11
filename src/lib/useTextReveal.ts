"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useTextReveal = (selector: string, options?: ScrollTrigger.Vars) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(selector, {
      opacity: 0,
      filter: 'blur(10px)',
      y: 20,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        ...options,
      },
    });
  }, [selector, options]);

  return ref;
};

export default useTextReveal;
