"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Bot, Sparkles, MessageSquare, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useChat } from '@/context/ChatContext';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const Chatbot: React.FC = () => {
    const { isOpen, closeChat } = useChat();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Welcome to the Echelon. I am Ascendia's Digital Concierge. How may I elevate your vision today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [userMessageCount, setUserMessageCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const getBotResponse = (input: string): string => {
        const query = input.toLowerCase();

        // Specific Keyword Matches
        if (query.includes('price') || query.includes('cost') || query.includes('rate')) {
            return "Our elite digital solutions are bespoke. Investment tiers vary based on your project's complexity and desired 'Digital Zenith'. Luxury branding starts at a premium entry, while enterprise ecosystems are quoted after a strategic audit. Would you like a consultation?";
        }

        if (query.includes('service') || query.includes('what do you do') || query.includes('offer')) {
            return "We architect 'Digital Prestige'. Our core focus areas are Luxury Branding, High-Performance Web Ecosystems, and Strategic Digital Consulting. Each is designed to elevate your brand to the echelon level.";
        }

        if (query.includes('contact') || query.includes('talk') || query.includes('reach out') || query.includes('call')) {
            return "To discuss your vision in detail, you can use our 'Let's Talk' portal or email our strategy team directly at visions@ascendia.com. We typically respond to elite inquiries within 4-6 business hours.";
        }

        if (query.includes('portfolio') || query.includes('work') || query.includes('projects')) {
            return "Our portfolio is a classified collection of digital masterpieces. You can view our public highlights in the 'Projects' section, or we can provide a curated deck during a private briefing.";
        }

        if (query.includes('who are you') || query.includes('about')) {
            return "I am the Digital Concierge for Ascendia - a boutique architecture firm for the digital age. We don't just build websites; we create digital legacies.";
        }

        if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
            return "Greetings. How may I assist you in your pursuit of digital excellence today?";
        }

        if (query.includes('digital architecture')) {
            return "Digital Architecture at Ascendia involves structural perfection and aesthetic dominance. We build foundations that scale while maintaining a premium user experience.";
        }

        if (query.includes('luxury branding')) {
            return "Luxury Branding is more than a logo; it's an aura. We craft visual identities that resonate with authority and elegance across all digital touchpoints.";
        }

        if (query.includes('strategic audit')) {
            return "Our Strategic Audit analyzes your current digital footprint against echelon standards. It identifies gaps in prestige, performance, and conversion potential.";
        }

        // Generic Fallback Pool to avoid repetition
        const fallbacks = [
            "That is an intriguing inquiry. Our specialists are best equipped to handle specific technical nuances. Shall I flag this for a strategist?",
            "I have noted your transmission. To provide the precision Ascendia is known for, could you elaborate on your project's specific objectives?",
            "Ascendia's approach is highly personalized. While I process your request, would you like to explore our core services or project gallery?",
            "Understood. Our Digital Concierge system is constantly evolving. For immediate assistance with your specific question, our 'Let's Talk' portal is the most direct route."
        ];

        // Basic randomization using input length to keep it consistent but varied
        return fallbacks[input.length % fallbacks.length];
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);
        setUserMessageCount(prev => prev + 1);

        // Simulate AI Thinking
        setTimeout(() => {
            let botText = getBotResponse(userMsg.text);

            // Check if limit is reached (userMessageCount + 1 because the state update is async)
            if (userMessageCount + 1 >= 5) {
                botText = "To provide you with the echelon service you deserve, I've prepared our direct contact details. For comprehensive inquiries, please reach out via email at ascendiasolutions@proton.me, through our Instagram @ascendiasolutions.lk, or use our formal inquiry portal below.";
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botText,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeChat}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Chat Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#0A0A0A] border-l border-white/[0.05] z-[101] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-8 border-b border-white/[0.05] flex items-center justify-between bg-gradient-to-r from-accent/10 to-transparent">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30 relative">
                                    <Bot className="text-accent" size={24} />
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A0A0A]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight">Digital Concierge</h3>
                                    <div className="flex items-center space-x-2">
                                        <Sparkles size={10} className="text-accent" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Systems Optimal</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={closeChat}
                                className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] space-y-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                                        <div className={`p-5 rounded-2xl text-sm leading-relaxed border ${msg.sender === 'user'
                                            ? 'bg-accent border-accent text-white rounded-tr-none'
                                            : 'bg-white/[0.03] border-white/5 text-white/70 rounded-tl-none'
                                            }`}>
                                            {msg.text}

                                            {msg.sender === 'bot' && userMessageCount >= 5 && msg.id === messages[messages.length - 1]?.id && (
                                                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                                                    <div className="flex flex-col space-y-2">
                                                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Direct Channels</span>
                                                        <div className="flex flex-col space-y-1">
                                                            <a href="mailto:ascendiasolutions@proton.me" className="text-accent hover:underline flex items-center space-x-2">
                                                                <Mail size={12} />
                                                                <span>ascendiasolutions@proton.me</span>
                                                            </a>
                                                            <a href="https://instagram.com/ascendiasolutions.lk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center space-x-2">
                                                                <Instagram size={12} />
                                                                <span>@ascendiasolutions.lk</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href="/contact"
                                                        onClick={closeChat}
                                                        className="flex items-center justify-between w-full bg-accent/10 border border-accent/20 hover:bg-accent/20 p-4 rounded-xl transition-all group"
                                                    >
                                                        <span className="text-xs font-bold uppercase tracking-widest text-white">Open Inquiry Portal</span>
                                                        <ArrowUpRight size={14} className="text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-[10px] text-white/20 uppercase tracking-widest px-2">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-8 border-t border-white/[0.05] bg-[#080808]">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Communicate your vision..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 pr-16 outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all text-sm placeholder:text-white/10"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['Digital Architecture', 'Luxury Branding', 'Strategic Audit'].map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setInputValue(tag)}
                                        className="text-[9px] uppercase tracking-widest font-bold text-white/20 bg-white/[0.02] border border-white/5 px-3 py-2 rounded-lg hover:border-accent/30 hover:text-accent transition-all"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Chatbot;
