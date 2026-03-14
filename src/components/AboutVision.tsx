"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutVision() {
    return (
        <section className="py-40 relative bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Digital World Vision"
                    className="w-full h-full object-cover opacity-10 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-accent mb-12">The North Star</h2>
                    <h3 className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 leading-none">
                        Pioneering the <span className="text-white/20 italic font-serif">Future</span> of Digital Architecture.
                    </h3>
                    <div className="h-px w-24 bg-accent/30 mx-auto mb-12" />
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
                        We don't just build websites; we architect elite digital artifacts. Our mission is to bridge the gap between visionary brands and their target audience through cinematic design and uncompromising engineering.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
