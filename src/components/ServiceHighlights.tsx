"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";

const comparison = [
    { feature: "Load Velocity", traditional: "3.5s Avg", elite: "< 0.8s", icon: Zap },
    { feature: "SEO Architecture", traditional: "Standard Tags", elite: "Semantic Mastery", icon: TrendingUp },
    { feature: "Security Protocol", traditional: "Basic SSL", elite: "Military-Grade", icon: Shield },
    { feature: "Conversion Engine", traditional: "Static Forms", elite: "AI-Driven UX", icon: BarChart3 },
];

export default function ServiceHighlights() {
    return (
        <section className="py-32 md:py-48 relative bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Ambient Animated Glow */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.05),transparent_60%)] pointer-events-none z-0"
            />

            <div className="section-container relative z-10">
                {/* Echelon Performance Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-3xl p-10 md:p-20 mb-32 md:mb-56 group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center relative z-10">
                        <div>
                            <h2 className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-8">Performance Core</h2>
                            <h3 className="text-4xl md:text-6xl font-serif font-normal tracking-tight text-foreground mb-10 max-w-lg leading-[1.1]">
                                The Echelon <span className="italic font-light opacity-80">Dashboard.</span>
                            </h3>
                            <p className="text-foreground/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                                We provide elite-tier analytics that go beyond standard metrics. Every digital artifact we deploy is monitored for maximum velocity, conversion efficiency, and market impact.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { label: "Real-time Optimization", value: "99.9%" },
                                    { label: "Core Web Vitals", value: "Grade A" },
                                    { label: "Global Edge Delivery", value: "Active" }
                                ].map((stat) => (
                                    <div key={stat.label} className="flex justify-between items-end border-b border-white/10 pb-4 group/stat cursor-default">
                                        <span className="text-[10px] text-foreground/40 font-bold tracking-[0.3em] uppercase group-hover/stat:text-accent transition-colors">{stat.label}</span>
                                        <span className="text-2xl font-serif italic text-accent">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Representation of Dashboard */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#050505] p-2 md:p-4">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,168,124,0.05),transparent_60%)] animate-pulse" />
                            <div className="relative h-full w-full bg-[#0a0a0a] rounded-xl overflow-hidden p-6 md:p-8 flex flex-col justify-between border border-white/5">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex space-x-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full bg-accent/5 border border-accent/20 text-[9px] font-bold text-accent uppercase tracking-widest flex items-center space-x-2">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                                        </span>
                                        <span>Live Metrics</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
                                    <div className="bg-white/[0.02] rounded-xl border border-white/5 p-6 flex flex-col justify-between hover:bg-white/[0.04] transition-colors">
                                        <div className="text-[9px] text-foreground/30 font-bold uppercase tracking-[0.3em]">Velocity</div>
                                        <div className="h-1 w-full bg-white/5 overflow-hidden rounded-full mt-4">
                                            <motion.div
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "0%" }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                className="w-full h-full bg-accent/50"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-white/[0.02] rounded-xl border border-white/5 p-6 hover:bg-white/[0.04] transition-colors flex flex-col justify-between">
                                        <div className="text-[9px] text-foreground/30 font-bold uppercase tracking-[0.3em]">Growth Array</div>
                                        <div className="mt-6 flex items-end justify-between h-12">
                                            {[30, 60, 45, 90, 70].map((h, i) => (
                                                <motion.div 
                                                    key={i} 
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className="w-1.5 bg-accent/40 rounded-t-full" 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-2 bg-gradient-to-r from-accent/5 to-transparent rounded-xl border border-white/5 p-8 flex items-center justify-between">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/30 font-bold mb-2">Health Score</p>
                                            <p className="text-5xl md:text-6xl font-serif text-foreground">98.2<span className="text-2xl text-accent">.</span></p>
                                        </div>
                                        <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center">
                                            <BarChart3 className="text-accent" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Section */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Competitive Edge</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-normal text-foreground">Ascendia vs. <span className="italic font-light opacity-60">Traditional</span></h3>
                    </motion.div>

                    <div className="space-y-4">
                        {comparison.map((row, i) => (
                            <motion.div
                                key={row.feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center p-8 md:p-10 rounded-2xl bg-[#080808] border border-white/5 hover:border-accent/30 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="flex items-center space-x-6 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-foreground/30 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                        <row.icon size={20} />
                                    </div>
                                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/80">{row.feature}</span>
                                </div>
                                <div className="text-left md:text-center relative z-10 pl-18 md:pl-0">
                                    <span className="text-[10px] md:text-xs text-foreground/40 font-bold uppercase tracking-[0.2em]">Traditional: {row.traditional}</span>
                                </div>
                                <div className="text-left md:text-right relative z-10 pl-18 md:pl-0">
                                    <span className="text-lg md:text-2xl font-serif italic text-accent">{row.elite}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
