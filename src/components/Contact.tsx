"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Instagram, Globe, Sparkles } from "lucide-react";
import Magnetic from "./animations/Magnetic";

type FormState = "idle" | "loading" | "success" | "error";
type Tier = "Luxury Branding" | "Enterprise Web" | "Other";

const tiers: Tier[] = ["Luxury Branding", "Enterprise Web", "Other"];

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [tier, setTier] = useState<Tier>("Luxury Branding");
    const [message, setMessage] = useState("");
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMessage("Please fill in all fields before submitting.");
            setFormState("error");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            setFormState("error");
            return;
        }

        setFormState("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, company, phone, tier, message }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Something went wrong.");
            }

            setFormState("success");
            setName("");
            setEmail("");
            setCompany("");
            setPhone("");
            setMessage("");
        } catch (err: any) {
            setErrorMessage(err.message || "Failed to send. Please try again.");
            setFormState("error");
        }
    };

    const isLoading = formState === "loading";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <section id="contact" className="pb-24 md:pb-40 relative bg-transparent overflow-hidden">
            {/* Background Narrative Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(198,168,124,0.05),transparent_70%)]" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">

                    {/* Left Column: Global Access Hub */}
                    <div className="lg:col-span-4 space-y-12 md:space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-left"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif italic text-accent mb-12">Global Access</h2>

                            <div className="space-y-10 md:space-y-12">
                                {/* Availability Status */}
                                <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 text-accent group-hover:scale-110 transition-transform duration-700">
                                        <Globe size={60} />
                                    </div>
                                    <p className="text-sm font-serif italic text-white/30 mb-4">Studio Status</p>
                                    <div className="flex items-center space-x-4">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                        </span>
                                        <span className="text-xl md:text-2xl font-serif text-foreground">Accepting Elite Projects</span>
                                    </div>
                                    <p className="mt-4 text-base font-serif italic text-white/20 pl-6 border-l border-white/5">Global reach, boutique attention.</p>
                                </div>

                                {/* Contact Methods */}
                                <div className="space-y-10 pl-2">
                                    <div className="group cursor-pointer">
                                        <p className="text-sm font-serif italic text-white/20 mb-3 group-hover:text-accent transition-colors">Direct Correspondence</p>
                                        <div className="flex items-center space-x-6">
                                            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                                                <Mail size={18} />
                                            </div>
                                            <a href="mailto:ascendiasolutions@proton.me" className="text-xl md:text-2xl font-serif text-foreground hover:text-accent transition-colors">
                                                ascendiasolutions@proton.me
                                            </a>
                                        </div>
                                    </div>

                                    <div className="group cursor-pointer">
                                        <p className="text-sm font-serif italic text-white/20 mb-3 group-hover:text-accent transition-colors">Digital Network</p>
                                        <div className="flex items-center space-x-6">
                                            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-500">
                                                <Instagram size={18} />
                                            </div>
                                            <a href="https://www.instagram.com/ascendiasolutions" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-serif text-foreground hover:text-accent transition-colors">
                                                @ascendiasolutions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Elite Inquiry Form */}
                    <div className="lg:col-span-8">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-[#080808] border border-white/[0.05] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 relative shadow-2xl text-left"
                        >
                            <AnimatePresence mode="wait">
                                {formState === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-24 h-24 mx-auto rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(198,168,124,0.1)]">
                                            <CheckCircle className="text-accent" size={40} />
                                        </div>
                                        <h3 className="text-5xl font-serif font-normal tracking-tight mb-6 text-foreground">Success Artifact Received.</h3>
                                        <p className="text-foreground/50 text-xl font-serif italic max-w-md mx-auto leading-relaxed">
                                            Your inquiry has reached the Echelon. Our visionaries will contact you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setFormState("idle")}
                                            className="mt-12 text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 hover:text-accent transition-all duration-500"
                                        >
                                            Submit another vision
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div key="form" className="space-y-16">
                                        <motion.div variants={itemVariants}>
                                            <h3 className="text-5xl md:text-6xl font-serif font-normal tracking-tight mb-6 text-foreground">Start your <span className="text-accent italic">Ascension.</span></h3>
                                            <p className="text-foreground/50 text-lg font-serif italic max-w-xl">
                                                Select your project tier below and share the core vision of your digital artifact.
                                            </p>
                                        </motion.div>

                                        <form onSubmit={handleSubmit} className="space-y-12">
                                            {/* Tier Selector */}
                                            <motion.div variants={itemVariants} className="space-y-6">
                                                <p className="text-lg font-serif italic text-white/30 border-b border-white/5 pb-2">Project Service Tier</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                    {tiers.map((t) => (
                                                        <button
                                                            key={t}
                                                            type="button"
                                                            onClick={() => setTier(t)}
                                                            className={`px-6 py-5 rounded-2xl text-lg font-serif transition-all duration-500 ${tier === t
                                                                ? "bg-accent border border-accent text-[#050505] shadow-[0_0_30px_rgba(198,168,124,0.2)]"
                                                                : "bg-white/[0.02] border border-white/5 text-foreground/50 hover:border-accent/40 hover:text-accent"
                                                                }`}
                                                        >
                                                            {t}
                                                        </button>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            {/* Inputs */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
                                                <motion.div variants={itemVariants} className="space-y-3">
                                                    <label className="text-base font-serif italic text-white/30 ml-4">Your Name</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Full Name"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-full px-8 py-5 outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10 text-lg font-serif"
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants} className="space-y-3">
                                                    <label className="text-base font-serif italic text-white/30 ml-4">Email Identity</label>
                                                    <input
                                                        type="email"
                                                        placeholder="email@vault.com"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-full px-8 py-5 outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10 text-lg font-serif"
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants} className="space-y-3">
                                                    <label className="text-base font-serif italic text-white/30 ml-4">Company / Organization</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Ascendia Solutions"
                                                        value={company}
                                                        onChange={(e) => setCompany(e.target.value)}
                                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-full px-8 py-5 outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10 text-lg font-serif"
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants} className="space-y-3">
                                                    <label className="text-base font-serif italic text-white/30 ml-4">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        placeholder="+1 (555) 000-0000"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        className="w-full bg-white/[0.02] border border-white/[0.05] rounded-full px-8 py-5 outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10 text-lg font-serif"
                                                    />
                                                </motion.div>
                                            </div>

                                            <motion.div variants={itemVariants} className="space-y-3 pt-4">
                                                <label className="text-base font-serif italic text-white/30 ml-4">The Vision</label>
                                                <textarea
                                                    rows={5}
                                                    placeholder="Describe the elite artifact you wish to create..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="w-full bg-white/[0.02] border border-white/[0.05] rounded-[2rem] px-8 py-6 outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10 resize-none text-lg font-serif"
                                                />
                                            </motion.div>

                                            {/* Feedback */}
                                            {formState === "error" && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="flex items-center space-x-3 text-red-400 bg-red-400/5 border border-red-400/10 p-6 rounded-2xl"
                                                >
                                                    <AlertCircle size={18} />
                                                    <p className="text-xs font-medium">{errorMessage}</p>
                                                </motion.div>
                                            )}

                                            {/* Submit */}
                                            <motion.div variants={itemVariants} className="flex justify-center pt-8">
                                                <Magnetic>
                                                    <button
                                                        type="submit"
                                                        disabled={isLoading}
                                                        className="group bg-accent text-[#050505] px-16 py-6 rounded-full text-xl font-serif flex items-center space-x-4 hover:bg-white hover:text-[#050505] transition-all duration-700 shadow-[0_0_30px_rgba(198,168,124,0.15)] disabled:opacity-50"
                                                    >
                                                        {isLoading ? (
                                                            <>
                                                                <span>Transmitting Artifact...</span>
                                                                <Loader2 size={24} className="animate-spin" />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <span>Transmit Inquiry</span>
                                                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                                <Sparkles size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            </>
                                                        )}
                                                    </button>
                                                </Magnetic>
                                            </motion.div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
