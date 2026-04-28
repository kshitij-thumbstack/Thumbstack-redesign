"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FieldsOfPlay() {
  const [activeItem, setActiveItem] = useState(1);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });

  const fields = [
    {
      id: 0,
      title: "E-Commerce Experiences",
      subtitle: "Scalable e-commerce solutions that drive conversions and build brand loyalty.",
      image: "/Store 1.png"
    },
    {
      id: 1,
      title: "Custom Web Experiences",
      subtitle: "Custom-built platforms designed to scale with your brand's ambition.",
      image: "/custom product pages.png"
    },
    {
      id: 2,
      title: "Real Estate Expertise",
      subtitle: "High-end digital presentations for luxury real estate and developments.",
      image: "/Home.png"
    },
    {
      id: 3,
      title: "Enterprise Platforms",
      subtitle: "Internal tools and complex dashboards that simplify business operations.",
      image: "/BFT2.jpg"
    },
    {
      id: 4,
      title: "Mobile Apps",
      subtitle: "Performant iOS and Android applications built for modern users.",
      image: "/Onboarding 7 (1) 1.png"
    }
  ];

  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-24 snap-start relative bg-white overflow-hidden">
      <div className="w-full max-w-[1400px]">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-12 sm:mb-16 md:mb-20 relative gap-4 sm:gap-6 md:gap-8">
          <div className="max-w-[200px]">
            <p className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-tight">
              We build the remarkable, not the routine.
            </p>
          </div>

          <div className="flex flex-col items-start md:ml-auto gap-4">
            <span className="text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity text-sidebar/60">
              Let&apos;s Build Together <span>↗</span>
            </span>
            <h2 
              className="text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter text-sidebar leading-none"
              style={{ fontFamily: "var(--font-nohemi)" }}
            >
              Fields Of Play
            </h2>
          </div>

          {/* Top line decoration */}
          <div className="absolute top-[40%] -right-24 w-[30%] h-[1px] bg-gray-200 hidden lg:block"></div>
        </div>

        {/* Interactive List & Image */}
        <div className="relative w-full flex flex-col border-t border-gray-900">
          {fields.map((field) => (
            <div
              key={field.id}
              onMouseEnter={() => setActiveItem(field.id)}
              className={`w-full group cursor-pointer transition-all duration-500 relative ${activeItem === field.id
                ? 'bg-sidebar py-10 sm:py-14 md:py-20 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-24 px-4 sm:px-6 md:px-8 lg:px-24 border-none shadow-2xl z-20'
                : 'bg-transparent py-8 sm:py-10 md:py-12 border-b border-gray-900'
                }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-1/2">
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 
                    className={`font-medium transition-colors duration-300 ${activeItem === field.id ? 'text-white' : 'text-sidebar group-hover:text-sidebar'}`}
                    style={{ 
                      fontFamily: "var(--font-nohemi)", 
                      fontSize: "28px",
                      lineHeight: "44px",
                      letterSpacing: "-2%"
                    }}
                  >
                    {field.title}
                  </h3>

                  <AnimatePresence mode="wait">
                    {activeItem === field.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-300 mt-1 md:mt-2 max-w-sm overflow-hidden"
                        style={{ 
                          fontFamily: "var(--font-nohemi)",
                          fontSize: "14px",
                          lineHeight: "20px"
                        }}
                      >
                        {field.subtitle}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Image Reveal (visible when active) */}
              <AnimatePresence>
                {activeItem === field.id && (
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="md:absolute right-4 sm:right-6 md:right-8 lg:right-8 top-1/2 md:-translate-y-1/2 w-full md:w-[35%] flex justify-end mt-8 md:mt-0 md:pr-4 sm:pr-6 md:pr-8 pointer-events-none"
                  >
                    <div 
                      className="relative w-full aspect-[4/5] md:h-[420px] flex-shrink-0 pointer-events-auto"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        setDragPosition({ x, y });
                      }}
                    >
                      {/* Actual Image Card */}
                      <div className="relative w-full h-full rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 z-20">
                        <Image
                          src={field.image}
                          alt={field.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                      </div>

                      {/* Floating View Badge — Mouse Follow Interaction ── */}
                      <motion.div
                        initial={{ scale: 0, x: "-50%", y: "-50%" }}
                        animate={{ 
                          scale: 1, 
                          x: dragPosition.x - (10), // Offset slightly to left to maintain "stamp" feel
                          y: dragPosition.y,
                          transition: { type: "spring", damping: 25, stiffness: 200 }
                        }}
                        className="absolute left-0 top-0 w-16 h-16 md:w-24 md:h-24 bg-mint rounded-full flex justify-center items-center font-bold text-sidebar text-xs md:text-lg cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-50 pointer-events-none"
                        style={{ fontFamily: "var(--font-nohemi)" }}
                      >
                        <span className="relative z-10">View</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
