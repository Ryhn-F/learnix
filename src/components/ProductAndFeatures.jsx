"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBrain,
  FaRocket,
  FaChartLine,
  FaGamepad,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaBrain,
    title: "AI Learning Assistant",
    description:
      "Asisten pembelajaran berbasis AI yang memahami gaya belajar Anda secara personal dan adaptif.",
    details:
      "Machine learning algorithms yang mempelajari pola belajar Anda untuk memberikan rekomendasi yang tepat.",
  },
  {
    id: 2,
    icon: FaRocket,
    title: "Smart Notes",
    description:
      "Sistem catatan cerdas yang otomatis mengorganisir dan merangkum materi pembelajaran.",
    details:
      "Auto-summary, highlight otomatis, dan sinkronisasi real-time di semua perangkat Anda.",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Realtime Progress",
    description:
      "Pantau perkembangan belajar Anda dengan dashboard analitik yang komprehensif.",
    details:
      "Visualisasi data yang jelas, prediksi performa, dan laporan progress mingguan otomatis.",
  },
  {
    id: 4,
    icon: FaGamepad,
    title: "Gamified Learning",
    description:
      "Belajar jadi lebih seru dengan sistem gamifikasi yang interaktif dan engaging.",
    details:
      "Sistem poin, level, badge achievement, dan leaderboard untuk motivasi belajar maksimal.",
  },
  {
    id: 5,
    icon: FaLightbulb,
    title: "Smart Recommendations",
    description:
      "Rekomendasi konten pembelajaran yang dipersonalisasi berdasarkan minat dan kemampuan.",
    details:
      "AI-powered content curation yang selalu update dengan materi terbaru dan relevan.",
  },
  {
    id: 6,
    icon: FaUsers,
    title: "Collaborative Learning",
    description:
      "Belajar bersama teman dengan fitur kolaborasi real-time yang powerful.",
    details:
      "Study groups, shared notes, live discussions, dan peer-to-peer learning support.",
  },
];

export default function ProductAndFeatures() {
  const [activeFeature, setActiveFeature] = useState(3); // Card tengah aktif
  const [showModal, setShowModal] = useState(false);

  const cardVariants = {
    inactive: {
      scale: 1,
      opacity: 0.7,
      transition: { duration: 0.3 },
    },
    active: {
      scale: 1.05,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const glowVariants = {
    inactive: {
      boxShadow: "0 0 0 rgba(56,189,248,0)",
      transition: { duration: 0.3 },
    },
    active: {
      boxShadow: [
        "0 0 25px rgba(56,189,248,0.3)",
        "0 0 35px rgba(56,189,248,0.4)",
        "0 0 25px rgba(56,189,248,0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-transparent opacity-50" />

      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10">
        {/* Header with Shimmer Effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/5"
            animate={{
              boxShadow: [
                "0 0 10px rgba(56,189,248,0.2)",
                "0 0 20px rgba(56,189,248,0.4)",
                "0 0 10px rgba(56,189,248,0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-blue-400 text-sm font-semibold tracking-wider shimmer-text">
              LEARNIX FUNCTIONS
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="shimmer-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Future of Learning
            </span>
            <br />
            <span className="text-gray-300">Starts Here</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Jelajahi fitur-fitur canggih yang dirancang untuk mengoptimalkan
            pengalaman belajar Anda di era digital
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;

            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                initial="inactive"
                animate={isActive ? "active" : "inactive"}
                whileHover={!isActive ? "hover" : {}}
                onClick={() => setActiveFeature(feature.id)}
                className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 border-2 border-blue-400/50"
                    : "bg-[#0f172a] border border-gray-700 hover:border-gray-600 hover:bg-purple-500/10"
                }`}
                style={{
                  transformOrigin: "center",
                }}
              >
                {/* Glow Effect for Active Card */}
                {isActive && (
                  <motion.div
                    variants={glowVariants}
                    animate="active"
                    className="absolute inset-0 rounded-2xl"
                    style={{ zIndex: -1 }}
                  />
                )}

                {/* Icon */}
                <motion.div
                  className={`mb-4 ${
                    isActive ? "text-blue-400" : "text-gray-500"
                  }`}
                >
                  <Icon className="text-4xl" />
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isActive ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {feature.description}
                </p>

                {/* Details - Only show on active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-blue-400/30">
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-blue-400 rounded-full"
                    />
                  </motion.div>
                )}

                {/* Hover Border Glow */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl border border-blue-400/20" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Siap merasakan pengalaman belajar masa depan?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
          >
            Mulai Sekarang
          </motion.button>
        </motion.div>
      </div>

      {/* Development Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-400/30 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex justify-center mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <FaRocket className="text-3xl text-white" />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sedang Dalam Pengembangan
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-center mb-6 leading-relaxed">
                Kami sedang bekerja keras untuk menghadirkan pengalaman belajar
                terbaik untuk Anda. Produk ini akan segera diluncurkan!
              </p>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
              >
                Mengerti
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
