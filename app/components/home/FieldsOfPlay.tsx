"use client";

import { useState } from "react";
import Image from "next/image";

export default function FieldsOfPlay() {
  const [activeItem, setActiveItem] = useState(1);
  
  const fields = [
    { id: 0, title: "E-Commerce Experiences" },
    { 
      id: 1, 
      title: "Custom Web Experiences",
      subtitle: "Custom-built platforms designed to scale with your brand's ambition.",
      image: "/Custom product pages.png"
    },
    { id: 2, title: "Real Estate Expertise" },
    { id: 3, title: "Enterprise Platforms" },
    { id: 4, title: "Mobile Apps" }
  ];

  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-12 px-8 lg:px-24 snap-start relative bg-white overflow-hidden">
      <div className="w-full max-w-[1400px]">
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-16 relative gap-8">
          <div className="max-w-[200px]">
            <p className="text-sm font-medium text-foreground">
              We build the remarkable, not the routine.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end md:ml-auto">
            <span className="text-sm font-semibold mb-2 flex items-center gap-1 cursor-pointer">
              Let&apos;s Build Together <span className="text-lg">↗</span>
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-sidebar">
              Fields Of Play
            </h2>
          </div>
          
          {/* Top line decoration */}
          <div className="absolute top-1/2 -right-24 w-1/2 h-[1px] bg-gray-300 hidden md:block"></div>
        </div>

        {/* Interactive List & Image */}
        <div className="relative w-full flex flex-col">
          {fields.map((field, index) => (
            <div 
              key={field.id}
              onClick={() => setActiveItem(field.id)}
              className={`w-full group cursor-pointer transition-all duration-300 ${activeItem === field.id ? 'bg-sidebar relative z-10 py-12 -mx-24 px-24' : 'bg-transparent py-8 border-b border-gray-300'}`}
            >
              <div className="flex items-center w-full md:w-1/2">
                <div className="flex flex-col">
                  <h3 className={`text-2xl md:text-3xl font-medium tracking-tight ${activeItem === field.id ? 'text-white' : 'text-gray-500 hover:text-foreground transition-colors'}`}>
                    {field.title}
                  </h3>
                  {activeItem === field.id && field.subtitle && (
                    <p className="text-sm text-gray-300 mt-2 max-w-sm">
                      {field.subtitle}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Image Reveal (visible when active) */}
              {activeItem === field.id && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 flex justify-end pr-8 md:pr-0 pointer-events-none">
                  <div className="relative w-full max-w-[400px] md:max-w-[500px] h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl z-20 pointer-events-auto">
                    {field.image ? (
                      <Image 
                        src={field.image}
                        alt={field.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200"></div>
                    )}
                    
                    {/* Floating View Badge */}
                    <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-mint rounded-full flex justify-center items-center font-bold text-sidebar text-base cursor-pointer shadow-lg hover:scale-105 transition-transform z-30">
                      View
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
