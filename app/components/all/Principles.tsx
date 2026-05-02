"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Principles() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const principles = [
    {
      title: "Strategise",
      desc: "We define what needs to be built, fixed, prioritised, or planned.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
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
          <rect width="18" height="8" x="2" y="2" rx="2" />
          <path d="M6 10v7" />
          <path d="M2 17h10" />
          <path d="M7 22h1" />
        </svg>
      )
    },
    {
      title: "Build",
      desc: "We develop the website, store, app, platform, CMS, integrations, or backend system.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: "Grow",
      desc: "We maintain, improve, optimise, and support the product after launch.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3 1.91 5.89L20 10.8l-5.89 1.91L12 18.6l-1.91-5.89L4 10.8l5.89-1.91L12 3Z" />
          <path d="m5 3 1 2.25L8.25 6.25 6 7.25 5 9.5 4 7.25 1.75 6.25 4 5.25 5 3Z" />
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
      className="min-h-screen w-full flex flex-col items-center justify-start snap-start relative bg-[#0F1D07] text-white overflow-hidden pt-16 sm:pt-20 pb-0"
    >
      <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:pl-24 lg:pr-24 flex flex-col z-10 relative">

        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-white/60 font-medium text-xs mb-6 tracking-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Our Process
        </motion.span>

        {/* Header */}
        <div className="flex flex-col justify-start items-start w-full relative mb-16 lg:mb-24 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="capitalize"
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "clamp(24px, 5vw, 54px)",
              lineHeight: "1.1",
              color: "#FFFFFF",
              maxWidth: "800px"
            }}
          >
            Every Capability Runs Through The Same System.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60"
            style={{
              fontFamily: "var(--font-satoshi)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: "1.6",
              maxWidth: "600px"
            }}
          >
            Whether we are building a Shopify store, a custom website, a CMS platform, or a mobile app ecosystem, the process stays connected.
          </motion.p>
        </div>

        {/* Principles Grid - 2x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-16 mb-8"
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-start gap-4 p-8 rounded-2xl transition-colors duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center text-white mb-2">
                {p.icon}
              </div>
              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 700,
                    fontSize: "28px",
                    lineHeight: "1"
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 400,
                    fontSize: "11px",
                    lineHeight: "1.6",
                    maxWidth: "380px"
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Marquee Banner */}
      <div className="mt-0 w-full py-4 lg:py-6 bg-sidebar/50 backdrop-blur-sm relative z-20 overflow-hidden">
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