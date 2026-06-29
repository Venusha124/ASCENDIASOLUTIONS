"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "Brand Identity",
        description: "Crafting memorable logos, color palettes, and visual systems that define your legacy.",
        number: "01",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive, beautiful, and engaging user experiences tailored to your audience.",
        number: "02",
    },
    {
        title: "Art Direction",
        description: "Guiding the visual aesthetic and creative vision of your campaigns.",
        number: "03",
    },
    {
        title: "Web Development",
        description: "Translating stunning designs into high-performance digital platforms.",
        number: "04",
    },
];

interface ServicesProps {
    hideHeader?: boolean;
}

export default function Services({ hideHeader = false }: ServicesProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className={`relative bg-[#050505] overflow-hidden ${hideHeader ? 'pb-24 md:pb-32 pt-8 md:pt-0' : 'py-24 md:py-32 border-t border-white/5'}`}>
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end"
                    >
                        <div>
                            <h2 className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Expertise</h2>
                            <h3 className="text-4xl md:text-7xl font-serif font-normal tracking-tight max-w-2xl leading-[1.05] text-foreground">
                                Creative <br />
                                <span className="italic font-light opacity-80">Direction & Design.</span>
                            </h3>
                        </div>
                        <Link href="/services" className="mt-8 md:mt-0 hidden md:flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50 hover:text-accent transition-colors duration-300">
                            <span>View All Services</span>
                            <ArrowUpRight size={16} />
                        </Link>
                    </motion.div>
                )}

                <div className="flex flex-col w-full border-t border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-white/10 overflow-hidden cursor-pointer"
                        >
                            {/* Hover Background */}
                            <div 
                                className={`absolute inset-0 bg-white/5 transition-transform duration-700 ease-out origin-left ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`} 
                            />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 px-4 md:px-8">
                                <div className="flex items-start md:items-center space-x-6 md:space-x-16 mb-4 md:mb-0">
                                    <span className="text-accent/50 font-serif text-lg md:text-2xl italic group-hover:text-accent transition-colors duration-500">
                                        {service.number}
                                    </span>
                                    <h4 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground group-hover:translate-x-4 transition-transform duration-500">
                                        {service.title}
                                    </h4>
                                </div>
                                
                                <div className="flex items-center justify-between md:justify-end md:w-1/3 pl-14 md:pl-0">
                                    <p className="text-foreground/50 text-sm md:text-base font-light leading-relaxed max-w-xs md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                        {service.description}
                                    </p>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-foreground/30 group-hover:bg-accent group-hover:text-[#050505] group-hover:border-transparent group-hover:scale-110 transition-all duration-500 ml-6 shrink-0">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <Link href="/services" className="mt-16 flex md:hidden items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50 hover:text-accent transition-colors duration-300">
                    <span>View All Services</span>
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </section>
    );
}
