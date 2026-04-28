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
      image: "/stack.png"
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
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-24 px-8 lg:px-24 snap-start relative bg-white overflow-hidden">
      <div className="w-full max-w-[1400px]">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-20 relative gap-6 md:gap-8">
          <div className="max-w-[200px]">
            <p className="text-xs md:text-sm font-medium text-foreground uppercase tracking-tight">
              We build the remarkable, not the routine.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end md:ml-auto">
            <span className="text-xs md:text-sm font-semibold mb-2 flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity">
              Let&apos;s Build Together <span className="text-lg">↗</span>
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-sidebar">
              Fields Of Play
            </h2>
          </div>

          {/* Top line decoration */}
          <div className="absolute top-[40%] -right-24 w-[30%] h-[1px] bg-gray-200 hidden lg:block"></div>
        </div>

        {/* Interactive List & Image */}
        <div className="relative w-full flex flex-col border-t border-gray-100">
          {fields.map((field) => (
            <div
              key={field.id}
              onMouseEnter={() => setActiveItem(field.id)}
              className={`w-full group cursor-pointer transition-all duration-500 relative ${activeItem === field.id
                  ? 'bg-sidebar py-12 md:py-16 -mx-8 md:-mx-24 px-8 md:px-24 border-none shadow-2xl z-20'
                  : 'bg-transparent py-8 md:py-10 border-b border-gray-100'
                }`}
            >
              <div className="flex items-center w-full md:w-1/2">
                <div className="flex flex-col">
                  <h3 className={`text-xl md:text-3xl font-medium tracking-tight transition-colors duration-300 ${activeItem === field.id ? 'text-white' : 'text-gray-400 group-hover:text-sidebar'}`}>
                    {field.title}
                  </h3>

                  <AnimatePresence>
                    {activeItem === field.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm md:text-lg text-gray-300 mt-4 max-w-sm font-light overflow-hidden"
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
                    className="md:absolute right-8 top-1/2 md:-translate-y-1/2 w-full md:w-[35%] flex justify-end mt-12 md:mt-0 md:pr-8 pointer-events-none"
                  >
                    <div className="relative w-full aspect-[4/5] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl z-20 pointer-events-auto border-4 border-white/10">
                      <Image
                        src={field.image}
                        alt={field.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                      />

                      {/* Floating View Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        drag
                        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                        onDrag={(event, info) => {
                          setDragPosition({ x: info.offset.x, y: info.offset.y });
                        }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-20 md:w-28 md:h-28 bg-mint rounded-full flex justify-center items-center font-bold text-sidebar text-sm md:text-lg cursor-grab active:cursor-grabbing shadow-xl hover:scale-110 transition-transform z-30"
                      >
                        View
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
