import Image from "next/image";

const BRAND_LOGOS = [
  "APURA.png",
  "Canton_SCHWYZ_logo_1-removebg-preview 1.png",
  "Frame 72.png",
  "Frame.png",
  "Group 1.png",
  "Group 1321314561-1.png",
  "Group 1321314561.png",
  "Group 1321314562.png",
  "Group 1321314564.png",
  "Group 1321314565.png",
  "Group 1321314566.png",
  "Group 1321314588.png",
  "Group 314-1.png",
  "Group 314.png",
  "Group 585.png",
  "Group.png",
  "Isolation_Mode.png",
  "Jwise logo 1 3.png",
  "WILDPOPPIES-black 1.png",
  "aa358d82ad17b2f6aa666d7fbf7adaec1a0b05cc 2.png",
  "jurassic-world-seeklogo 1.png",
  "logo 1.png",
  "logo 2-1.png",
  "logo 2.png",
  "logo-1.png",
  "logo-2.png",
  "logo-3.png",
  "logo.png",
  "main-logo (1).png",
];

export default function PartnerBrands() {
  const rowPattern = [8, 7, 6, 5, 3]; // Added 3 just in case there are more
  const brandRows: string[][] = [];
  let currentIndex = 0;
  let patternIndex = 0;

  while (currentIndex < BRAND_LOGOS.length) {
    const rowSize = rowPattern[patternIndex % rowPattern.length];
    brandRows.push(BRAND_LOGOS.slice(currentIndex, currentIndex + rowSize));
    currentIndex += rowSize;
    patternIndex += 1;
  }

  return (
    <section className="min-h-[100svh] w-full flex flex-col justify-center items-center py-20 px-8 lg:px-24 snap-start relative bg-white border-t border-gray-100">
      <div className="w-full max-w-7xl flex flex-col items-center">
        
        <h2 
          className="text-center capitalize mb-24"
          style={{
            fontFamily: "var(--font-delight)",
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: 'clamp(3rem, 8vw, 100.37px)',
            lineHeight: '147.21px',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle',
            textTransform: 'capitalize',
          }}
        >
          Partnered Brands.
        </h2>

        {/* Grid rows: 8, 7, 6, 5 */}
        <div className="w-full flex flex-col items-center gap-3 md:gap-4">
          {brandRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="w-fit max-w-full flex flex-nowrap justify-center gap-3 md:gap-4"
            >
              {row.map((logo, index) => {
                return (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="w-32 md:w-40 px-4 py-4 md:px-6 md:py-6 bg-[#F5F5F5] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#EFEFEF] hover:scale-105 cursor-pointer h-20 md:h-28 shadow-sm"
                  >
                    <Image
                      src={`/tsp/${logo}`}
                      alt="Partner Brand Logo"
                      width={120}
                      height={80}
                      className="max-h-full max-w-full object-contain"
                      priority={false}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

