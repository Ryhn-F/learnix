"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl font-bold gradient-text mb-4"
        >
          404
        </motion.div>
        
        <h1 className="text-4xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
        
        <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto">
          Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
        </p>
        
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold glow-effect"
          >
            Kembali ke Home
          </motion.button>
        </Link>
        
        <div className="mt-12 flex justify-center space-x-4">
          <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-foreground/30">•</span>
          <Link href="/features" className="text-foreground/60 hover:text-primary transition-colors">
            Features
          </Link>
          <span className="text-foreground/30">•</span>
          <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
