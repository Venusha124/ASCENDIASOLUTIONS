"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        setProgress(0);
        
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        }

        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 8) + 2; 
            if (currentProgress > 100) currentProgress = 100;
            setProgress(currentProgress);

            if (currentProgress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "auto";
                }, 800);
            }
        }, 60);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = "auto";
        };
    }, [pathname]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                    exit={{ 
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#050505] text-foreground px-8 py-12 md:p-16 overflow-hidden"
                >
                    {/* Background Subtle Accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[radial-gradient(circle_at_center,rgba(198,168,124,0.1),transparent_50%)] rounded-full pointer-events-none blur-3xl z-0" />

                    {/* Top Info */}
                    <div className="w-full flex justify-between items-start relative z-10 overflow-hidden">
                        <motion.span 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-accent"
                        >
                            Loading Environment
                        </motion.span>
                        <motion.span 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                            className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-foreground/50"
                        >
                            Ascendia Digital
                        </motion.span>
                    </div>

                    {/* Massive Typography Counter */}
                    <div className="relative z-10 w-full flex items-center justify-center flex-grow">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1, y: -50 }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="flex items-baseline"
                        >
                            <h2 className="text-[25vw] md:text-[20vw] font-serif font-light leading-none tracking-tighter text-foreground tabular-nums">
                                {progress}
                            </h2>
                            <span className="text-[8vw] md:text-[5vw] font-serif italic text-accent ml-2 md:ml-4 -translate-y-4 md:-translate-y-10">%</span>
                        </motion.div>
                    </div>

                    {/* Bottom Loader Line */}
                    <div className="w-full relative z-10 flex flex-col items-center">
                         <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent/50 to-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
