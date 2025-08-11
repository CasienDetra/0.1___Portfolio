"use client";

import React, { useRef, useEffect } from "react";
import allProjects from "../data/projects.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        Array.from(
          (sectionRef.current as HTMLElement).querySelectorAll(".animate-text"),
        ),
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "bounce.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom 20%",
            toggleActions: "play none none none",
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1222] text-white"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 flex items-center justify-center">
          <span className="text-blue-500 animate-text">~/</span>
          <span className="animate-text">projects</span>
        </h2>
        <p className="text-lg text-gray-400 mb-12 animate-text">
          Featured work and side projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {allProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-120 animate-text"
              style={{ borderWidth: "0.1px" }}
            >
              <div className="w-full h-58 bg-black flex items-center justify-center">
                {/* Project preview */}
                {project.title === "Khmermovieflix" ? (
                  <img
                    src={project.image}
                    alt={`${project.title} image`}
                    className="object-cover w-full h-full animate-text"
                  />
                ) : (
                  <iframe
                    src={project.link}
                    title={`${project.title} preview`}
                    className="w-full h-full border-0 animate-text"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                    scrolling="no"
                  ></iframe>
                )}
              </div>
              <div className="p-6 text-left">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white animate-text">
                    {project.title}
                  </h3>
                  <span className="bg-black border border-white text-white text-xs font-semibold px-2.5 py-0.5 rounded-md animate-text">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 animate-text">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 text-xs font-medium px-2 py-1 rounded-full animate-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
