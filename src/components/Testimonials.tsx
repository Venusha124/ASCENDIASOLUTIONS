"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

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
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 8000); // Rotate every 8 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 md:py-24 relative bg-[#050505] overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.03),transparent_70%)] pointer-events-none z-0" 
            />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16 text-center flex flex-col items-center"
                >
                    <h2 className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.5em] text-accent mb-4">Client Feedback</h2>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight leading-[1.05] text-foreground">
                        Echoes of <span className="italic font-light opacity-80">Excellence.</span>
                    </h3>
                </motion.div>

                {/* Cinematic Single Quote Slider */}
                <div className="relative min-h-[250px] md:min-h-[280px] flex items-center justify-center">
                    <Quote className="absolute top-0 left-1/2 -translate-x-1/2 text-accent/10 w-20 h-20 md:w-32 md:h-32 z-0 pointer-events-none" />
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 flex flex-col items-center text-center w-full px-4"
                        >
                            <p className="text-xl md:text-3xl lg:text-4xl font-serif font-light italic text-foreground leading-[1.5] max-w-3xl mb-8">
                                "{testimonials[activeIndex].text}"
                            </p>
                            
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-[1px] bg-accent/40 mb-4" />
                                <h4 className="text-base md:text-xl font-serif font-normal text-foreground mb-1">
                                    {testimonials[activeIndex].name}
                                </h4>
                                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent/80">
                                    {testimonials[activeIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center items-center space-x-3 mt-10 md:mt-12 relative z-10">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className="relative py-2 group"
                        >
                            <div className={`h-[1px] transition-all duration-500 rounded-full ${index === activeIndex ? 'w-10 bg-accent' : 'w-4 bg-white/20 group-hover:bg-white/40 group-hover:w-6'}`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
