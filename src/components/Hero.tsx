"use client";

import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
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
            className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#000]"
        >
            {/* Dark Moody Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            </div>

            <div className="section-container relative z-10 flex flex-col items-center justify-center text-center mt-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-col items-center"
                >
                    {/* Top Subtitle with Lines */}
                    <div className="flex items-center space-x-6 mb-8 md:mb-12">
                        <div className="w-12 md:w-24 h-[1px] bg-accent/30" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">Direct from Ascendia</span>
                        <div className="w-12 md:w-24 h-[1px] bg-accent/30" />
                    </div>

                    {/* Massive Serif Headline */}
                    <div className="flex flex-col items-center mb-6 md:mb-10 w-full max-w-5xl mx-auto">
                        <TextReveal
                            text="Digital Mastery."
                            className="text-5xl md:text-8xl lg:text-[9rem] font-serif font-normal text-foreground leading-[1] mb-2 md:mb-4 drop-shadow-2xl"
                            delay={0.1}
                            align="center"
                        />
                        <TextReveal
                            text="Extraordinary Design."
                            className="text-5xl md:text-8xl lg:text-[9rem] font-serif italic font-light text-foreground/90 leading-[1] drop-shadow-2xl"
                            delay={0.3}
                            align="center"
                        />
                    </div>

                    {/* Italic Serif Paragraph */}
                    <motion.p
                        variants={itemVariants}
                        className="text-accent text-lg md:text-2xl lg:text-3xl font-serif italic max-w-xl md:max-w-3xl leading-relaxed mb-12 md:mb-16 drop-shadow-lg opacity-80"
                    >
                        Experience the world&apos;s most guarded creative secret, sustainably crafted from the sovereign studios of Ascendia.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-10 w-full"
                    >
                        <Magnetic>
                            <Link href="/services" className="block">
                                <button
                                    className="bg-accent text-[#050505] px-10 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-[#D4AF37] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(198,168,124,0.15)]"
                                >
                                    Explore the Showroom
                                </button>
                            </Link>
                        </Magnetic>

                        <Magnetic>
                            <Link href="/about" className="flex items-center space-x-4 group cursor-pointer">
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-foreground/80 group-hover:text-accent transition-colors">Our Legacy</span>
                                <div className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                                    <div className="w-3 h-3 ml-1 border-y-[6px] border-y-transparent border-l-[10px] border-l-foreground/80 group-hover:border-l-accent transition-colors" />
                                </div>
                            </Link>
                        </Magnetic>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
