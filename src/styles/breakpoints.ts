export const breakpoints = {
  sm: "359px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
};

export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]})`,
};

export const containerPadding = {
  DEFAULT: "1rem",
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
  xl: "3rem",
};
