'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { SiNextdotjs, SiTailwindcss, SiFramer, SiFirebase, SiGooglecloud } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const technologies = [
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: 'Framework React modern untuk SSR dan routing dinamis.',
    color: 'from-gray-400 to-gray-600',
    glowColor: 'rgba(156, 163, 175, 0.5)',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    description: 'Utility-first CSS framework untuk styling cepat dan responsif.',
    color: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(56, 189, 248, 0.5)',
  },
  {
    name: 'Framer Motion',
    icon: SiFramer,
    description: 'Library animasi untuk React dengan efek transisi halus.',
    color: 'from-pink-400 to-purple-500',
    glowColor: 'rgba(168, 85, 247, 0.5)',
  },
  {
    name: 'React Bits',
    icon: FaReact,
    description: 'Koleksi efek dan komponen interaktif siap pakai.',
    color: 'from-blue-400 to-cyan-500',
    glowColor: 'rgba(56, 189, 248, 0.5)',
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    description: 'Platform cloud untuk hosting, database, dan autentikasi.',
    color: 'from-yellow-400 to-orange-500',
    glowColor: 'rgba(251, 146, 60, 0.5)',
  },
  {
    name: 'Gemini AI',
    icon: SiGooglecloud,
    description: 'Model AI generatif Google untuk analisis dan konteks pembelajaran.',
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
];

const TechIcon = ({ tech, index, startAngle, radius, rotationOffset }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        rotate: startAngle + rotationOffset,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Orbit Arm */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: `${radius}px`,
          height: '1px',
          transformOrigin: 'left center',
        }}
      >
        {/* Icon Wrapper at the end of the arm */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
        >
          <motion.div
            className="relative flex items-center justify-center w-28 h-28 rounded-full border-2 backdrop-blur-md cursor-pointer"
            style={{
              borderColor: isHovered ? tech.glowColor : 'rgba(75, 85, 99, 0.4)',
              backgroundColor: isHovered ? 'rgba(30, 41, 59, 0.6)' : 'rgba(30, 41, 59, 0.3)',
              boxShadow: isHovered ? `0 0 40px ${tech.glowColor}` : `0 0 10px ${tech.glowColor}`,
              rotate: -(startAngle + rotationOffset),
            }}
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{
              scale: { duration: 0.2, ease: 'easeOut' },
            }}
          >
            <Icon
              className="text-5xl"
              style={{
                color: isHovered ? tech.glowColor.replace('0.5', '1') : tech.glowColor,
                filter: isHovered ? 'brightness(1.5) drop-shadow(0 0 8px currentColor)' : 'brightness(1)',
              }}
            />

            {/* Tooltip - Counter-rotated to stay upright */}
            {isHovered && (
              <motion.div
                className="fixed z-50"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <div className="relative -translate-y-40">
                  <div className="w-64 px-5 py-4 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-blue-400/40 shadow-2xl">
                    <h4 className="text-base font-bold mb-2 text-white">{tech.name}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{tech.description}</p>
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-transparent border-t-gray-900/95" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Technology() {
  const [rotationOffset, setRotationOffset] = useState(0);
  const radius = 280;

  // Continuous rotation effect - never stops
  React.useEffect(() => {
    const startTime = Date.now();
    const duration = 20000; // 20 seconds for full rotation

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      setRotationOffset(progress * 360);
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950" />
      
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Powered by Modern Technologies
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore the tech behind Learnix's intelligent ecosystem.
          </p>
        </motion.div>

        {/* Circular Orbit Layout */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ height: '750px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Center Logo */}
            <motion.div
              className="relative z-20 flex items-center justify-center w-52 h-52 rounded-full border-4 border-blue-400/60 bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-xl overflow-hidden"
              style={{
                boxShadow: '0 0 80px rgba(56,189,248,0.4), inset 0 0 40px rgba(56,189,248,0.2)',
              }}
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  '0 0 80px rgba(56,189,248,0.4), inset 0 0 40px rgba(56,189,248,0.2)',
                  '0 0 120px rgba(56,189,248,0.6), inset 0 0 60px rgba(56,189,248,0.3)',
                  '0 0 80px rgba(56,189,248,0.4), inset 0 0 40px rgba(56,189,248,0.2)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img 
                src="/images/Logo.png" 
                alt="Learnix Logo" 
                className="w-32 h-32 object-contain"
              />
            </motion.div>

            {/* Technology Icons - Each orbiting independently */}
            {technologies.map((tech, index) => {
              // Perfect circular distribution starting from top (12 o'clock = -90°)
              // Each icon is 60° apart (360° / 6 icons)
              const startAngle = -90 + (index * 60);
              
              return (
                <TechIcon
                  key={tech.name}
                  tech={tech}
                  index={index}
                  startAngle={startAngle}
                  radius={radius}
                  rotationOffset={rotationOffset}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
