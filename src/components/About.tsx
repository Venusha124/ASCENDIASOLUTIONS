"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-40 relative bg-black overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(100,116,255,0.05),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    {/* Left Column: The Nexus of Innovation (Image Collage) */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-square max-w-xl mx-auto">
                            {/* Main Layer */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 rounded-[4rem] overflow-hidden border border-white/5"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale opacity-40 hover:scale-110 transition-transform duration-[3s]"
                                    alt="Nexus Core"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent" />
                            </motion.div>

                            {/* Floating Glass Layer 1 */}
                            <motion.div
                                initial={{ opacity: 0, x: -50, y: 50 }}
                                whileInView={{ opacity: 1, x: -30, y: 30 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                                className="absolute bottom-0 left-0 w-2/3 aspect-video glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden z-20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                                    alt="Interface Layer"
                                />
                            </motion.div>

                            {/* Accent Circle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-10 right-10 w-32 h-32 rounded-full border-t border-r border-accent/30 z-10"
                            />
                        </div>
                    </div>

                    {/* Right Column: Evolutionary Metrics */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-accent mb-6">Innovation Nexus</h2>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">
                                Engineering <br />
                                <span className="text-gradient italic font-serif">Future-Proof</span> <br />
                                Ecosystems.
                            </h3>

                            <p className="text-white/40 text-lg leading-relaxed font-light mb-12 max-w-lg">
                                Ascendia bridges the void between complex technology and cinematic human experience. We architect digital worlds that don't just exist—they evolve.
                            </p>

                            <div className="space-y-10">
                                {[
                                    { label: "Architectural Efficiency", value: 98, suffix: "%" },
                                    { label: "Security Encryption", value: 100, suffix: "+" },
                                    { label: "Global Market Reach", value: 45, suffix: "M" }
                                ].map((metric, i) => (
                                    <div key={metric.label} className="group">
                                        <div className="flex justify-between items-end mb-4">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                                                {metric.label}
                                            </span>
                                            <span className="text-2xl font-bold text-accent tracking-tighter">
                                                {metric.value}{metric.suffix}
                                            </span>
                                        </div>
                                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${metric.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "circOut" }}
                                                className="h-full bg-accent shadow-[0_0_20px_rgba(100,116,255,0.5)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
