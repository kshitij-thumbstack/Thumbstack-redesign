"use client";

import Image from "next/image";

export default function WorkItem() {
  const images = [
    "/Home.png",
    "/Frame 2085663160.png",
    "/Onboarding 7 (1) 1.png"
  ];

  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-12 px-8 lg:px-24 snap-start relative bg-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Side: Stacked Cards */}
        <div className="relative w-full max-w-[500px] aspect-[4/5] flex-shrink-0 ml-12">
          {/* Card 3 (Back) */}
          <div className="absolute top-0 left-0 w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-sm translate-x-8 -translate-y-8 z-10 opacity-60">
             <Image src={images[2]} alt="App screenshot 3" fill className="object-cover" />
          </div>
          
          {/* Card 2 (Middle) */}
          <div className="absolute top-0 left-0 w-[95%] h-[95%] rounded-2xl overflow-hidden shadow-md translate-x-4 -translate-y-4 z-20 opacity-80 bg-gray-800">
             <Image src={images[1]} alt="App screenshot 2" fill className="object-cover" />
          </div>
          
          {/* Card 1 (Front) */}
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl z-30 bg-white flex flex-col">
            <div className="relative w-full h-[70%]">
              <Image src={images[0]} alt="App screenshot 1" fill className="object-contain bg-white" />
              {/* Play Button overlay (optional, keeping for aesthetic match) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="relative w-full h-[30%] bg-red-500 text-white flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-3xl font-serif tracking-widest mb-2">SIORAI</h3>
               <p className="text-xs uppercase tracking-wider opacity-80">Apparels, Stock & Recurve,<br/>React</p>
               
               {/* Mint Green View Button Badge */}
               <div className="absolute -top-10 -right-6 w-20 h-20 bg-mint rounded-full flex items-center justify-center text-sidebar font-semibold shadow-lg text-sm rotate-12 cursor-pointer hover:scale-105 transition-transform">
                 View
               </div>
            </div>
          </div>
          
          {/* Pagination Indicators */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            <div className="w-6 h-1.5 bg-blue rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Text elements */}
        <div className="flex flex-col flex-1 items-start max-w-lg mb-auto mt-16 md:mt-24">
          <span className="text-sm font-semibold mb-6 flex items-center gap-1 cursor-pointer">
              Start Your Story <span className="text-lg">↗</span>
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-sidebar leading-[0.9] mb-8">
            Stacked<br/>
            With<br/>
            Gratitude
          </h2>
          <p className="text-lg font-medium text-gray-700 max-w-md">
            Find vessels from brands we&apos;ve built with — layered, raw, and unhitched.
          </p>
        </div>
      </div>
    </section>
  );
}
