// ============================================
// EXAMPLE 1: Basic Usage in Features Page
// ============================================
import KeyFeatures from '@/components/KeyFeatures';

export default function FeaturesPage() {
  return (
    <main className="pt-20">
      <KeyFeatures />
    </main>
  );
}

// ============================================
// EXAMPLE 2: Usage in Homepage with Other Sections
// ============================================
import KeyFeatures from '@/components/KeyFeatures';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <KeyFeatures />
      <Testimonials />
    </main>
  );
}

// ============================================
// EXAMPLE 3: Custom Wrapper with Different Background
// ============================================
import KeyFeatures from '@/components/KeyFeatures';

export default function CustomPage() {
  return (
    <div className="bg-black">
      <KeyFeatures />
    </div>
  );
}

// ============================================
// EXAMPLE 4: With Custom Padding/Margin
// ============================================
import KeyFeatures from '@/components/KeyFeatures';

export default function SpacedPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mb-20">
        <h1 className="text-center text-4xl font-bold">Our Platform</h1>
      </div>
      <KeyFeatures />
    </main>
  );
}

// ============================================
// EXAMPLE 5: Modified Component - No Auto-Rotate
// ============================================
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FaBrain, FaRocket, FaChartLine, FaGamepad, FaLightbulb } from "react-icons/fa";

export default function KeyFeaturesNoAutoRotate() {
  const [activeIndex, setActiveIndex] = useState(2);

  // Auto-rotate is REMOVED - only manual selection

  const handleFeatureClick = (index) => {
    setActiveIndex(index);
  };

  // ... rest of component code
}

// ============================================
// EXAMPLE 6: Modified Component - Different Stats
// ============================================
"use client";

// ... imports

const customStats = [
  { value: 100000, suffix: "+", label: "Students" },
  { value: 500, suffix: "+", label: "Instructors" },
  { value: 95, suffix: "%", label: "Satisfaction" },
  { value: 150, suffix: "+", label: "Countries" },
];

export default function KeyFeaturesCustomStats() {
  // ... rest of component
  // Replace stats array with customStats
}

// ============================================
// EXAMPLE 7: Modified Component - 3 Features Only
// ============================================
"use client";

// ... imports

const shortFeatures = [
  {
    id: 1,
    icon: FaBrain,
    title: "AI Assistant",
    description: "Smart learning companion",
    image: "/images/feature1.png",
  },
  {
    id: 2,
    icon: FaRocket,
    title: "Fast Learning",
    description: "Accelerated progress tracking",
    image: "/images/feature2.png",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Analytics",
    description: "Detailed performance insights",
    image: "/images/feature3.png",
  },
];

export default function KeyFeaturesShort() {
  const [activeIndex, setActiveIndex] = useState(1); // Middle of 3
  // ... rest of component with shortFeatures
}

// ============================================
// EXAMPLE 8: Integration with Scroll Trigger
// ============================================
"use client";

import { useEffect, useRef } from "react";
import KeyFeatures from '@/components/KeyFeatures';

export default function ScrollTriggeredPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("KeyFeatures section is visible!");
            // Trigger analytics or other actions
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <KeyFeatures />
    </div>
  );
}

// ============================================
// EXAMPLE 9: With Custom Header Above
// ============================================
import KeyFeatures from '@/components/KeyFeatures';
import { motion } from 'framer-motion';

export default function PageWithHeader() {
  return (
    <main className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 px-4"
      >
        <h1 className="text-6xl font-bold gradient-text mb-4">
          Discover Learnix
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Platform pembelajaran terdepan dengan teknologi AI
        </p>
      </motion.div>
      
      <KeyFeatures />
    </main>
  );
}

// ============================================
// EXAMPLE 10: Side-by-Side with Other Content
// ============================================
import KeyFeatures from '@/components/KeyFeatures';

export default function SplitLayoutPage() {
  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-400 mb-4">
              Learnix combines cutting-edge AI technology with proven learning methodologies.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Personalized learning paths</li>
              <li>✓ Real-time progress tracking</li>
              <li>✓ Expert instructors</li>
              <li>✓ 24/7 support</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
          </div>
        </div>
      </div>
      
      <KeyFeatures />
    </main>
  );
}

// ============================================
// EXAMPLE 11: With CTA Button Below
// ============================================
import KeyFeatures from '@/components/KeyFeatures';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PageWithCTA() {
  return (
    <main className="pt-20">
      <KeyFeatures />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-20 px-4"
      >
        <h3 className="text-3xl font-bold mb-6 text-gray-200">
          Ready to Transform Your Learning?
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of students already using Learnix to achieve their goals
        </p>
        <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/30"
          >
            Get Started Free
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}

// ============================================
// EXAMPLE 12: Lazy Loaded Component
// ============================================
import dynamic from 'next/dynamic';

const KeyFeatures = dynamic(() => import('@/components/KeyFeatures'), {
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
  ssr: false, // Disable server-side rendering if needed
});

export default function LazyLoadedPage() {
  return (
    <main className="pt-20">
      <KeyFeatures />
    </main>
  );
}
