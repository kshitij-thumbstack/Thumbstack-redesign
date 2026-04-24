import brands from "../../data/brands.json";

export default function PartnerBrands() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-20 px-8 lg:px-24 snap-start relative bg-white border-t border-gray-100">
      <div className="w-full max-w-7xl flex flex-col items-center">
        
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-sidebar mb-24 text-center">
          Partnered Brands.
        </h2>

        {/* Staggered Logo Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="px-8 py-6 md:px-10 md:py-8 bg-[#F5F5F5] rounded-[2rem] flex items-center justify-center transition-all duration-300 hover:bg-[#EFEFEF] hover:scale-105 cursor-pointer min-w-[140px] md:min-w-[180px] h-20 md:h-24 shadow-sm"
            >
               {/* Transcribing the specific "look" of the logos using specialized typography */}
               <span className={`text-base md:text-xl font-bold tracking-tight text-center ${
                 brand.name === "Westside" ? "italic font-serif" : 
                 brand.name === "F B T" ? "tracking-widest" : 
                 "tracking-tighter"
               } text-[#222]`}>
                 {brand.name}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
