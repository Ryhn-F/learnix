"use client";

import { motion } from "framer-motion";

export default function AnimatedButton({ children, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white glow-effect",
    secondary: "glass-effect text-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
