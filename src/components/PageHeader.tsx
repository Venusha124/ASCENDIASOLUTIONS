"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "./animations/TextReveal";

interface PageHeaderProps {
    title: string;
    subtitle: string;
    accent?: string;
    backgroundImage?: string;
}

export default function PageHeader({ title, subtitle, accent, backgroundImage }: PageHeaderProps) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-black">
            {/* Background Image with Parallax */}
            {backgroundImage && (
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={backgroundImage}
                        alt=""
                        className="w-full h-full object-cover opacity-40 grayscale-[0.5] contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </motion.div>
            )}

            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-1" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl w-full"
                >
                    {accent && (
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-accent mb-4 md:mb-6 block">
                            {accent}
                        </span>
                    )}
                    <TextReveal
                        text={title}
                        className="text-4xl md:text-8xl font-bold tracking-tighter leading-none mb-6 md:mb-8"
                    />
                    <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed max-w-2xl bg-black/20 backdrop-blur-sm p-2 rounded-lg">
                        {subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Modern Divider */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0" />
        </section>
    );
}
