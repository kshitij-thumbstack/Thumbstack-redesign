"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Principles() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const principles = [
    {
      title: "Strategise",
      desc: "Crafting visual and functional experiences that connect.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      )
    },
    {
      title: "Design",
      desc: "Crafting visual and functional experiences that connect.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 19.5V22M14 19.5a2 2 0 0 0-2-2h-5a2 2 0 0 1-2-2v-4" />
          <path d="M19 11v-4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z" />
        </svg>
      )
    },
    {
      title: "Create",
      desc: "Crafting visual and functional experiences that connect.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
          <path d="m5 3-1 3-3 1 3 1 1 3 1-3 3-1-3-1Z" />
        </svg>
      )
    },
    {
      title: "Develop",
      desc: "Crafting visual and functional experiences that connect.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
        </svg>
      )
    },
    {
      title: "Maintain",
      desc: "Crafting visual and functional experiences that connect.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Optimise",
      desc: "Crafting visual and functional experiences that connect.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  const marqueeItems = ["MOBILE APPS", "HUMAN-CENTERED PRODUCTS", "END-TO-END OWNERSHIP", "ECOMMERCE"];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={containerRef}
      className="min-h-[80vh] w-full flex flex-col items-center justify-start md:justify-center snap-start relative bg-[#0B1510] text-white overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-0"
    >
      <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full relative mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-[clamp(1.75rem,5vw,4.5rem)] font-bold leading-[1.1] max-w-4xl tracking-tighter"
          >
            We Build Like It&apos;s Ours.<br />
            <span className="text-gray-400">No Shortcuts. No Templates.</span><br />
            Just Work That Holds Up.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex flex-col items-start md:items-end gap-2 shrink-0"
          >
            <span className="text-mint font-mono text-xs sm:text-sm tracking-widest uppercase">Services</span>
            <div className="h-[1px] w-12 sm:w-16 md:w-24 bg-mint/30" />
          </motion.div>
        </div>

        {/* Principles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-x-12 lg:gap-x-24 gap-y-10 md:gap-y-24 w-full"
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => setActiveCard(i)}
              className={`flex flex-col gap-5 items-start relative group cursor-pointer transition-all duration-300 p-6 -m-6 rounded-2xl ${activeCard === i ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'} ${activeCard !== null && activeCard !== i ? 'opacity-40' : 'opacity-100'}`}
            >
              {/* Icon */}
              <div className={`${activeCard === i ? 'text-mint' : 'text-white/90 group-hover:text-mint'} transition-colors`}>
                {p.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-colors ${activeCard === i ? 'text-mint' : 'text-white group-hover:text-mint'}`}>
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#8D9690] leading-relaxed max-w-[280px]">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Marquee Banner */}
      <div className="mt-10 sm:mt-12 md:mt-16 w-full py-2 sm:py-3 md:py-4 bg-sidebar/50 backdrop-blur-sm relative z-20 overflow-hidden">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex whitespace-nowrap items-center shrink-0"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0">
                {[...Array(2)].map((_, j) => (
                  <div key={j} className="flex shrink-0">
                    {marqueeItems.map((item, k) => (
                      <span
                        key={k}
                        className={`${k % 2 === 0 ? 'text-white/80' : 'text-mint/40'} font-bold text-sm sm:text-xl md:text-3xl lg:text-4xl tracking-widest px-2 sm:px-4 md:px-8 select-none flex items-center gap-2 sm:gap-4 md:gap-8`}
                      >
                        {item}
                        <span className="text-white/20">•</span>
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}