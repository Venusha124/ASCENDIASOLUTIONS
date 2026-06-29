"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Layers, ArrowUpRight, X } from "lucide-react";
import Magnetic from "./animations/Magnetic";

const categories = ["All", "Strategy", "Web", "Identity"];

const projects = [
    {
        id: "01",
        title: "Taprovia",
        category: "Web",
        client: "Sovereign Collection",
        year: "2026",
        imageWeb: "/taprovia-web.png",
        imageMobile: "/taprovia-mobile.png", 
        description: "An exclusive, digital flagship experience for Sovereign Collection's rare Ceylon spices. Featuring cinematic storytelling, immersive scroll-triggered interactions, and elite e-commerce performance tailored for a global luxury audience.",
        link: "https://cinnamon-spices-taprovia.vercel.app/"
    }
];

interface ProjectsProps {
    hideHeader?: boolean;
}

export default function Projects({ hideHeader = false }: ProjectsProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

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

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    const activeProjectData = hoveredProject ? projects.find(p => p.id === hoveredProject) : null;
    const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;

    return (
        <section id="projects" className="relative min-h-screen bg-[#050505] overflow-hidden py-24 border-t border-white/5">
            
            {/* Project Modal */}
            <AnimatePresence>
                {selectedProjectData && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-[#050505]/90 backdrop-blur-2xl"
                    >
                        {/* Close Overlay Area */}
                        <div className="absolute inset-0 z-0 cursor-pointer" onClick={() => setSelectedProject(null)} />
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full max-w-7xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 md:top-10 md:right-10 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/50 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Left Side: Mockups */}
                            <div className="w-full lg:w-3/5 bg-[#080808] p-8 md:p-16 relative flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.08),transparent_70%)] pointer-events-none" />
                                
                                <div className="relative w-full max-w-2xl flex items-end justify-center pt-10">
                                    {/* Web View */}
                                    <div className="w-[85%] aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] flex flex-col p-2 relative z-0">
                                        <div className="w-full h-4 border-b border-white/10 mb-2 flex items-center space-x-1.5 px-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                        </div>
                                        <img src={selectedProjectData.imageWeb} alt="Web View" className="w-full h-full object-cover rounded-md object-top" />
                                    </div>

                                    {/* Mobile View */}
                                    <div className="w-[25%] aspect-[9/19] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-[6px] border-[#111] bg-[#050505] absolute right-4 md:right-8 -bottom-8 md:-bottom-12 z-10 shrink-0">
                                        <div className="absolute top-0 inset-x-0 h-5 bg-[#111] z-20 flex justify-center rounded-b-2xl w-[45%] mx-auto" /> {/* Fake Notch */}
                                        <img src={selectedProjectData.imageMobile} alt="Mobile View" className="w-full h-full object-cover object-top" />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Details */}
                            <div className="w-full lg:w-2/5 p-8 md:p-16 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none">
                                <div>
                                    <div className="flex items-center space-x-4 mb-8">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5">
                                            {selectedProjectData.category}
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30">
                                            {selectedProjectData.year}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-4xl md:text-6xl font-serif font-normal text-foreground mb-6 leading-none">
                                        {selectedProjectData.title}
                                    </h3>
                                    
                                    <div className="w-12 h-[1px] bg-accent/50 mb-8" />
                                    
                                    <div className="mb-10">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-2">Client</p>
                                        <p className="text-lg text-foreground/80 font-serif italic">{selectedProjectData.client}</p>
                                    </div>

                                    <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light mb-12">
                                        {selectedProjectData.description}
                                    </p>
                                </div>

                                <a 
                                    href={selectedProjectData.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="group flex items-center justify-between w-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 group-hover:text-accent/70 transition-colors">Experience The</span>
                                        <span className="text-xl font-serif text-foreground group-hover:text-accent transition-colors">Live Digital Artifact</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-[#050505] transition-all duration-300">
                                        <ArrowUpRight size={20} className="group-hover:scale-110 transition-transform" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Cursor Image Reveal (Desktop Only) */}
            <motion.div 
                style={{ x: springX, y: springY }}
                className="fixed top-0 left-0 pointer-events-none z-[100] hidden lg:block"
            >
                <AnimatePresence>
                    {activeProjectData && !selectedProject && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute -top-[250px] -left-[200px] flex items-end"
                        >
                            {/* Web View Mockup */}
                            <div className="w-[450px] aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0a0a0a] flex flex-col p-2">
                                <div className="w-full h-4 border-b border-white/10 mb-2 flex items-center space-x-1.5 px-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <img src={activeProjectData.imageWeb} alt="Web View" className="w-full h-full object-cover rounded-md object-top" />
                            </div>

                            {/* Mobile Interface Mockup (Overlapping) */}
                            <div className="w-[120px] h-[240px] rounded-[1.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border-[4px] border-white/10 bg-[#050505] -ml-16 mb-[-20px] relative z-10 shrink-0">
                                <div className="absolute top-0 inset-x-0 h-4 bg-[#050505] z-20 flex justify-center rounded-b-xl w-[40px] mx-auto" /> {/* Fake Notch */}
                                <img src={activeProjectData.imageMobile} alt="Mobile View" className="w-full h-full object-cover object-top" />
                            </div>
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
                                    onClick={() => setSelectedProject(project.id)}
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
