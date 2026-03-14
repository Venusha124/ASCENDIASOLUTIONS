"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, ArrowRight, Layers, Cpu, Globe, Rocket } from "lucide-react";
import Magnetic from "./animations/Magnetic";

const categories = ["All", "Strategy", "Web", "Identity"];

const projects: any[] = [];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

    function handleMouseMove(e: React.MouseEvent) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 1000 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
        >
            <Link href={project.link} className="block relative aspect-[14/16] md:aspect-[16/10] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/[0.05] bg-[#080808] transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                {/* Immersive Image Base */}
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale-0 group-hover:scale-110 transition-transform duration-[2s] opacity-40 group-hover:opacity-60"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Metadata Reveal */}
                <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                        <div className="px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-[10px] font-bold uppercase tracking-widest">
                            {project.category}
                        </div>
                        <Magnetic>
                            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700 shadow-2xl">
                                <ExternalLink size={20} />
                            </div>
                        </Magnetic>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4">{project.title}</h4>
                            <p className="text-white/40 text-sm md:text-lg font-light max-w-xl leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                                {project.description}
                            </p>
                        </div>

                        {/* Impact Metrics */}
                        <div className="flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 transition-all duration-1000">
                            {project.metrics.map((metric: string, i: number) => (
                                <div key={i} className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-[10px] md:text-xs font-bold text-accent">
                                    <project.icon size={12} />
                                    <span>{metric}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating "Digital Artifact" Number */}
                <div className="absolute top-20 right-20 text-[10vw] font-bold text-white/[0.02] pointer-events-none group-hover:text-accent/[0.02] transition-colors duration-1000 leading-none">
                    0{index + 1}
                </div>
            </Link>
        </motion.div>
    );
};

interface ProjectsProps {
    hideHeader?: boolean;
}

export default function Projects({ hideHeader = false }: ProjectsProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="projects" className="relative min-h-screen flex items-center bg-black overflow-hidden py-24 md:py-0">
            <div className="section-container relative z-10 pt-16 md:pt-32">
                {/* Premium Header */}
                <div className={`flex flex-col mb-16 md:mb-24 gap-12 ${hideHeader ? 'hidden' : ''}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.8em] text-accent mb-6">Archive 2024</h2>
                        <h3 className="text-3xl md:text-8xl font-bold tracking-tighter max-w-2xl leading-[1.1]">
                            Digital artifacts built for the <span className="text-gradient italic font-serif">Elite.</span>
                        </h3>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 md:gap-4 p-2 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl self-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${activeCategory === cat
                                    ? "bg-accent border-accent text-white shadow-[0_10px_30px_rgba(100,116,255,0.3)]"
                                    : "text-white/30 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="space-y-24 md:space-y-40">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-24 md:space-y-40"
                        >
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, idx) => (
                                    <ProjectCard key={project.id} project={project} index={idx} />
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="relative w-full py-40 border border-white/[0.05] rounded-[3rem] bg-black overflow-hidden flex flex-col items-center justify-center text-center group"
                                >
                                    <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen overflow-hidden pointer-events-none rounded-[3rem]">
                                        {/* Container scaled responsively to ensure full coverage of the rounded element without exposing gaps */}
                                        <div className="absolute top-1/2 left-1/2 w-[350%] sm:w-[250%] md:w-[150%] lg:w-[120%] xl:w-[100%] aspect-[16/9] -translate-x-1/2 -translate-y-1/2">
                                            <iframe
                                                src="https://www.youtube.com/embed/0x5mf8BUJZY?si=gXgRMG6hyKJe6gSa&autoplay=1&mute=1&controls=0&loop=1&playlist=0x5mf8BUJZY&showinfo=0&rel=0"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                className="absolute top-0 left-0 w-full h-full border-0 pointer-events-none scale-125 md:scale-110"
                                            />
                                        </div>
                                        {/* Gradient Overlay for Legibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80" />
                                    </div>

                                    {/* Glassmorphism Content Container */}
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full bg-accent/10 backdrop-blur-md flex items-center justify-center mb-8 border border-accent/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                            <Layers className="text-accent/40" size={40} />
                                        </div>
                                        <p className="text-white/80 text-xl font-light tracking-wide italic max-w-lg px-6 drop-shadow-md">
                                            Digital artifacts are currently being processed in the Echelon.
                                        </p>
                                        <p className="text-white/30 text-xs uppercase tracking-[0.4em] font-bold mt-6">
                                            Archives Updating...
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-20 text-center"
                >
                    <p className="text-white/50 text-sm font-light uppercase tracking-widest mb-6 lg:mb-10">Searching for something more specific?</p>
                    <Magnetic>
                        <Link href="/contact" className="inline-flex items-center space-x-6 group">
                            <span className="text-2xl md:text-3xl font-bold tracking-tighter group-hover:text-accent transition-colors">Start a new project sequence</span>
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                <ArrowRight className="transform group-hover:scale-125 transition-transform" size={20} />
                            </div>
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
}
