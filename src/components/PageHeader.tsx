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
        <section className="relative overflow-hidden bg-[#000] pt-32 pb-16 md:pt-48 md:pb-24 border-b border-white/5">

            <div className="section-container relative z-10 flex flex-col items-start text-left w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl w-full"
                >
                    <div className="flex items-center space-x-6 mb-8 md:mb-10">
                        <div className="w-12 md:w-20 h-[1px] bg-accent/40" />
                        {accent && (
                            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-accent">
                                {accent}
                            </span>
                        )}
                        <div className="w-12 md:w-20 h-[1px] bg-accent/40" />
                    </div>

                    <TextReveal
                        text={title}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.05] mb-6 md:mb-10 text-foreground"
                    />
                    
                    <p className="text-accent/80 text-lg md:text-2xl font-serif italic leading-relaxed max-w-3xl border-l border-white/10 pl-6 py-2">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
