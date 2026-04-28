"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { getStrapiURL } from "../../lib/strapi";

interface TechItem {
  id: number;
  name: string;
  logo?: {
    url: string;
  };
}

export default function ProductDriven({ techItems }: { techItems: TechItem[] }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Predefined relative positions to match the design roughly
  const positions = [
    { top: "10%", left: "15%" },
    { top: "15%", right: "20%" },
    { bottom: "20%", left: "10%" },
    { bottom: "15%", right: "15%" },
    { top: "40%", left: "5%" },
    { top: "50%", right: "8%" },
    { bottom: "40%", left: "20%" },
    { top: "25%", left: "45%" },
    { bottom: "25%", right: "45%" },
    { top: "10%", right: "40%" },
    { bottom: "10%", left: "40%" },
    { top: "70%", left: "15%" },
    { top: "75%", right: "25%" },
    { top: "5%", left: "30%" },
    { bottom: "5%", right: "30%" },
  ];

  return (
    <section className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center overflow-hidden py-20 px-6 snap-start">
      
      {/* Background Floating Logos */}
      <div className="absolute inset-0 pointer-events-none">
        {techItems.map((item, i) => {
          const pos = positions[i % positions.length];
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              className="absolute pointer-events-auto cursor-pointer flex flex-col items-center z-20"
              style={pos}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={() => setActiveId(isActive ? null : item.id)}
            >
              <div className={`w-14 h-14 md:w-20 md:h-20 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center p-4 border border-gray-100 transition-all duration-300 ${isActive ? 'scale-125 shadow-2xl border-blue/20 ring-4 ring-blue/5' : 'hover:scale-110 hover:shadow-xl'}`}>
                {item.logo ? (
                  <Image 
                    src={getStrapiURL(item.logo.url)} 
                    alt={item.name} 
                    width={48} 
                    height={48} 
                    className="object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="text-[10px] font-bold text-gray-400 tracking-tighter">{item.name.substring(0, 3)}</span>
                )}
              </div>
              
              {isActive && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 12, scale: 1 }}
                  className="absolute top-full mt-2 whitespace-nowrap"
                >
                  <span className="text-[10px] md:text-xs font-bold text-sidebar bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                    {item.name}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Center Text */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#1A1A1A] flex flex-col text-center"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 500,
            fontSize: "clamp(2.5rem, 8vw, 100.37px)",
            lineHeight: "147.21px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            textTransform: "capitalize",
          }}
        >
          <span>Product-Smart.</span>
          <span className="opacity-90">Progress-Driven.</span>
        </motion.h2>
      </div>

      {/* Decorative Blur Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-mint/10 blur-[120px] rounded-full" />
      </div>

    </section>
  );
}
