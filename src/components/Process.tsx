"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, ArrowRight } from "lucide-react";

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
        <section id="process" className="relative min-h-screen flex items-center bg-black overflow-hidden py-24 md:py-0">
            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-16 md:mb-24"
                >
                    <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent mb-6">Strategic Workflow</h2>
                    <h3 className="text-3xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                        The <span className="text-gradient italic font-serif">Ascendia</span> Method
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/[0.05] bg-[#0A0A0A]">
                                {/* Background Image */}
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-10 md:opacity-20 grayscale group-hover:opacity-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                />

                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
                                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col items-start justify-end text-left">
                                    <div className="absolute top-8 md:top-10 left-8 md:top-10 right-8 md:top-10 flex justify-between items-start pointer-events-none w-full">
                                        <span className="text-4xl md:text-5xl font-bold text-white/5 group-hover:text-accent/20 transition-colors duration-700 italic font-serif">
                                            {step.id}
                                        </span>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-700 mr-16 md:mr-20">
                                            <step.icon size={20} className="text-white/20 group-hover:text-accent transition-colors duration-700" />
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <h4 className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent mb-3 md:mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                                            {step.subtitle}
                                        </h4>
                                        <h5 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tighter">
                                            {step.title}
                                        </h5>
                                        <p className="text-sm md:text-base text-white/50 leading-relaxed font-light group-hover:text-white/90 transition-colors duration-700">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative element for next step (except last) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-full z-20 text-white/5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 pointer-events-none">
                                    <ArrowRight size={40} strokeWidth={1} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Text Decoration */}
            <div className="absolute -bottom-20 -left-20 text-[10rem] md:text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap">
                Innovation
            </div>
        </section>
    );
}
