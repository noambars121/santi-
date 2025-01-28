export const colors = {
  // Primary Colors
  primary: {
    DEFAULT: "#2A4834", // Darker, more professional green
    light: "#3A5A40",
    dark: "#1C3326",
    100: "#E8F0EA",
    200: "#C7D9CC",
    300: "#A6C2AD",
    400: "#85AB8F",
    500: "#649470",
    600: "#437D52",
    700: "#2A4834",
    800: "#1C3326",
    900: "#0E1D17",
  },
  // Accent Colors
  accent: {
    DEFAULT: "#C49A6C", // Warmer, more inviting brown
    light: "#D4A373",
    dark: "#B48F61",
    100: "#F7F1EA",
    200: "#EBD9C4",
    300: "#DFC19E",
    400: "#D4A979",
    500: "#C49A6C",
    600: "#B48F61",
    700: "#A38456",
    800: "#92794B",
    900: "#816E40",
  },
  // Neutral Colors
  neutral: {
    50: "#F8F9FA",
    100: "#F1F3F5",
    200: "#E9ECEF",
    300: "#DEE2E6",
    400: "#CED4DA",
    500: "#ADB5BD",
    600: "#6C757D",
    700: "#495057",
    800: "#343A40",
    900: "#212529",
  },
};

export const semanticColors = {
  success: "#2E7D32",
  error: "#D32F2F",
  warning: "#ED6C02",
  info: "#0288D1",
};

export const gradients = {
  primary: `linear-gradient(to bottom, ${colors.primary[600]}, ${colors.primary[700]})`,
  accent: `linear-gradient(to bottom, ${colors.accent[500]}, ${colors.accent[600]})`,
  heroOverlay: `linear-gradient(to bottom, rgba(42, 72, 52, 0.85), rgba(42, 72, 52, 0.95))`,
};
