import Image from "next/image";
import { fetchStrapi, getStrapiImageUrl } from "../../lib/strapi";

interface Brand {
  id: number;
  documentId: string;
  name: string;
  logo?: {
    id: number;
    documentId?: string;
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
    formats?: {
      large?: { url: string };
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
}

export default async function PartnerBrands() {
  let brands: Brand[] = [];
  
  try {
    const response = await fetchStrapi("brands", "populate=logo&pagination[limit]=100");
    // Strapi 5 returns data directly as an array or { data: [...] }
    brands = Array.isArray(response) ? response : (response?.data || []);
  } catch (error) {
    console.error("Error fetching brands:", error);
    brands = [];
  }

  const brandsWithLogos = brands.filter((brand) => Boolean(getStrapiImageUrl(brand.logo)));
  const rowPattern = [8, 7, 6, 5];
  const brandRows: Brand[][] = [];
  let currentIndex = 0;
  let patternIndex = 0;

  while (currentIndex < brandsWithLogos.length) {
    const rowSize = rowPattern[patternIndex % rowPattern.length];
    brandRows.push(brandsWithLogos.slice(currentIndex, currentIndex + rowSize));
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

        {/* Dropping grid rows: 8, 7, 6, 5 */}
        <div className="w-full flex flex-col items-center gap-3 md:gap-4">
          {brandRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="w-fit max-w-full flex flex-nowrap justify-center gap-3 md:gap-4"
            >
              {row.map((brand) => {
                const imageUrl = getStrapiImageUrl(brand.logo);

                if (!imageUrl) return null;

                return (
                  <div
                    key={brand.id}
                    className="w-36 md:w-40 px-4 py-4 md:px-6 md:py-6 bg-[#F5F5F5] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#EFEFEF] hover:scale-105 cursor-pointer h-24 md:h-28 shadow-sm"
                  >
                    <Image
                      src={imageUrl}
                      alt={brand.logo?.alternativeText || brand.name}
                      width={120}
                      height={80}
                      className="max-h-full max-w-full object-contain"
                      priority={false}
                      unoptimized
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
