"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./animations/Magnetic";
import { useChat } from "@/context/ChatContext";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation() {
    const { openChat } = useChat();
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
                <div className="whitespace-nowrap flex items-center animate-[marquee_20s_linear_infinite]">
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

                    {/* Action Button */}
                    <div className="hidden lg:flex">
                        <button
                            onClick={openChat}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-background bg-accent px-6 py-3 hover:bg-white transition-colors duration-300"
                        >
                            Let&apos;s Talk
                        </button>
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

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/5 lg:hidden overflow-hidden"
                        >
                            <div className="flex flex-col items-center justify-center space-y-8 py-16 px-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-8"
                                >
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            openChat();
                                        }}
                                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-background bg-accent px-8 py-4 hover:bg-white transition-colors duration-300"
                                    >
                                        Let&apos;s Talk
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
