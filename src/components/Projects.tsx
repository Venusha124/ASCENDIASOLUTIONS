"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Layers, ArrowUpRight } from "lucide-react";
import Magnetic from "./animations/Magnetic";

const categories = ["All", "Strategy", "Web", "Identity"];

const projects = [
    {
        id: "01",
        title: "Aura Skincare",
        category: "Web",
        client: "Aura Cosmetics",
        year: "2026",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Lumina Wealth",
        category: "Identity",
        client: "Lumina Partners",
        year: "2025",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Nexus Automotive",
        category: "Strategy",
        client: "Nexus EV",
        year: "2026",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Vanguard Estate",
        category: "Web",
        client: "Vanguard Group",
        year: "2025",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09be1546?q=80&w=2070&auto=format&fit=crop"
    }
];

interface ProjectsProps {
    hideHeader?: boolean;
}

export default function Projects({ hideHeader = false }: ProjectsProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    // Mouse tracking for floating image
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the floating image
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    const activeImage = hoveredProject ? projects.find(p => p.id === hoveredProject)?.image : null;

    return (
        <section id="projects" className="relative min-h-screen bg-[#050505] overflow-hidden py-24 border-t border-white/5">
            
            {/* Floating Cursor Image Reveal (Desktop Only) */}
            <motion.div 
                style={{ x: springX, y: springY }}
                className="fixed top-0 left-0 pointer-events-none z-[100] hidden lg:block"
            >
                <AnimatePresence>
                    {activeImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute -top-[200px] -left-[150px] w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img src={activeImage} alt="Project Preview" className="w-full h-full object-cover grayscale-[20%]" />
                            <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <div className="section-container relative z-10 pt-16 md:pt-32">
                {/* Premium Header */}
                <div className={`flex flex-col mb-16 md:mb-24 gap-12 ${hideHeader ? 'hidden' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Portfolio</h2>
                        <h3 className="text-4xl md:text-7xl font-serif font-normal tracking-tight max-w-2xl leading-[1.05] text-foreground">
                            Our Creative <span className="italic font-light opacity-80">Portfolio.</span>
                        </h3>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 md:gap-4 p-2 rounded-2xl bg-[#0a0a0a] border border-white/5 shadow-sm self-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${activeCategory === cat
                                    ? "bg-accent text-[#050505] shadow-md shadow-accent/20"
                                    : "text-foreground/40 hover:text-accent"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Interactive Projects List */}
                <div className="w-full border-t border-white/10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col"
                        >
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    className="group relative border-b border-white/10 py-10 md:py-16 px-4 md:px-8 cursor-pointer overflow-hidden flex flex-col md:flex-row md:items-center justify-between"
                                >
                                    {/* Hover Background */}
                                    <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-0" />
                                    
                                    <div className="relative z-10 flex flex-col md:flex-row md:items-baseline space-y-4 md:space-y-0 md:space-x-12">
                                        <span className="text-accent/50 font-serif italic text-lg md:text-2xl group-hover:text-accent transition-colors duration-500">{project.id}</span>
                                        <h4 className="text-4xl md:text-6xl lg:text-7xl font-serif font-normal text-foreground group-hover:translate-x-6 group-hover:text-accent transition-all duration-500">
                                            {project.title}
                                        </h4>
                                    </div>
                                    
                                    <div className="relative z-10 flex items-center justify-between md:justify-end mt-8 md:mt-0 w-full md:w-auto md:space-x-16">
                                        <div className="flex flex-col space-y-2">
                                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">Client</span>
                                            <span className="text-sm md:text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-500">{project.client}</span>
                                        </div>
                                        <div className="flex flex-col space-y-2 md:mr-10">
                                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-foreground/30">Category</span>
                                            <span className="text-sm md:text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-500">{project.category}</span>
                                        </div>
                                        
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground/30 group-hover:bg-accent group-hover:text-[#050505] group-hover:border-transparent group-hover:scale-110 transition-all duration-500 shrink-0">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-32 text-center"
                >
                    <p className="text-foreground/30 text-xs font-bold uppercase tracking-widest mb-6 lg:mb-10">Searching for something more specific?</p>
                    <Magnetic>
                        <Link href="/contact" className="inline-flex items-center space-x-6 group">
                            <span className="text-2xl md:text-3xl font-serif font-normal text-foreground group-hover:text-accent transition-colors">Start a new project sequence</span>
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-[#050505] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(198,168,124,0.2)]">
                                <ArrowRight className="transform group-hover:scale-110 transition-transform" size={20} />
                            </div>
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
}
