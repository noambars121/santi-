export const getOptimizedImageUrl = (
  url: string,
  width: number = 750,
  quality: number = 80,
  format: "webp" | "avif" | "jpeg" = "webp",
) => {
  if (url.includes("unsplash.com")) {
    return `${url}?auto=format,compress&q=${quality}&w=${width}&fm=${format}`;
  }
  return url;
};

export const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

export const preloadImages = async (urls: string[]) => {
  return Promise.all(urls.map((url) => preloadImage(url)));
};
