"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./animations/Magnetic";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Marquee */}
            <div className="w-full bg-[#C6A87C] py-2 overflow-hidden flex items-center relative z-[60]">
                <div className="whitespace-nowrap flex items-center animate-marquee w-max">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center text-[#050505] text-[9px] font-bold uppercase tracking-[0.4em] mx-4">
                            <span>Benchmark of Excellence</span>
                            <span className="mx-8">•</span>
                            <span>Global Design Optimized</span>
                            <span className="mx-8">•</span>
                            <span>Sovereign Quality Guaranteed</span>
                            <span className="mx-8">•</span>
                        </div>
                    ))}
                </div>
            </div>

            <nav
                className={`fixed top-[32px] left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${scrolled ? "py-4 bg-[#050505]/90 backdrop-blur-md" : "py-6 bg-transparent"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex items-center justify-between transition-all duration-500">
                    {/* Logo */}
                    <div className="flex flex-col items-start">
                        <Magnetic>
                            <Link href="/" className="text-3xl md:text-4xl font-serif text-foreground leading-none">
                                ASCENDIA
                            </Link>
                        </Magnetic>
                        <span className="text-[8px] font-bold uppercase tracking-[0.6em] text-accent mt-2 ml-1">Sovereign Collection</span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70 hover:text-accent transition-colors relative group block"
                                >
                                    {link.name}
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex items-center text-foreground hover:text-accent transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] mr-4">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Fullscreen Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: "-100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: "-100%" }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="fixed inset-0 w-full h-screen bg-[#050505] z-40 lg:hidden flex flex-col justify-center items-center overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 w-full">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden">
                                        <motion.div
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-5xl sm:text-6xl font-serif font-normal text-foreground hover:text-accent transition-colors hover:italic"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Mobile Footer Links */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-12 w-full flex justify-center space-x-8 text-[9px] uppercase tracking-[0.3em] text-accent/60"
                            >
                                <a href="mailto:ascendiasolutions@proton.me">Email</a>
                                <a href="https://www.instagram.com/ascendiasolutions" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
