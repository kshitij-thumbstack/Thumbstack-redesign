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
      desc: "We define what needs to be built, fixed, prioritised, or planned.",
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
      desc: "We shape the experience, interface, user journeys, and visual system.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 19.5V22M14 19.5a2 2 0 0 0-2-2h-5a2 2 0 0 1-2-2v-4" />
          <path d="M19 11v-4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z" />
        </svg>
      )
    },
    {
      title: "Grow",
      desc: "We maintain, improve, optimise, and support the product after launch.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
          <path d="m5 3-1 3-3 1 3 1 1 3 1-3 3-1-3-1Z" />
        </svg>
      )
    },
    {
      title: "Build",
      desc: "We develop the website, store, app, platform, CMS, integrations, or backend system.",
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

  const marqueeItems = [
    { text: "MOBILE APPS", color: "#95E7D3" },
    { text: "HUMAN-CENTERED PRODUCTS", color: "#FFFFFF" },
    { text: "END-TO-END OWNERSHIP", color: "#95E7D3" },
    { text: "ECOMMERCE", color: "#FFFFFF" }
  ];

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
      className="min-h-screen w-full flex flex-col items-center justify-start snap-start relative bg-[#0F1D07] text-white overflow-hidden pt-24 sm:pt-32 pb-0"
    >
      <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:pl-12 lg:pr-24 flex flex-col z-10 relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full relative mb-20 lg:mb-32 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="capitalize"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "min(48px, 7vw)",
              lineHeight: "1.2",
              color: "#FFFFFF",
              maxWidth: "1100px"
            }}
          >
            We Build Like It’s Ours.<br />
            No Shortcuts. No Templates.<br />
            Just Work That Holds Up In The Wild.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex flex-col items-start lg:items-end gap-2 shrink-0 lg:pt-4"
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
          className="w-full flex flex-col gap-[40px] lg:gap-[50px] isolation-isolate"
        >
          {[0, 1].map((rowIdx) => (
            <div key={rowIdx} className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] w-full items-center lg:items-start">
              {principles.slice(rowIdx * 3, (rowIdx + 1) * 3).map((p, i) => {
                const absoluteIdx = rowIdx * 3 + i;
                return (
                  <motion.div
                    key={absoluteIdx}
                    variants={itemVariants}
                    className={`flex flex-col justify-center items-start p-6 lg:p-8 gap-[6px] rounded-2xl transition-all duration-300 w-full lg:w-[429px] h-auto lg:h-[226px] hover:bg-white/[0.04]`}
                    style={{ flex: "none" }}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 flex items-center justify-center text-white mb-2">
                      {p.icon}
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-1">
                      <h3 
                        className="text-white"
                        style={{
                          fontFamily: "var(--font-satoshi)",
                          fontWeight: 700,
                          fontSize: "28px",
                          lineHeight: "38px"
                        }}
                      >
                        {p.title}
                      </h3>
                      <p 
                        className="text-white opacity-60"
                        style={{
                          fontFamily: "var(--font-satoshi)",
                          fontWeight: 700,
                          fontSize: "13px",
                          lineHeight: "22px",
                          maxWidth: "381px"
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Marquee Banner */}
      <div className="mt-12 lg:mt-16 w-full py-4 lg:py-6 bg-sidebar/50 backdrop-blur-sm relative z-20 overflow-hidden">
        <div className="flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex whitespace-nowrap items-center shrink-0 gap-[37px]"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 gap-[37px]">
                {marqueeItems.map((item, k) => (
                  <span
                    key={k}
                    className="font-medium text-center uppercase"
                    style={{
                      fontFamily: "var(--font-nohemi)",
                      fontSize: "33.8824px",
                      lineHeight: "34px",
                      color: item.color,
                      padding: "0 10px"
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}