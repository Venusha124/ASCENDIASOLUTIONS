"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Magnetic from "./animations/Magnetic";

const timeline = [
    { step: "01", label: "Consultation", desc: "Strategic deep-dive into brand vision." },
    { step: "02", label: "Architecture", desc: "Design and engineering blueprinting." },
    { step: "03", label: "Creation", desc: "High-fidelity artifact development." },
    { step: "04", label: "Launch", desc: "Market entry and global deployment." },
];

export default function ServiceAudit() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Background Digital World Image */}
            <div className="absolute inset-0 z-0 opacity-10">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Transformation Journey Timeline */}
                <div className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-accent mb-6">The Lifecycle</h2>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Transformation <span className="text-white/20 italic">Timeline</span></h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/30 transition-all duration-500 group text-center"
                            >
                                <div className="text-5xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors mb-6 font-serif italic">{item.step}</div>
                                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-accent transition-colors">{item.label}</h4>
                                <p className="text-[10px] text-white/30 leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Luxury Branding Audit CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[4rem] bg-gradient-to-br from-[#0A0A0A] to-black border border-white/[0.05] p-12 md:p-24 overflow-hidden text-center group"
                >
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="flex justify-center mb-10">
                            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20">
                                <CheckCircle2 className="text-accent" size={32} />
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                            Request Your Elite Digital Audit
                        </h2>
                        <p className="text-white/40 text-lg md:text-xl font-light mb-14 leading-relaxed">
                            Analyze your current digital footprint and discover the strategic requirements for ascension to market dominance.
                        </p>

                        <div className="flex justify-center">
                            <Magnetic>
                                <Link href="/contact" className="block">
                                    <button className="bg-white text-black px-12 py-7 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] flex items-center space-x-3 hover:bg-accent hover:text-white transition-all duration-700 premium-shadow">
                                        <span>Start Audit</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
