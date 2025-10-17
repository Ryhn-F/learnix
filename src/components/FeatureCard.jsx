"use client";

import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export default function FeatureCard({ title, description, icon, index }) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 cursor-pointer"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}
