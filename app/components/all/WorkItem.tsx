"use client";
 
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
export default function WorkItem() {
  const images = [
    "/Home.png",
    "/Frame 2085663160.png",
    "/Onboarding 7 (1) 1.png"
  ];
 
  const [activeIndex, setActiveIndex] = useState(0);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);
 
  // Helper to get image at relative position
  const getImage = (offset: number) => {
    const index = (activeIndex + offset) % images.length;
    return images[index];
  };
 
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center py-20 px-6 md:px-12 lg:px-24 snap-start relative bg-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">
        
        {/* Left Side: Stacked Cards */}
        <div className="relative w-full max-w-[500px] aspect-[4/5] flex-shrink-0 md:ml-12 order-2 md:order-1">
          <AnimatePresence mode="popLayout">
            {/* Card 3 (Back) */}
            <motion.div 
              key={`back-${getImage(2)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 0.9, x: 32, y: -32 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-0 left-0 w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-sm z-10"
            >
               <Image src={getImage(2)} alt="App screenshot 3" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
            </motion.div>
            
            {/* Card 2 (Middle) */}
            <motion.div 
              key={`middle-${getImage(1)}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.7, scale: 0.95, x: 16, y: -16 }}
              exit={{ opacity: 0.4, scale: 0.9, x: 32, y: -32 }}
              className="absolute top-0 left-0 w-[95%] h-[95%] rounded-2xl overflow-hidden shadow-md z-20 bg-gray-800"
            >
               <Image src={getImage(1)} alt="App screenshot 2" fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover" />
            </motion.div>
            
            {/* Card 1 (Front) */}
            <motion.div 
              key={`front-${getImage(0)}`}
              initial={{ x: -100, opacity: 0, rotate: -5 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              exit={{ x: 100, opacity: 0, rotate: 5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl z-30 bg-white flex flex-col border border-gray-100"
            >
              <div className="relative w-full h-[70%]">
                <Image src={getImage(0)} alt="App screenshot 1" fill sizes="(max-width: 768px) 100vw, 500px" className="object-contain bg-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
                    <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="relative w-full h-[30%] bg-[#E83431] text-white flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-xl md:text-3xl font-serif tracking-widest mb-1 md:mb-2 uppercase italic">SIORAI</h3>
                 <p className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">Apparels, Stock & Recurve,<br/>React</p>
                 
                 <div className="absolute -top-6 md:-top-10 -right-2 md:-right-6 w-16 h-16 md:w-20 md:h-20 bg-mint rounded-full flex items-center justify-center text-sidebar font-bold shadow-lg text-xs md:text-sm rotate-12 cursor-pointer hover:scale-105 transition-transform">
                   View
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Pagination Indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            {images.map((_, i) => (
              <div 
                key={i}
                className={`transition-all duration-300 rounded-full ${activeIndex === i ? 'w-6 h-1.5 bg-blue' : 'w-1.5 h-1.5 bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
 
        {/* Right Side: Text elements */}
        <div className="flex flex-col flex-1 items-start max-w-lg mb-8 md:mb-auto mt-0 md:mt-24 order-1 md:order-2">
          <span className="text-xs md:text-sm font-bold mb-4 md:mb-6 flex items-center gap-1 cursor-pointer">
              Start Your Story <span className="text-lg">↗</span>
          </span>
          <h2 
            className="flex flex-col text-[#0F1E16] mb-6 md:mb-8"
            style={{
              fontFamily: "Nohemi, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(3rem, 8vw, 100.37px)",
              lineHeight: "1.1",
              letterSpacing: "0%",
              textTransform: "capitalize",
              verticalAlign: "middle"
            }}
          >
            <span style={{ lineHeight: "1.2" }}>Stacked</span>
            <span style={{ lineHeight: "1.2" }}>With</span>
            <span style={{ lineHeight: "1.2" }}>Gratitude</span>
          </h2>
          <p className="text-base md:text-lg font-bold text-[#0F1E16] max-w-md">
            Real words from brands we&apos;ve built with — layered, raw, and unfiltered.
          </p>
        </div>
      </div>
    </section>
  );
}
