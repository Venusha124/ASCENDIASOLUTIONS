"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import Magnetic from "./animations/Magnetic";

const categories = ["All", "Strategy", "Web", "Identity"];

const projects: any[] = [];

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
        <section id="projects" className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden py-24 md:py-0 border-t border-white/5">
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
                                    <div key={project.id}>Project</div> // Placeholder for actual project card when populated
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative w-full py-40 border border-white/5 rounded-3xl bg-[#0a0a0a] shadow-[0_20px_60px_rgb(0,0,0,0.2)] overflow-hidden flex flex-col items-center justify-center text-center group"
                                >
                                    {/* Minimalist Empty State */}
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                                            <Layers className="text-foreground/30" size={32} />
                                        </div>
                                        <p className="text-foreground/80 text-xl font-light tracking-wide max-w-lg px-6">
                                            Curating our latest design case studies.
                                        </p>
                                        <p className="text-foreground/40 text-xs uppercase tracking-[0.4em] font-bold mt-6">
                                            Portfolio Updating...
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
                    className="mt-12 md:mt-24 text-center"
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
