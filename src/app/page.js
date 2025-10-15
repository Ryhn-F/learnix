"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import FeatureCard from "@/components/FeatureCard";
import StatsCounter from "@/components/StatsCounter";
import ProductAndFeatures from "@/components/ProductAndFeatures";
import KeyFeatures from "@/components/KeyFeatures";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const features = [
    {
      title: "AI Learning Assistant",
      description: "Asisten AI yang membantu memahami materi dengan cara yang personal dan adaptif.",
      icon: "🤖"
    },
    {
      title: "Smart Notes",
      description: "Catatan otomatis berbasis konteks yang memudahkan review materi.",
      icon: "📝"
    },
    {
      title: "Realtime Progress",
      description: "Analisis hasil belajar secara real-time dengan visualisasi yang jelas.",
      icon: "📊"
    },
    {
      title: "Gamified Learning",
      description: "Sistem poin dan badge interaktif yang membuat belajar lebih menyenangkan.",
      icon: "🎮"
    }
  ];

  return (
    <main className="relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold glow-text"
            >
              Learn Smarter.
              <br />
              <span className="gradient-text">Lead the Future.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto"
            >
              Platform pembelajaran pintar berbasis AI yang membantu Anda beradaptasi dengan dunia digital
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold glow-effect transition-all duration-300"
                >
                  Start Learning
                </motion.button>
              </Link>
              
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-effect rounded-full text-foreground font-semibold transition-all duration-300"
                >
                  Explore Features
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Product & Features Section - New Interactive Component */}
      <ProductAndFeatures />

      <KeyFeatures />
    </main>
  );
}
