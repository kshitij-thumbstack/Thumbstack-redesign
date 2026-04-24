"use client";

export default function Principles() {
  const principles = [
    { title: "Strategise", desc: "Crafting visual and functional experiences that connect." },
    { title: "Design", desc: "Crafting visual and functional experiences that connect." },
    { title: "Create", desc: "Crafting visual and functional experiences that connect." },
    { title: "Develop", desc: "Crafting visual and functional experiences that connect." },
    { title: "Maintain", desc: "Crafting visual and functional experiences that connect." },
    { title: "Optimise", desc: "Crafting visual and functional experiences that connect." }
  ];

  const marqueeText = "MOBILE APPS • HUMAN-CENTERED PRODUCTS • END-TO-END OWNERSHIP • ECOMMERCE • ";

  return (
    <section className="min-h-[100svh] w-full flex flex-col pt-24 pb-0 items-center justify-between snap-start relative bg-sidebar text-white overflow-hidden">
      <div className="w-full max-w-[1400px] px-8 lg:px-24 flex flex-col flex-1">
        
        {/* Header */}
        <div className="flex justify-between items-start w-full relative mb-16 mt-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl tracking-tight">
            We Build Like It&apos;s Ours.<br/>
            No Shortcuts. No Templates.<br/>
            Just Work That Holds Up In The Wild.
          </h2>
          <span className="text-gray-400 text-sm hidden md:block">Services</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 mt-8 mb-auto">
          {principles.map((p, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="w-6 h-6 border border-mint rounded-sm flex items-center justify-center mb-2 text-mint">
                {/* Dummy icon filler */}
                <span className="block w-2 h-2 bg-mint rounded-full"></span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="text-sm text-gray-400 max-w-[200px] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="w-full flex whitespace-nowrap overflow-hidden py-4 border-t border-b border-mint/20 mt-12 bg-sidebar relative z-10">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center">
          <span className="text-mint font-bold text-xl tracking-widest mx-4 whitespace-nowrap">
            {marqueeText} {marqueeText} {marqueeText}
          </span>
        </div>
        {/* Duplicate for seamless looping */}
        <div className="animate-[marquee_20s_linear_infinite] flex items-center absolute top-4 left-full">
          <span className="text-mint font-bold text-xl tracking-widest mx-4 whitespace-nowrap">
            {marqueeText} {marqueeText} {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
