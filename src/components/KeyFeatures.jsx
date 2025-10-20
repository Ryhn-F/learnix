"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  FaBrain,
  FaRocket,
  FaChartLine,
  FaGamepad,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaBrain,
    title: "AI Learning Assistant",
    description:
      "Asisten pembelajaran berbasis AI yang memahami gaya belajar Anda",
    image: "/images/feature1.png",
  },
  {
    id: 2,
    icon: FaRocket,
    title: "Smart Notes",
    description:
      "Sistem catatan cerdas dengan auto-summary dan sinkronisasi real-time",
    image: "/images/feature2.png",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Realtime Progress",
    description:
      "Dashboard analitik komprehensif untuk pantau perkembangan belajar",
    image: "/images/feature3.png",
  },
  {
    id: 4,
    icon: FaGamepad,
    title: "Gamified Learning",
    description: "Belajar lebih seru dengan sistem gamifikasi yang interaktif",
    image: "/images/feature4.png",
  },
  {
    id: 5,
    icon: FaLightbulb,
    title: "Smart Recommendations",
    description:
      "Rekomendasi konten pembelajaran yang dipersonalisasi untuk Anda",
    image: "/images/feature5.png",
  },
];

export default function KeyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
    // On desktop, scroll to feature
    if (window.innerWidth >= 1024) {
      scrollToFeature(index);
    }
  };

  const scrollToFeature = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const items = container.children;
      if (items[index]) {
        const item = items[index];
        item.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && window.innerWidth >= 1024) {
      const container = scrollContainerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      const items = Array.from(container.children);
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      scrollToFeature(2); // Middle item on desktop
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container && window.innerWidth >= 1024) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeIndex]);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
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
            <span className="text-blue-400 text-sm font-semibold tracking-wider">
              FITUR UNGGULAN
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Teknologi Pembelajaran
            </span>
            <br />
            <span className="text-gray-200">Masa Depan</span>
          </h2>
        </motion.div>

        {/* Desktop Layout: 2 Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Feature List with Scroll Effect */}
          <div className="relative h-[500px] flex items-center">
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollContainerRef}
              className="w-full h-full overflow-y-auto scrollbar-hide space-y-3 py-[200px]"
              style={{
                scrollSnapType: "y mandatory",
                scrollPaddingTop: "200px",
                scrollPaddingBottom: "200px",
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeIndex === index;

                const scale = isActive ? 1 : 0.95;
                const opacity = isActive ? 1 : 0.5;

                return (
                  <motion.div
                    key={feature.id}
                    layout
                    initial={false}
                    animate={{
                      scale: scale,
                      opacity: opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      layout: { duration: 0.4 },
                    }}
                    onClick={() => handleFeatureClick(index)}
                    className={`relative cursor-pointer rounded-xl p-5 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-900/30 to-transparent border-2 border-blue-500/40"
                        : "bg-[#0f172a]/50 border border-gray-700/50 hover:border-gray-600"
                    }`}
                    style={{
                      transformOrigin: "center",
                      scrollSnapAlign: "center",
                    }}
                  >
                    {/* Glow Effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(56,189,248,0.3)",
                            "0 0 30px rgba(56,189,248,0.4)",
                            "0 0 20px rgba(56,189,248,0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ zIndex: -1 }}
                      />
                    )}

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                        }}
                        className={`text-3xl transition-colors duration-300 ${
                          isActive ? "text-blue-400" : "text-gray-500"
                        }`}
                      >
                        <Icon />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3
                          className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                            isActive ? "text-blue-400" : "text-gray-400"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isActive ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-blue-400 rounded-full"
                        ></motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Image Area */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Container with Glow */}
            <div className="relative w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/30 overflow-hidden">
              {/* Glow Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(56,189,248,0.3)",
                    "0 0 50px rgba(139,92,246,0.4)",
                    "0 0 30px rgba(56,189,248,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Actual Feature Image with Fade Transition */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/50 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout: Progressive Step Design */}
        <div className="lg:hidden">
          {/* Active Feature Display */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(56,189,248,0.4)",
                      "0 0 40px rgba(56,189,248,0.6)",
                      "0 0 20px rgba(56,189,248,0.4)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/40 flex items-center justify-center">
                  {(() => {
                    const Icon = features[activeIndex].icon;
                    return <Icon className="text-5xl text-blue-400" />;
                  })()}
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-blue-400 mb-3"
            >
              {features[activeIndex].title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base text-gray-400 max-w-md mx-auto leading-relaxed"
            >
              {features[activeIndex].description}
            </motion.p>
          </motion.div>

          {/* Image Preview */}
          <motion.div
            key={`img-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-8"
          >
            <div className="relative w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/30 overflow-hidden">
              {/* Glow Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(56,189,248,0.3)",
                    "0 0 40px rgba(139,92,246,0.4)",
                    "0 0 20px rgba(56,189,248,0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Image */}
              <img
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                className="w-full h-full object-contain"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/50 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 flex-wrap">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={feature.id}
                  onClick={() => handleFeatureClick(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative transition-all duration-300 ${
                    isActive ? "w-14 h-14" : "w-12 h-12"
                  }`}
                >
                  {/* Glow for Active */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 15px rgba(56,189,248,0.4)",
                          "0 0 25px rgba(56,189,248,0.6)",
                          "0 0 15px rgba(56,189,248,0.4)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Button */}
                  <div
                    className={`relative w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/30 border-2 border-blue-400"
                        : "bg-[#0f172a]/50 border border-gray-700/50 hover:border-blue-400/50"
                    }`}
                  >
                    <Icon
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-blue-400 text-xl"
                          : "text-gray-500 text-lg"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
