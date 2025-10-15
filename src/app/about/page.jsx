"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaBrain,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

export default function About() {
  const timeline = [
    {
      year: "2015",
      title: "Learnix Founded",
      desc: "Vision for AI-based education begins",
    },
    {
      year: "2018",
      title: "AI Integration",
      desc: "Smart learning algorithms introduced",
    },
    {
      year: "2020",
      title: "SmartNotes Beta",
      desc: "Real-time AI summarization launched",
    },
    {
      year: "2024",
      title: "Learnix 3.0",
      desc: "Collaborative AI-assisted learning",
    },
  ];

  const mission = [
    "Democratize access to quality education through technology",
    "Empower learners with AI-driven personalized experiences",
    "Build adaptive learning systems that evolve with students",
    "Foster collaboration and knowledge sharing globally",
  ];

  const team = [
    { name: "Alex Chen", role: "CEO & Founder", tagline: "Visionary Leader" },
    { name: "Sarah Johnson", role: "CTO", tagline: "Tech Innovator" },
    { name: "Michael Park", role: "Head of AI", tagline: "AI Architect" },
    { name: "Emma Davis", role: "Lead Designer", tagline: "UX Maestro" },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#1e1b4b] -z-10" />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-6 py-3 rounded-full border border-blue-400/30 bg-blue-500/5"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(56,189,248,0.2)",
                  "0 0 40px rgba(56,189,248,0.4)",
                  "0 0 20px rgba(56,189,248,0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-blue-400 text-sm font-semibold tracking-wider">
                ABOUT LEARNIX
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Empowering the Next Generation
              </motion.span>
              <br />
              <span className="text-gray-200">Through Smart Learning</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At Learnix, we combine innovation and education to create a
              smarter, more adaptive way of learning for the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Animated Icons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 flex items-center justify-center"
            >
              <div className="relative w-64 h-64">
                {[FaRocket, FaLightbulb, FaBrain, FaGlobe].map(
                  (Icon, index) => {
                    const angle = (index / 4) * 2 * Math.PI;
                    const radius = 100;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <motion.div
                        key={index}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          x: x,
                          y: y,
                        }}
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <motion.div
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-md border border-blue-400/30 flex items-center justify-center"
                          animate={{
                            rotate: -360,
                            boxShadow: [
                              "0 0 20px rgba(56,189,248,0.3)",
                              "0 0 40px rgba(139,92,246,0.4)",
                              "0 0 20px rgba(56,189,248,0.3)",
                            ],
                          }}
                          transition={{
                            rotate: {
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            boxShadow: { duration: 3, repeat: Infinity },
                          }}
                        >
                          <Icon className="text-2xl text-blue-400" />
                        </motion.div>
                      </motion.div>
                    );
                  }
                )}

                {/* Center Icon */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border-2 border-blue-400/40 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 30px rgba(56,189,248,0.4)",
                      "0 0 50px rgba(139,92,246,0.5)",
                      "0 0 30px rgba(56,189,248,0.4)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaHeart className="text-4xl text-blue-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Vision */}
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To revolutionize education by creating an intelligent learning
                  ecosystem that adapts to every student's unique journey,
                  making quality education accessible, engaging, and effective
                  for everyone, everywhere.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="space-y-4">
                  {mission.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-400 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all" />
                      <p className="text-gray-300 group-hover:text-blue-300 transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Join Us in Building the Future of Learning
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Be part of the revolution that's transforming education worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% auto" }}
                />
                <span className="relative z-10">Explore Our Features</span>
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-blue-400/50 text-blue-400 font-semibold hover:bg-blue-400/10 transition-colors"
              >
                Get Started with Learnix
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
