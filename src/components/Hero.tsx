"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import Magnetic from "./animations/Magnetic";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 25;
        const moveY = (clientY - window.innerHeight / 2) / 25;
        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen md:h-screen flex items-center overflow-hidden"
        >
            {/* Background Image with Parallax & Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{
                        x: useTransform(mouseX, x => x * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.5)),
                        y: useTransform(mouseY, y => y * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.2 : 0.5)),
                        scale: 1.2
                    }}
                    className="relative w-full h-full"
                >
                    <iframe
                        src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&controls=0&rel=0&modestbranding=1"
                        className="absolute inset-0 w-full h-full border-0 grayscale opacity-40 contrast-125 scale-[1.8] md:scale-[1.5]"
                        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
            </div>

            {/* Background Decorative Elements with Parallax */}
            <motion.div
                style={{
                    x: useTransform(mouseX, x => x * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 1)),
                    y: useTransform(mouseY, y => y * (typeof window !== 'undefined' && window.innerWidth < 768 ? 0.3 : 1))
                }}
                className="absolute top-1/4 -right-20 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-accent/10 rounded-full blur-[60px] md:blur-[140px] pointer-events-none z-20"
            />
            <motion.div
                style={{
                    x: useTransform(mouseX, x => x * (typeof window !== 'undefined' && window.innerWidth < 768 ? -0.4 : -1.2)),
                    y: useTransform(mouseY, y => y * (typeof window !== 'undefined' && window.innerWidth < 768 ? -0.4 : -1.2))
                }}
                className="absolute -bottom-40 -left-20 w-[150px] md:w-[500px] h-[150px] md:h-[500px] bg-indigo-500/5 rounded-full blur-[50px] md:blur-[120px] pointer-events-none z-20"
            />

            {/* Animated Grid Decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none z-30" />

            <div className="section-container relative z-10 pt-20 md:pt-0">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-col items-start"
                >
                    <div className="mb-4 lg:mb-6 w-full flex flex-col items-start">
                        <TextReveal
                            text="Define"
                            className="text-lg md:text-3xl lg:text-4xl font-bold tracking-[0.3em] lg:tracking-[0.5em] uppercase text-white/20 mb-2 lg:mb-4"
                            delay={0.1}
                            align="left"
                        />
                        <TextReveal
                            text="The"
                            className="text-3xl md:text-7xl lg:text-8xl font-serif italic font-light leading-none mb-1 lg:mb-2"
                            delay={0.3}
                            align="left"
                        />
                        <div className="overflow-hidden w-full">
                            <TextReveal
                                text="ECHELON"
                                className="text-[15vw] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] md:leading-[0.7] mb-2 md:mb-6"
                                delay={0.5}
                                align="left"
                            />
                        </div>
                        <TextReveal
                            text="Experience."
                            className="text-2xl md:text-6xl lg:text-7xl font-serif italic text-gradient leading-none"
                            delay={0.7}
                            align="left"
                        />
                    </div>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/40 text-[13px] md:text-xl font-light max-w-xl lg:max-w-2xl leading-relaxed mb-8 lg:mb-10 text-left"
                    >
                        We architect high-performance digital worlds for elite brands that demand absolute precision and cinematic excellence.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-stretch sm:items-start justify-start space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto"
                    >
                        <Magnetic>
                            <Link href="/contact" className="block">
                                <button
                                    className="bg-white text-black px-8 md:px-10 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center space-x-3 hover:bg-accent hover:text-white transition-all duration-700 premium-shadow w-full"
                                >
                                    <span>Start Inquiry</span>
                                    <ArrowRight size={14} />
                                </button>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/about" className="block">
                                <button className="group relative px-8 md:px-10 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] text-white/60 hover:text-white transition-colors duration-500 overflow-hidden text-center w-full">
                                    <span className="relative z-10">Our Philosophy</span>
                                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </Link>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 pointer-events-none"
            >
                <span className="text-[9px] uppercase tracking-[0.5em] text-white/10 font-bold">Explore</span>
                <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />
            </motion.div>
        </section>
    );
}
