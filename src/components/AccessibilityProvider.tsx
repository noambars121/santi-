import React, { useState, useEffect, createContext, useContext } from "react";

// Create context for accessibility settings
type AccessibilityContextType = {
  fontSize: number;
  setFontSize: (size: number) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
  dyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  grayscale: boolean;
  toggleGrayscale: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  resetAllSettings: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | null>(
  null,
);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider",
    );
  }
  return context;
};

// Provider component
export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [fontSize, setFontSizeState] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("a11y-fontSize");
    const savedContrast = localStorage.getItem("a11y-highContrast");
    const savedDyslexicFont = localStorage.getItem("a11y-dyslexicFont");
    const savedReducedMotion = localStorage.getItem("a11y-reducedMotion");
    const savedGrayscale = localStorage.getItem("a11y-grayscale");
    const savedDarkMode = localStorage.getItem("a11y-darkMode");

    if (savedFontSize) {
      const size = parseInt(savedFontSize);
      setFontSizeState(size);
      document.documentElement.style.fontSize = `${size}%`;
    }

    if (savedContrast === "true") {
      setHighContrast(true);
      document.body.classList.add("high-contrast");
    }

    if (savedDyslexicFont === "true") {
      setDyslexicFont(true);
      document.body.classList.add("dyslexic-font");
    }

    if (savedReducedMotion === "true") {
      setReducedMotion(true);
      document.body.classList.add("reduced-motion");
    }

    if (savedGrayscale === "true") {
      setGrayscale(true);
      document.body.classList.add("grayscale");
    }

    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }

    // Add keyboard user detection
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        document.body.classList.add("keyboard-user");
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove("keyboard-user");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Set font size and save to localStorage
  const setFontSize = (size: number) => {
    setFontSizeState(size);
    document.documentElement.style.fontSize = `${size}%`;
    localStorage.setItem("a11y-fontSize", size.toString());
  };

  // Toggle high contrast mode
  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    if (newValue) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
    localStorage.setItem("a11y-highContrast", newValue.toString());
  };

  // Toggle dyslexic font
  const toggleDyslexicFont = () => {
    const newValue = !dyslexicFont;
    setDyslexicFont(newValue);
    if (newValue) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
    localStorage.setItem("a11y-dyslexicFont", newValue.toString());
  };

  // Toggle reduced motion
  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    if (newValue) {
      document.body.classList.add("reduced-motion");
    } else {
      document.body.classList.remove("reduced-motion");
    }
    localStorage.setItem("a11y-reducedMotion", newValue.toString());
  };

  // Toggle grayscale mode
  const toggleGrayscale = () => {
    const newValue = !grayscale;
    setGrayscale(newValue);
    if (newValue) {
      document.body.classList.add("grayscale");
    } else {
      document.body.classList.remove("grayscale");
    }
    localStorage.setItem("a11y-grayscale", newValue.toString());
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    if (newValue) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("a11y-darkMode", newValue.toString());
  };

  // Reset all settings to default
  const resetAllSettings = () => {
    setFontSizeState(100);
    setHighContrast(false);
    setDyslexicFont(false);
    setReducedMotion(false);
    setGrayscale(false);
    setDarkMode(false);

    document.documentElement.style.fontSize = "100%";
    document.body.classList.remove("high-contrast");
    document.body.classList.remove("dyslexic-font");
    document.body.classList.remove("reduced-motion");
    document.body.classList.remove("grayscale");
    document.body.classList.remove("dark-mode");

    localStorage.removeItem("a11y-fontSize");
    localStorage.removeItem("a11y-highContrast");
    localStorage.removeItem("a11y-dyslexicFont");
    localStorage.removeItem("a11y-reducedMotion");
    localStorage.removeItem("a11y-grayscale");
    localStorage.removeItem("a11y-darkMode");
  };

  const value = {
    fontSize,
    setFontSize,
    highContrast,
    toggleHighContrast,
    dyslexicFont,
    toggleDyslexicFont,
    reducedMotion,
    toggleReducedMotion,
    grayscale,
    toggleGrayscale,
    darkMode,
    toggleDarkMode,
    resetAllSettings,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityProvider; 