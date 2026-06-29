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
        
        // Handle scrolling while loading
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        }

        // Simulate progress loading
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 10) + 5; // Random increments
            if (currentProgress > 100) currentProgress = 100;
            setProgress(currentProgress);

            if (currentProgress === 100) {
                clearInterval(interval);
                // Wait slightly after reaching 100% to show completion
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "auto";
                }, 500);
            }
        }, 80);

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
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-foreground"
                >
                    {/* Background Subtle Accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center justify-center space-y-12 w-full px-6">
                        {/* Logo Text Reveal */}
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                                className="text-4xl md:text-6xl font-serif font-normal tracking-[0.2em] uppercase text-foreground"
                            >
                                Ascendia
                            </motion.h1>
                        </div>

                        {/* Loading Progress Wrapper */}
                        <div className="flex flex-col items-center w-full max-w-xs space-y-4">
                            <div className="flex justify-between w-full text-[10px] font-bold uppercase tracking-[0.3em] text-accent/80">
                                <span>Loading Experience</span>
                                <span>{progress}%</span>
                            </div>
                            
                            {/* Loading Bar */}
                            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-accent"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.2, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
