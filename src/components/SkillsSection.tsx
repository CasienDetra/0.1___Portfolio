"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import 'swiper/css';
import allSkills from '../data/skills.json';

const SkillsSection: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        Array.from((sectionRef.current as HTMLElement).querySelectorAll('.animate-text')),
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom 20%',
            toggleActions: 'play none reverse none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 flex items-center justify-center">
          <span className="text-blue-500 animate-text">~/</span><span className="animate-text">skills</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 animate-text">Technologies I work with</p>

        <div className="w-full mb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 1, // Set a very small delay for continuous effect
              disableOnInteraction: false,
              reverseDirection: false,
              pauseOnMouseEnter: false, // Ensure it doesn't pause on mouse enter
            }}
            speed={5000} // Adjust speed for continuous scroll
            loop={true}
            freeMode={true}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="mySwiper"
          >
            {allSkills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-4 h-32 transform transition-transform duration-300 hover:scale-140 hover:translate-y-[-10px] animate-text">
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon.split('-')[1]}/${skill.icon.split('-')[1]}-original.svg`} 
                    alt={`${skill.name} icon`} 
                    className="h-12 w-12 mb-2 animate-text" 
                  />
                  
            
          
                  <span className="text-sm font-medium text-zinc-100 text-center animate-text">{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
