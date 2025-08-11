"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // loads tsparticles-slim
import { useEffect, useState } from "react";

import TerminalCard from '@/components/ui/TerminalCard';

const HeroSection = () => {
    const [particlesLoaded, setParticlesLoaded] = useState(false);

    useEffect(() => {
        const init = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setParticlesLoaded(true);
        };
        init();
    }, []);

    if (!particlesLoaded) {
        return null; // Or a loading spinner
    }

    return (
        <div id="hero" className="relative w-full h-screen overflow-hidden">
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: "#020817", // Set background to the dark color directly
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ADD8E6", // Light blue particles for contrast
                        },
                        links: {
                            color: "#ADD8E6", // Light blue links for contrast
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 6 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            {}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-0">
                <TerminalCard
                    name="Yanouk"
                    role="Full-Stack Developer & Open Source Contributor"
                    mission="Building fast, maintainable solutions across the stack"
                    achievements={["college-student.txt", "freelancer.txt", "neovim-enthusiast.txt", "open-source-contributor.txt"]}
                />
            </div>

        </div>
    );
};

export default HeroSection;
