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
        <section className="py-24 relative bg-black overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Echelon Performance Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative rounded-[3rem] overflow-hidden border border-white/[0.05] bg-[#080808] p-8 md:p-16 mb-40 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-accent mb-6">Performance Core</h2>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 max-w-md">
                                The Echelon <span className="text-gradient italic font-serif">Dashboard</span>
                            </h3>
                            <p className="text-white/40 text-lg leading-relaxed font-light mb-10">
                                We provide elite-tier analytics that go beyond standard metrics. Every digital artifact we deploy is monitored for maximum velocity, conversion efficiency, and market impact.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: "Real-time Optimization", value: "99.9%" },
                                    { label: "Core Web Vitals", value: "Grade A" },
                                    { label: "Global Edge Delivery", value: "Active" }
                                ].map((stat) => (
                                    <div key={stat.label} className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <span className="text-sm text-white/60 tracking-widest uppercase">{stat.label}</span>
                                        <span className="text-xl font-bold text-accent">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Representation of Dashboard */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass p-4">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/5 animate-pulse" />
                            <div className="relative h-full w-full bg-[#050505] rounded-xl overflow-hidden p-6">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    </div>
                                    <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[8px] font-bold text-accent uppercase tracking-widest">Live Metrics</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 h-3/4">
                                    <div className="bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col justify-between">
                                        <div className="text-[10px] text-white/20 uppercase tracking-widest">Velocity</div>
                                        <div className="h-1 w-full bg-accent overflow-hidden rounded-full mt-2">
                                            <motion.div
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "0%" }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-full h-full bg-white/20"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg border border-white/5 p-4">
                                        <div className="text-[10px] text-white/20 uppercase tracking-widest">Growth</div>
                                        <div className="mt-4 flex items-end justify-between h-8">
                                            {[30, 60, 45, 90, 70].map((h, i) => (
                                                <div key={i} className="w-2 bg-accent/40 rounded-t-sm" style={{ height: `${h}%` }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-span-2 bg-white/5 rounded-lg border border-white/5 p-4 flex items-center justify-center">
                                        <div className="text-center">
                                            <p className="text-4xl font-bold tracking-tighter text-accent">98.2</p>
                                            <p className="text-[8px] uppercase tracking-[0.4em] text-white/20 font-bold">Health Score</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Section */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-accent mb-6">Competitive Edge</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Ascendia vs. <span className="text-white/20 italic">Traditional</span></h3>
                    </motion.div>

                    <div className="space-y-4">
                        {comparison.map((row, i) => (
                            <motion.div
                                key={row.feature}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-3 items-center p-8 rounded-2xl bg-[#080808] border border-white/[0.03] hover:border-accent/20 transition-all duration-500 group"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center text-white/20 group-hover:text-accent transition-colors">
                                        <row.icon size={18} />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest">{row.feature}</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-sm text-white/20 font-light">{row.traditional}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xl font-bold text-accent tracking-tighter">{row.elite}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
