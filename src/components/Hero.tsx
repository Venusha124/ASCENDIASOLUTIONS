"use client";

import { motion, Variants, useMotionValue, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TextReveal from "./animations/TextReveal";
import Magnetic from "./animations/Magnetic";

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollY } = useScroll();
    const yScroll = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityScroll = useTransform(scrollY, [0, 400], [1, 0]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 20;
        const moveY = (clientY - window.innerHeight / 2) / 20;
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
            {/* Dark Moody Background with Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a5d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-30 scale-105" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwaDB2NjBoNjBWMHoiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPPHBhdGggZD0iTTAgMEg2MFY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg2MCIgc3Ryb2tlPSIjQzZBODdDIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIGQ9Ik0wLjUgMHY2MCIgc3Ryb2tlPSIjQzZBODdDIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] [background-size:40px_40px] animate-pan opacity-15" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            </div>

            {/* Ambient Animated Glows with Mouse Parallax */}
            <motion.div 
                style={{ x: mouseX, y: mouseY }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.08),transparent_60%)] pointer-events-none z-0"
            />
            <motion.div 
                style={{ x: mouseX, y: mouseY }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-[-20%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.05),transparent_60%)] pointer-events-none z-0"
            />

            <div className="section-container relative z-10 flex flex-col items-center justify-center text-center mt-20">
                <motion.div
                    style={{ y: yScroll, opacity: opacityScroll }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-col items-center relative"
                >
                    {/* Floating Tech Badge */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute -top-20 right-0 hidden lg:flex items-center space-x-3 border border-white/5 bg-white/[0.01] px-5 py-2.5 rounded-full backdrop-blur-md"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                        </span>
                        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/30">System Online</span>
                    </motion.div>

                    {/* Top Subtitle with Animated Lines */}
                    <div className="flex items-center space-x-6 mb-8 md:mb-12">
                        <div className="w-12 md:w-24 h-[1px] bg-accent/20 relative overflow-hidden">
                            <motion.div 
                                className="w-full h-full bg-accent absolute top-0"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent">Direct from Ascendia</span>
                        <div className="w-12 md:w-24 h-[1px] bg-accent/20 relative overflow-hidden">
                             <motion.div 
                                className="w-full h-full bg-accent absolute top-0"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2.2, ease: "linear", delay: 0.5 }}
                            />
                        </div>
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
