const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchStrapi(
  endpoint: string,
  query?: string,
  options?: RequestInit
) {
  const url = `${STRAPI_URL}/api/${endpoint}${query ? `?${query}` : ""}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
    cache: options?.cache || "no-store", // or next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch from Strapi: ${res.statusText}`);
  }

  return res.json();
}

export function getStrapiURL(path: string) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_URL}${path}`;
}

/**
 * Get optimized image URL - useful for Next.js Image component
 * Handles Strapi image URLs and returns full URL
 */
export function getStrapiImageUrl(image: any): string | null {
  if (!image) return null;

  const imageUrl = image?.url || image?.formats?.medium?.url || image?.formats?.small?.url;
  
  if (!imageUrl) return null;
  return getStrapiURL(imageUrl);
}
