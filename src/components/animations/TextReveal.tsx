"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    align?: "left" | "center" | "right";
}

export default function TextReveal({ text, className, delay = 0, align = "left" }: TextRevealProps) {
    const words = text.split(" ");

    const alignmentClasses = {
        left: "justify-start text-left",
        center: "justify-center text-center",
        right: "justify-end text-right",
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: delay + 0.5,
            },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            scale: 1.1,
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap items-center ${alignmentClasses[align]} ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    className="inline-block mr-[0.2em] mb-[0.1em]"
                    key={index}
                >
                    <span className={
                        word.includes("The") || word.includes("Experience") || word.includes("Echelon")
                            ? "text-gradient"
                            : ""
                    }>
                        {word}
                    </span>
                </motion.span>
            ))}
        </motion.div>
    );
}
