import { VIEWPORT_SIZES, HEADER_HEIGHT, SAFE_AREA_TOP } from "./viewport";

export const CONTAINER_PADDING = {
  mobile: 16,
  tablet: 32,
  desktop: 64,
};

export const SECTION_SPACING = {
  mobile: {
    top: 48,
    bottom: 48,
  },
  tablet: {
    top: 80,
    bottom: 80,
  },
  desktop: {
    top: 120,
    bottom: 120,
  },
};

export const GRID_GAP = {
  mobile: 16,
  tablet: 24,
  desktop: 32,
};

export const getContentWidth = (viewportWidth: number) => {
  if (viewportWidth <= VIEWPORT_SIZES.mobile) {
    return VIEWPORT_SIZES.mobile - CONTAINER_PADDING.mobile * 2;
  }
  if (viewportWidth <= VIEWPORT_SIZES.tablet) {
    return viewportWidth - CONTAINER_PADDING.tablet * 2;
  }
  return Math.min(
    viewportWidth - CONTAINER_PADDING.desktop * 2,
    VIEWPORT_SIZES.wide,
  );
};

export const getHeaderOffset = () => HEADER_HEIGHT + SAFE_AREA_TOP;

export const getSectionHeight = (contentHeight: number) => {
  return `calc(${contentHeight}px + ${SECTION_SPACING.mobile.top}px + ${SECTION_SPACING.mobile.bottom}px)`;
};
