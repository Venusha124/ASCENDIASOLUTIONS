"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Magnetic from "./animations/Magnetic";
import TextReveal from "./animations/TextReveal";

const founders = [
    {
        name: "Venusha Weerasinghe",
        role: "Co-Founder & Chief Visionary",
        image: "/team/venusha.jpg",
        description: "Visionary leader driving the architectural philosophy behind ASCENDIA's digital artifacts.",
        quote: "Digital architecture is the bridge between dreams and reality.",
    },
    {
        name: "Angelo Peiris",
        role: "Co-Founder & Design Principal",
        image: "/team/angelo.jpeg",
        description: "Expert in elite digital strategy and high-fidelity user experience design.",
        quote: "Design is silent, but it speaks to the soul of the user."
    },
    {
        name: "Thilina Weerasinghe",
        role: "Co-Founder & Tech Architect",
        image: "/team/thilina-weerasinghe.jpg",
        description: "Master of web engineering and high-performance digital systems.",
        quote: "Code is the foundation upon which global impact is built."
    }
];

export default function Leadership() {
    return (
        <section className="py-40 relative bg-black overflow-hidden">
            {/* Background Decorative Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-accent/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 text-center md:text-left"
                >
                    <h2 className="text-xs font-bold uppercase tracking-[0.8em] text-accent mb-8">Management</h2>
                    <TextReveal
                        text="The Architects of Excellence."
                        className="text-5xl md:text-8xl font-bold tracking-tighter"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            {/* Premium Founder Card */}
                            <div className="relative aspect-[4/5] md:aspect-[3/4.5] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/[0.05] bg-[#080808] group-hover:border-accent/40 transition-all duration-700">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] opacity-60 group-hover:opacity-100"
                                />

                                {/* Glass Overlay & Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                {/* Interactive Content Container */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                    {/* Quote Overlay */}
                                    <div className="mb-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                                        <p className="text-[10px] md:text-xs italic text-white/50 border-l border-accent/40 pl-4 py-1 mb-6">
                                            "{founder.quote}"
                                        </p>
                                        <div className="flex space-x-3">
                                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-accent hover:border-accent/40 transition-all duration-500">
                                                <ExternalLink size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fixed Content */}
                                    <div className="mb-2">
                                        <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-1">{founder.name}</h4>
                                        <p className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-accent">{founder.role}</p>
                                    </div>
                                    <p className="text-[10px] text-white/20 group-hover:text-white/40 transition-colors duration-700 leading-relaxed font-light">
                                        {founder.description}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Floating Accent */}
                            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[3rem] border border-white/[0.03] rotate-3 group-hover:rotate-0 transition-transform duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

