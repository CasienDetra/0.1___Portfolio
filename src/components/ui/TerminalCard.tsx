import React, { useRef, useEffect } from 'react';
import { CommitsGridDemo } from '@/components/demo/commits-grid-demo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TerminalCardProps {
  name: string;
  role: string;
  mission: string;
  achievements: string[];
}

const TerminalCard: React.FC<TerminalCardProps> = ({ name, role, mission, achievements }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        Array.from((textRef.current as HTMLElement).querySelectorAll('.animate-text')),
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top bottom',
            end: 'bottom 20%',
            toggleActions: 'play none none play',
          },
        }
      );
    }
  }, [name, role, mission, achievements]);

  return (
    <div className="bg-[#020817] text-white font-mono p-6 rounded-lg shadow-lg max-w-2xl w-full border border-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-500">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-400 ml-4 animate-text">~/yanouk-portfolio</span>
      </div>

      <div className="mb-4" ref={textRef}>
        <p className="text-green-400 animate-text">{'>'}_ $ <span className="text-white animate-text">whoami</span></p>
        <p className="text-blue-400 text-3xl font-bold animate-text">{name}</p>
      </div>

      <div className="mb-4">
        <p className="text-green-400 animate-text">{'>'}_ $ <span className="text-white animate-text">echo $ROLE</span></p>

        <p className="text-white text-xl animate-text">{role}</p>
      </div>

      <div className="mb-4">
        <p className="text-green-400 animate-text">$ <span className="text-white animate-text">cat mission.txt</span></p>
        <p className="text-white animate-text">{mission}</p>
      </div>

      <div className="mb-4">
        <p className="text-green-400 animate-text">$ <span className="text-white animate-text">ls achievements/</span></p>
        <p className="text-white animate-text">{achievements.join(' ')}</p>
      </div>

      <div className="mb-4">
        <p className="text-green-400 animate-text">$ <span className="text-white animate-text">cat commits-grid</span></p>
        <CommitsGridDemo className='border-1' />
      </div>
    </div>
  );
};

export default TerminalCard;
