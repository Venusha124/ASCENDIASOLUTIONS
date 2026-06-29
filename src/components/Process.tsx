"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, ArrowRight } from "lucide-react";
import TextReveal from "./animations/TextReveal";

const steps = [
    {
        id: "01",
        title: "Discovery",
        subtitle: "Strategic Alignment",
        desc: "We dive deep into your brand's DNA to identify unique market opportunities and define a cinematic digital strategy.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        icon: Search
    },
    {
        id: "02",
        title: "Execution",
        subtitle: "Elite Engineering",
        desc: "Our architects craft high-fidelity interfaces and robust code, transforming strategies into high-performance digital artifacts.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        icon: PenTool
    },
    {
        id: "03",
        title: "Ascension",
        subtitle: "Market Dominance",
        desc: "Lifting your brand to the echelon of digital excellence with continuous optimization and strategic scaling.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        icon: Rocket
    }
];

export default function Process() {
    return (
        <section id="process" className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16 md:mb-24 flex flex-col items-start"
                >
                    <h2 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Strategic Workflow</h2>
                    <h3 className="text-4xl md:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-foreground">
                        The <span className="italic font-light opacity-80">Ascendia</span> Method.
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] group-hover:border-accent/40 transition-all duration-700">
                                {/* Background Image */}
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="absolute inset-0 p-8 flex flex-col items-start justify-end text-left">
                                    <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-none w-full">
                                        <span className="text-4xl md:text-5xl font-serif font-light text-foreground/20 group-hover:text-accent transition-colors duration-700 italic">
                                            {step.id}
                                        </span>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-700 mr-16 md:mr-16 bg-white/5">
                                            <step.icon size={20} className="text-foreground/30 group-hover:text-accent transition-colors duration-700" />
                                        </div>
                                    </div>

                                    <div className="w-full relative z-10">
                                        <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent/80 mb-3 group-hover:text-accent transition-colors duration-700">
                                            {step.subtitle}
                                        </h4>
                                        <h5 className="text-3xl md:text-4xl font-serif font-normal mb-4 text-foreground tracking-tight">
                                            {step.title}
                                        </h5>
                                        <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-700 border-l border-white/10 pl-4 py-1">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Text Decoration */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-40 text-[10rem] md:text-[20rem] font-serif italic text-white/[0.01] select-none pointer-events-none whitespace-nowrap z-0">
                Methodology
            </div>
        </section>
    );
}
