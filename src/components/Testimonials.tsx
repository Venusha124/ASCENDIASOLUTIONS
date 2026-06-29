"use client";

import { motion } from "framer-motion";
import TextReveal from "./animations/TextReveal";

const testimonials = [
    {
        name: "Founders Shamalka Edirisinghe and Wilhelm Yohan Randy",
        role: "TAPROVIA GLOBAL",
        text: "Ascendia completely transformed our digital presence. The luxury and attention to detail in their work is unmatched. They are true architects of the digital realm.",
    },
    {
        name: "Marcus Thorne",
        role: "Founder, Thorne & Co.",
        text: "Working with Ascendia felt less like an agency relationship and more like an elite partnership. Their strategic design brought our brand heritage into the modern age.",
    },
    {
        name: "Elena Rodriguez",
        role: "Director, Artisan Global",
        text: "The sovereign quality of their design is evident in every pixel. Our conversion rates doubled after the launch of the new luxury platform they built for us.",
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 md:py-48 relative bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Background Decorative Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-full bg-accent/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <h2 className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-6">Client Feedback</h2>
                    <h3 className="text-4xl md:text-7xl font-serif font-normal tracking-tight leading-[1.05] text-foreground">
                        Echoes of <br />
                        <span className="italic font-light opacity-80">Excellence.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            <div className="relative p-10 md:p-12 rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0a] group-hover:border-accent/40 transition-all duration-700 h-full flex flex-col justify-between">
                                {/* Top Quote Mark */}
                                <div className="text-accent/20 text-6xl font-serif leading-none mb-6">"</div>
                                
                                {/* Testimonial Text */}
                                <p className="text-foreground/70 font-serif italic text-lg leading-relaxed mb-10">
                                    {testimonial.text}
                                </p>

                                {/* Author */}
                                <div>
                                    <div className="w-8 h-[1px] bg-accent/40 mb-4" />
                                    <h4 className="text-lg font-serif font-normal text-foreground mb-1">{testimonial.name}</h4>
                                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-accent/80">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
