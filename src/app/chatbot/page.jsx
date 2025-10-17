"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! Saya assistant Learnix. Ada yang bisa saya bantu?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showChoices, setShowChoices] = useState(true);
  const [shouldScroll, setShouldScroll] = useState(true);
  const messagesEndRef = useRef(null);

  // Predefined questions and answers
  const questionChoices = [
    {
      id: "q1",
      question: "Apa itu Learnix?",
      answer: "Learnix adalah platform pembelajaran cerdas berbasis AI yang membantu siswa memahami materi dengan cara adaptif dan interaktif.",
    },
    {
      id: "q2",
      question: "Bagaimana cara kerja AI di Learnix?",
      answer: "AI di Learnix menganalisis gaya belajar kamu dan menyesuaikan konten serta penjelasan sesuai kebutuhanmu.",
    },
    {
      id: "q3",
      question: "Apakah Learnix bisa digunakan gratis?",
      answer: "Versi dasar Learnix dapat digunakan gratis, dengan fitur premium opsional untuk pengalaman belajar yang lebih lengkap.",
    },
    {
      id: "q4",
      question: "Teknologi apa saja yang digunakan Learnix?",
      answer: "Learnix dibangun dengan teknologi modern seperti Next.js, TailwindCSS, Framer Motion, React Bits, Firebase, dan Gemini AI.",
    },
    {
      id: "q5",
      question: "Apakah Learnix cocok untuk pelajar SMA?",
      answer: "Ya! Learnix dirancang untuk membantu pelajar tingkat SMP hingga SMA memahami konsep dengan bantuan AI interaktif.",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (shouldScroll) {
      scrollToBottom();
    }
  }, [messages, shouldScroll]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Enable auto-scroll for manual text input
    setShouldScroll(true);

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    setShowChoices(false);

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Terima kasih atas pertanyaannya! Saya di sini untuk membantu Anda belajar lebih efektif.",
        "Itu pertanyaan yang bagus! Mari kita eksplorasi topik ini bersama-sama.",
        "Saya dapat membantu Anda dengan materi pembelajaran, tips belajar, dan banyak lagi!",
        "Dengan Learnix, belajar menjadi lebih personal dan menyenangkan. Ada yang ingin Anda pelajari?",
        "Saya siap membantu! Apakah Anda ingin memulai dengan topik tertentu?",
      ];

      const botMessage = {
        id: Date.now(),
        type: "bot",
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      setShowChoices(true);
    }, 800);
  };

  const handleChoiceClick = (choice) => {
    // Disable auto-scroll for choice clicks
    setShouldScroll(false);
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      text: choice.question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setShowChoices(false);

    // Simulate bot response with predefined answer
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        text: choice.answer,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      setShowChoices(true);
    }, 600);
  };

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="gradient-text shimmer-text">Chatbot Preview</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Explore how Learnix AI Assistant responds to your curiosity.
            </p>
          </motion.div>

          {/* Main Layout: Chat + Features */}
          <div className="flex flex-col gap-8">
            {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl border border-primary/30 overflow-hidden shadow-2xl"
            style={{
              boxShadow: "0 0 40px rgba(99, 102, 241, 0.2), 0 0 80px rgba(139, 92, 246, 0.1)",
            }}
          >
            {/* Messages Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4 custom-scrollbar">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-5 py-3 ${
                        message.type === "user"
                          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                          : "glass-effect border border-blue-400/20 text-gray-200"
                      }`}
                    >
                      <p className="text-sm sm:text-base">{message.text}</p>
                      <span className="text-xs opacity-60 mt-1 block">
                        {message.timestamp.toLocaleTimeString("id-ID", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="glass-effect border border-blue-400/20 rounded-2xl px-5 py-3">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-primary/20 p-4 bg-background/30">
              {/* Question Choices */}
              <AnimatePresence>
                {showChoices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <p className="text-sm text-foreground/60 mb-3 font-medium">
                      Pilih pertanyaan:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {questionChoices.map((choice) => (
                        <motion.button
                          key={choice.id}
                          onClick={() => handleChoiceClick(choice)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-400/30 text-blue-300 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:border-blue-400/50"
                        >
                          {choice.question}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Text Input Form */}
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Atau ketik pesan Anda..."
                  className="flex-1 px-4 py-3 rounded-xl glass-effect border border-primary/30 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.1)",
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{
                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  Send
                </motion.button>
              </form>
            </div>
            </motion.div>

            {/* Feature Points - Right Side (Horizontal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-row gap-6 justify-center items-center"
            >
              {[
                {
                  Icon: RiRobot2Fill,
                  title: "AI-Powered",
                  desc: "Didukung oleh teknologi AI terkini",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  Icon: HiLightningBolt,
                  title: "Instant Response",
                  desc: "Jawaban cepat dan akurat",
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  Icon: IoPersonCircle,
                  title: "Personalized",
                  desc: "Disesuaikan dengan kebutuhan Anda",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="relative group cursor-pointer flex flex-col items-center text-center"
                >
                  {/* Circular Point with Glow */}
                  <div className="relative flex-shrink-0 mb-4">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl opacity-60 group-hover:opacity-100`}
                      animate={{
                        scale: [1, 1.4, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover:border-white/40 transition-all duration-300`}>
                      <item.Icon className="text-5xl text-white" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="max-w-[140px]">
                    <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8b5cf6, #a78bfa);
        }
      `}</style>
    </main>
  );
}
