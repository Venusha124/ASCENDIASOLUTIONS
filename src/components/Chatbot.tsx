"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Bot, Sparkles, MessageSquare } from 'lucide-react';
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
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

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

        // Simulate AI Thinking
        setTimeout(() => {
            let botText = "I have received your transmission. Our specialists will analyze your requirements. Would you like to schedule a strategic briefing?";

            if (inputValue.toLowerCase().includes('price') || inputValue.toLowerCase().includes('cost')) {
                botText = "Elite solutions are investment-based. We tailor our tiers to your specific digital zenith. Luxury Branding starts at a premium entry level. Shall I have a consultant reach out?";
            } else if (inputValue.toLowerCase().includes('service') || inputValue.toLowerCase().includes('what do you do')) {
                botText = "We architect Digital Prestige. This includes Luxury Branding, Enterprise Web Ecosystems, and Strategic Digital Consulting. Which tier interests you?";
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botText,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
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
