"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import Magnetic from "./animations/Magnetic";
import { useChat } from "@/context/ChatContext";

export default function Hero() {
    const { openChat } = useChat();
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
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            {/* Background Image with Parallax & Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ x: useTransform(mouseX, x => x * 0.5), y: useTransform(mouseY, y => y * 0.5), scale: 1.1 }}
                    className="relative w-full h-full"
                >
                    <iframe
                        src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&loop=1&playlist=Hgg7M3kSqyE&controls=0&rel=0&modestbranding=1"
                        className="w-full h-full border-0 grayscale opacity-40 contrast-125 scale-[1.5]"
                        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-10" />
            </div>

            {/* Background Decorative Elements with Parallax */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none z-20"
            />
            <motion.div
                style={{ x: useTransform(mouseX, x => x * -1.2), y: useTransform(mouseY, y => y * -1.2) }}
                className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-20"
            />

            {/* Animated Grid Decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none z-30" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center space-x-2 glass px-3 py-1 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                            The New Standard of Digital
                        </span>
                    </motion.div>

                    <TextReveal
                        text="Define The Echelon Experience."
                        className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-10"
                    />

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-white/30 max-w-2xl mb-14 leading-relaxed font-light"
                    >
                        Built to Grow. Designed to Lead.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
                    >
                        <Magnetic>
                            <button
                                onClick={openChat}
                                className="bg-white text-black px-10 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center space-x-3 hover:bg-accent hover:text-white transition-all duration-700 premium-shadow"
                            >
                                <span>Start Inquiry</span>
                                <ArrowRight size={14} />
                            </button>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/about" className="block">
                                <button className="group relative px-10 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] text-white/60 hover:text-white transition-colors duration-500 overflow-hidden">
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
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 pointer-events-none"
            >
                <span className="text-[9px] uppercase tracking-[0.5em] text-white/10 font-bold">Explore</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />
            </motion.div>
        </section>
    );
}
