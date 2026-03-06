"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const words = text.split(" ");

    const container: any = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * 0.1 + 0.3 },
        }),
    };

    const child: any = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    className="mr-[0.25em] mb-[0.1em]"
                    key={index}
                >
                    {word === "The" || word === "Experience." || word === "Echelon" ? (
                        <span className="text-gradient">{word}</span>
                    ) : (
                        word
                    )}
                </motion.span>
            ))}
        </motion.div>
    );
}
