"use client";

import React, { useRef, useEffect } from 'react';
import { FaCode, FaMobileAlt, FaDatabase, FaSearch, FaCheckCircle, FaRegClock } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; features: string[] }> = ({
    icon,
    title,
    description,
    features,
}) => (
    <div className="bg-[#0A1222] border border-gray-700 rounded-lg p-6 text-left flex flex-col h-full">
        <div className="flex items-center mb-4">
            <div className="text-blue-500 text-3xl mr-3">{icon}</div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
        <div className="space-y-2">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>
    </div>
);

const ServicesSection: React.FC = () => {
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
        <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A1222] text-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-2 flex items-center justify-center">
                    <span className="text-blue-500 animate-text">~/</span><span className="animate-text">services</span>
                </h2>
                <p className="text-lg text-gray-400 mb-12 animate-text">Available for Freelance Projects</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <ServiceCard
                        icon={<FaCode className="animate-text" />}
                        title="Full-Stack Web Development"
                        description="Complete web applications using modern frameworks like Next.js, React, and Node.js with responsive design and optimal performance."
                        features={[
                            "React/Next.js Applications",
                            "API Development",
                            "Database Design",
                            "Responsive UI/UX",
                        ]}
                    />
                    <ServiceCard
                        icon={<FaMobileAlt className="animate-text" />}
                        title="Mobile App Development"
                        description="Cross-platform mobile applications using Flutter and React Native for iOS and Android with native performance."
                        features={[
                            "Flutter Development",
                            "React Native Apps",
                            "Cross-platform Solutions",
                            "App Store Deployment",
                        ]}
                    />
                    <ServiceCard
                        icon={<FaDatabase className="animate-text" />}
                        title="API Development & Integration"
                        description="RESTful APIs, third-party integrations, and backend services with proper authentication and documentation."
                        features={[
                            "REST API Design",
                            "Third-party Integrations",
                            "Authentication Systems",
                            "API Documentation",
                        ]}
                    />
                    <ServiceCard
                        icon={<FaSearch className="animate-text" />}
                        title="Code Review & Optimization"
                        description="Performance audits, code quality improvements, and technical consulting to enhance existing applications."
                        features={[
                            "Performance Optimization",
                            "Code Quality Review",
                            "Technical Consulting",
                            "Best Practices Implementation",
                        ]}
                    />
                </div>

                <div className="bg-[#0A1222] border border-gray-700 rounded-lg p-8 max-w-3xl mx-auto text-center">
                    <span className="inline-block bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-text">
                        Available for Projects
                    </span>
                    <h3 className="text-3xl font-bold mb-4 animate-text">Ready to Work Together?</h3>
                    <p className="text-gray-400 mb-4 animate-text">
                        I'm currently accepting new freelance projects and would love to help bring your ideas
                        to life. Let's discuss how we can work together.
                    </p>
                    <div className="flex items-center justify-center text-gray-400 text-sm mb-6 animate-text">
                        <FaRegClock className="mr-2 animate-text" />
                        Usually responds within 24 hours
                    </div>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 animate-text"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
