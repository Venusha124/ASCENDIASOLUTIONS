"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
    hideHeader?: boolean;
}

export default function About({ hideHeader = false }: AboutProps) {
    return (
        <section id="about" className="relative min-h-[70vh] flex items-center bg-[#050505] overflow-hidden py-32 md:py-48">
            <div className="section-container relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16 lg:gap-8 w-full max-w-7xl mx-auto">
                    
                    {/* Left Column: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-10">
                            The Narrative
                        </h2>
                        <h3 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-normal text-foreground leading-[1.05] tracking-tight">
                            Behind the <br />
                            <span className="italic font-light">Digital Art.</span>
                        </h3>
                    </motion.div>

                    {/* Right Column: Paragraph */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:w-5/12 flex"
                    >
                        <div className="w-[1px] h-auto bg-white/10 mr-8 md:mr-12" />
                        <p className="text-accent text-xl md:text-3xl font-serif italic leading-relaxed py-4 opacity-80">
                            Every pixel tells a story of strategic perfection and generational intuition. Step into the heartland where technology meets luxury.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
