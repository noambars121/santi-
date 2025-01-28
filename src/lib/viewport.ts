export const VIEWPORT_SIZES = {
  mobile: 358, // iPhone 14 Pro safe area width
  tablet: 768,
  desktop: 1024,
  wide: 1400,
};

export const HEADER_HEIGHT = 60;
export const SAFE_AREA_TOP = 47; // iPhone 14 Pro safe area top

export const getViewportHeight = () => {
  if (typeof window === "undefined") return 0;
  return window.innerHeight;
};

export const getViewportWidth = () => {
  if (typeof window === "undefined") return 0;
  return window.innerWidth;
};

export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= VIEWPORT_SIZES.mobile;
};

export const isTablet = () => {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth > VIEWPORT_SIZES.mobile &&
    window.innerWidth <= VIEWPORT_SIZES.tablet
  );
};

export const isDesktop = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth > VIEWPORT_SIZES.tablet;
};
