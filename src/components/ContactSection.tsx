"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineMail, MdLocationOn, MdOutlineAccessTime, MdSend } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo, no actual email was sent.)');
        setFormData({
            name: '',
            email: '',
            projectType: '',
            message: '',
        });
    };

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
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-00 text-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-2 flex items-center justify-center">
                    <span className="text-blue-500 animate-text">~/</span><span className="animate-text">contact</span>
                </h2>
                <p className="text-lg text-gray-400 mb-12 animate-text">Let's build something amazing together</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                    {/* Get In Touch Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 animate-text">Get In Touch</h3>
                        <p className="text-gray-400 mb-8 animate-text">
                            I'm always interested in new opportunities and exciting projects. Whether you need a full-stack web
                            application, mobile app, or just want to chat about technology, feel free to reach out!
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="text-blue-500 text-2xl mr-4 animate-text">
                                    <MdOutlineMail />
                                </div>
                                <div>
                                    <p className="font-semibold text-white animate-text">Email</p>
                                    <p className="text-gray-400 animate-text">nuk385916@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-blue-500 text-2xl mr-4 animate-text">
                                    <MdLocationOn />
                                </div>
                                <div>
                                    <p className="font-semibold text-white animate-text">Location</p>
                                    <p className="text-gray-400 animate-text">Phnom Penh, Cambodia</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="text-blue-500 text-2xl mr-4 animate-text">
                                    <MdOutlineAccessTime />
                                </div>
                                <div>
                                    <p className="font-semibold text-white animate-text">Response Time</p>
                                    <p className="text-gray-400 animate-text">Usually responds within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Send a Message Form */}
                    <div className="bg-[#0A1222] border border-gray-700 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-6 animate-text">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2 animate-text">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="shadow appearance-none border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#0A1222] animate-text"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2 animate-text">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="shadow appearance-none border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#0A1222] animate-text"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="projectType" className="block text-gray-300 text-sm font-bold mb-2 animate-text">
                                    Project Type
                                </label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="shadow border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#0A1222] animate-text"
                                >
                                    <option value="">Select project type</option>
                                    <option value="fullstack">Full-Stack Web Development</option>
                                    <option value="mobile">Mobile App Development</option>
                                    <option value="api">API Development & Integration</option>
                                    <option value="review">Code Review & Optimization</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2 animate-text">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className="shadow appearance-none border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-[#0A1222] animate-text"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 animate-text"
                            >
                                <MdSend className="mr-2 animate-text" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
