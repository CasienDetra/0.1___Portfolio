"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') || 'dark';
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b-[1pt] border-blue-600 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 blueglass ">
            <div className="container mx-auto px-4">
                <div className='flex h-16 items-center justify-between'>
                    {/* Title */}
                    <Link href="/" className="text-gray-300 text-2xl font-bold">
                        {'>'}. Yanouk
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex-grow flex justify-center space-x-4">
                        <Link href="/" className="text-gray-300 hover:text-blue-700 transition-all duration-300  px-2 py-1 hover:text-shadow-md" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-blue-700 transition-all duration-300 px-2 py-1 hover:text-shadow-md" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            About
                        </Link>
                        <Link href="#services" className="text-gray-300 hover:text-blue-700 transition-all duration-300 px-2 py-1 hover:text-shadow-md">
                            Services
                        </Link>
                        <Link href="#projects" className="text-gray-300 hover:text-blue-700 transition-all duration-300 px-2 py-1 hover:text-shadow-md">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-gray-300 hover:text-blue-700 transition-all duration-300 px-2 py-1 hover:text-shadow-md">
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons and Theme Toggle */}
                    <div className="flex items-center space-x-4">
                        <Link href="https://github.com/CasienDetra" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/50 rounded-full p-1 hover:text-shadow-md">
                            <FaGithub size={24} />
                        </Link>
                        <Link href="https://huggingface.co/Casien" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/50 rounded-full p-1 hover:text-shadow-md">
                            <SiHuggingface size={24} />
                        </Link>
                        <button onClick={toggleTheme} className="text-gray-300 hover:text-gray-500 focus:outline-none transition-all duration-300 hover:shadow-md hover:shadow-blue-500/50 rounded-full p-1 hover:text-shadow-md">
                            {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
