"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Award } from "lucide-react";

const values = [
    {
        title: "Prestige",
        desc: "Ensuring every digital artifact reflects the highest standard of luxury and excellence.",
        icon: Award
    },
    {
        title: "Innovation",
        desc: "Pushing the boundaries of web architecture with cutting-edge technology and strategy.",
        icon: Zap
    },
    {
        title: "Impact",
        desc: "Driving measurable, high-value ROI for elite brands in the global digital market.",
        icon: Shield
    }
];

export default function AboutValues() {
    return (
        <section className="py-40 relative bg-[#050505] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-accent mb-6">The Ascendia Code</h2>
                    <h3 className="text-5xl font-bold tracking-tighter">Foundations of <span className="text-gradient italic font-serif">Excellence.</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group p-12 rounded-[3.5rem] bg-black border border-white/[0.03] hover:border-accent/40 transition-all duration-700 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="mb-10 w-20 h-20 mx-auto flex items-center justify-center rounded-3xl bg-white/[0.02] border border-white/[0.05] text-accent group-hover:bg-accent group-hover:text-white transition-all duration-700">
                                    <value.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-bold mb-6 tracking-tight">{value.title}</h4>
                                <p className="text-white/30 group-hover:text-white/60 leading-relaxed font-light transition-colors duration-700">
                                    {value.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
