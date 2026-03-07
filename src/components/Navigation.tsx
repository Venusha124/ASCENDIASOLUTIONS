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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2 md:py-4" : "py-4 md:py-8"
                }`}
        >
            <div className={`section-container relative z-10 flex justify-center transition-all duration-500`}>
                <div
                    className={`glass rounded-full pr-6 pl-2 py-2 md:py-3 flex items-center justify-between w-full transition-all duration-500 ${scrolled ? "bg-black/60 shadow-2xl" : "bg-transparent"
                        }`}
                >
                    {/* Logo & Availability */}
                    <div className="flex items-center space-x-6">
                        <Magnetic>
                            <Link href="/" className="text-2xl font-bold tracking-tighter pl-4">
                                ASCENDIA<span className="text-accent text-[6px] align-top ml-1">TM</span>
                            </Link>
                        </Magnetic>
                        <div className="hidden lg:flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-[12px] font-bold uppercase tracking-wider text-white/40">Available 24/7</span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group block px-2 py-1"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </Magnetic>
                        ))}
                        <Magnetic>
                            <button
                                onClick={openChat}
                                className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 ml-4"
                            >
                                Let&apos;s Talk
                            </button>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        <div className="text-white">
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-[30px] md:hidden overflow-y-auto"
                    >
                        {/* Close Button Inside Menu */}
                        <div className="flex justify-end p-8 pt-12">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10 transition-all duration-300"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Close</span>
                                <div className="text-white">
                                    <X size={24} />
                                </div>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-10 py-20 px-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-5xl font-bold tracking-tighter hover:text-accent transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="pt-8"
                            >
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openChat();
                                    }}
                                    className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-95"
                                >
                                    Let&apos;s Talk
                                </button>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Watermark */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none select-none">
                            <h2 className="text-6xl font-bold tracking-tighter">ASCENDIA</h2>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
