"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Monitor, Zap, Globe, ShoppingBag, Target, ArrowUpRight } from "lucide-react";
import Magnetic from "./animations/Magnetic";

const services = [
    {
        title: "Web Architecture",
        description: "Building custom, ultra-high-performance digital systems using Next.js and React for ultimate scalability.",
        icon: Monitor,
    },
    {
        title: "Elite UI/UX Design",
        description: "Crafting intuitive, cinematic interfaces that prioritize user engagement and brand prestige.",
        icon: Layers,
    },
    {
        title: "E-Commerce",
        description: "Creating bespoke, conversion-optimized retail platforms designed for the global luxury market.",
        icon: ShoppingBag,
    },
    {
        title: "Search Mastery",
        description: "Optimizing your digital presence to dominate search engine rankings and drive organic ROI.",
        icon: Globe,
    },
    {
        title: "Strategic Media",
        description: "Running targeted, data-driven paid campaigns to maximize visibility and revenue growth.",
        icon: Target,
    },
    {
        title: "Performance",
        description: "Optimizing for maximum speed and security, ensuring your platform is always elite.",
        icon: Zap,
    },
];

interface ServicesProps {
    hideHeader?: boolean;
}

export default function Services({ hideHeader = false }: ServicesProps) {
    return (
        <section id="services" className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden py-24 md:py-0">
            {/* Background Tech Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1510511459019-5dee.9fd4fcdd?q=80&w=2070&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.03] grayscale pointer-events-none"
                />
            </div>

            <div className="section-container relative z-10">
                {!hideHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent mb-6">Expertise</h2>
                        <h3 className="text-3xl md:text-7xl font-bold tracking-tighter max-w-2xl leading-[1.1]">
                            Uncompromising <br />
                            <span className="text-white/20">Digital Architecture.</span>
                        </h3>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mx-4 md:-mx-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-6 md:p-10 bg-black/40 border border-white/[0.03] rounded-[2rem] md:rounded-[2.5rem] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-700 overflow-hidden flex flex-col h-full"
                        >
                            {/* Accent Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <Magnetic>
                                <div className="mb-6 md:mb-8 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/[0.03] text-accent border border-white/[0.05] group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                                    <service.icon size={26} />
                                </div>
                            </Magnetic>

                            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">{service.title}</h4>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-6 md:mb-8 flex-grow">
                                {service.description}
                            </p>

                            <Link href="/contact" className="mt-auto block">
                                <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-accent transition-colors duration-500 cursor-pointer">
                                    <span>Discover more</span>
                                    <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
