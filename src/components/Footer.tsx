"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Instagram, Globe, ArrowUpRight } from "lucide-react";
import Magnetic from "./animations/Magnetic";
import { useChat } from "@/context/ChatContext";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { openChat } = useChat();
    const footerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer ref={footerRef} className="relative bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(198,168,124,0.08),transparent_70%)] pointer-events-none z-0" />
            
            <motion.div style={{ y, opacity }} className="relative z-10 pt-24 md:pt-40 pb-12 w-full">
                {/* Cinematic Watermark Text */}
                <div className="absolute -bottom-10 md:-bottom-20 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] whitespace-nowrap text-foreground z-0">
                    <h2 className="text-[30vw] md:text-[25vw] font-bold tracking-tighter leading-none">ASCENDIA</h2>
                </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1, staggerChildren: 0.1, ease: "circOut" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20 md:mb-32"
                >
                    {/* Brand Meta */}
                    <div className="lg:col-span-5 space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <Magnetic>
                            <Link href="/" className="inline-block">
                                <span className="text-3xl md:text-4xl font-bold tracking-tighter group flex items-center">
                                    ASCENDIA
                                    <motion.span
                                        className="ml-2 w-2 h-2 rounded-full bg-[#06b6d4]"
                                        animate={{ opacity: [1, 0.4, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </span>
                            </Link>
                        </Magnetic>
                        <p className="text-foreground/60 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                            Architecting the future of digital prestige. We specialize in elevating brands to their absolute zenith through radical innovation and technical precision.
                        </p>
                        <div className="flex items-center space-x-4 md:space-x-6">
                            {[
                                { icon: Instagram, href: "https://www.instagram.com/ascendiasolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
                                { icon: Mail, href: "mailto:ascendiasolutions@proton.me", label: "Email" }
                            ].map((social, i) => (
                                <Magnetic key={i}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/5 border border-black/5 flex items-center justify-center text-foreground/40 hover:bg-gradient-to-br hover:from-[#06b6d4] hover:to-[#ec4899] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-500 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={16} />
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
                        <div className="space-y-6 md:space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Platform</h4>
                            <ul className="space-y-4 md:space-y-6">
                                {[
                                    { name: "Solutions", href: "/services" },
                                    { name: "The Lab", href: "/projects" },
                                    { name: "Journal", href: "#" },
                                    { name: "Elite Culture", href: "/about" }
                                ].map((link) => (
                                    <li key={link.name} className="flex justify-center md:justify-start">
                                        <Magnetic>
                                            <Link href={link.href} className="text-base md:text-lg font-medium text-white/40 hover:text-white transition-colors flex items-center group">
                                                {link.name}
                                                <ArrowUpRight size={14} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </Magnetic>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Visions</h4>
                            <ul className="space-y-4 md:space-y-6">
                                <li className="flex justify-center md:justify-start">
                                    <Magnetic>
                                        <button
                                            onClick={openChat}
                                            className="text-base md:text-lg font-medium text-foreground/40 hover:text-foreground transition-colors flex items-center group cursor-pointer"
                                        >
                                            Start Inquire
                                            <ArrowUpRight size={14} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </button>
                                    </Magnetic>
                                </li>
                                {[
                                    { name: "Service Tiers", href: "/services" },
                                    { name: "Team Echelon", href: "/about" }
                                ].map((link) => (
                                    <li key={link.name} className="flex justify-center md:justify-start">
                                        <Magnetic>
                                            <Link href={link.href} className="text-base md:text-lg font-medium text-foreground/40 hover:text-foreground transition-colors flex items-center group">
                                                {link.name}
                                                <ArrowUpRight size={14} className="ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </Magnetic>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-6 md:space-y-8">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Availability</h4>
                            <div className="p-5 md:p-6 rounded-2xl bg-black/[0.02] border border-black/[0.05] space-y-3 md:space-y-4 text-left">
                                <div className="flex items-center space-x-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec4899] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec4899]"></span>
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">Accepting Projects</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-foreground/40 leading-relaxed md:block">
                                    Currently onboarding new clients for the upcoming quarter. Limited availability remaining.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar: Ethics & Identity */}
                <div className="pt-12 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/20">
                            © {currentYear} ASCENDIA DIGITAL <span className="hidden md:inline mx-4 text-foreground/5">/</span> <br className="md:hidden" /> ALL RIGHTS RESERVED
                        </p>
                        <div className="flex space-x-6 md:space-x-10">
                            <Link href="/privacy" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors">Privacy Ethics</Link>
                            <Link href="/terms" className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors">Terms of Reach</Link>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <Globe size={12} className="text-accent" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Based in Sri Lanka. Thinking Globally.</span>
                    </div>
                </div>
            </div>
            </motion.div>
        </footer>
    );
}
