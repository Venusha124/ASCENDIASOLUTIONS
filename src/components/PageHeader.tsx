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
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative overflow-hidden bg-transparent min-h-[95svh] md:min-h-0 pt-32 pb-32 md:pt-48 md:pb-24 border-b border-white/5 flex flex-col justify-center">
            
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwaDB2NjBoNjBWMHoiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPPHBhdGggZD0iTTAgMEg2MFY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg2MCIgc3Ryb2tlPSIjQzZBODdDIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNSIvPjxwYXRoIGQ9Ik0wLjUgMHY2MCIgc3Ryb2tlPSIjQzZBODdDIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] [background-size:40px_40px] animate-pan" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            </div>

            {/* Ambient Animated Glows */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.08),transparent_60%)] pointer-events-none z-0"
            />
            <motion.div 
                animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-[-30%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.05),transparent_60%)] pointer-events-none z-0"
            />

            <div className="section-container relative z-10 flex flex-col items-start text-left w-full">
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl w-full relative"
                >
                    {/* Floating Tech Badge (Desktop) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="absolute -top-12 md:-top-20 right-0 hidden md:flex items-center space-x-3 border border-white/5 bg-white/[0.01] px-5 py-2.5 rounded-full backdrop-blur-md"
                    >
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                        </span>
                        <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/30">Secure Connection</span>
                    </motion.div>

                    <div className="flex items-center space-x-6 mb-8 md:mb-10">
                        <div className="w-12 md:w-20 h-[1px] bg-accent/20 relative overflow-hidden">
                             <motion.div 
                                className="w-full h-full bg-accent absolute top-0"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
                        </div>
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
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        {/* Animated Left Border */}
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
                            className="absolute left-0 top-0 w-[1px] bg-accent/40"
                        />
                        <p className="text-accent/80 text-lg md:text-2xl font-serif italic leading-relaxed max-w-3xl pl-6 py-2">
                            {subtitle}
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator (Mobile Only) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-6 md:hidden flex flex-col items-center space-y-4"
            >
                <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
                    <motion.div 
                        className="w-full h-1/2 bg-accent absolute top-0"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll to Explore</div>
            </motion.div>
        </section>
    );
}
