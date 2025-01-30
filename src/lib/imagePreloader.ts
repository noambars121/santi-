export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

export const preloadCriticalImages = async () => {
  const criticalImages = ["/IMG_9328.JPG", "/dog-trainer.jpg"];

  try {
    await preloadImages(criticalImages);
  } catch (error) {
    console.error("Failed to preload images:", error);
  }
};
