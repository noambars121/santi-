import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Accessibility,
  ZoomIn,
  ZoomOut,
  Moon,
  Sun,
  PanelTop,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";

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

  // Increase font size by 10%
  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  // Decrease font size by 10%
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
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

    // Ensure the button stays in place regardless of state change
    setTimeout(() => {
      const buttons = document.querySelectorAll(".a11y-widget-button");
      buttons.forEach((button) => {
        (button as HTMLElement).style.position = "fixed";
        (button as HTMLElement).style.bottom = "1rem";
        (button as HTMLElement).style.right = "1rem";
        (button as HTMLElement).style.zIndex = "9999999";
        (button as HTMLElement).style.visibility = "visible";
        (button as HTMLElement).style.opacity = "1";
      });
    }, 10);
  };

  // Toggle grayscale
  const toggleGrayscale = () => {
    const newValue = !grayscale;
    setGrayscale(newValue);
    if (newValue) {
      document.body.classList.add("grayscale");
    } else {
      document.body.classList.remove("grayscale");
    }
    localStorage.setItem("a11y-grayscale", newValue.toString());

    // Ensure the button stays in place regardless of state change
    setTimeout(() => {
      const buttons = document.querySelectorAll(".a11y-widget-button");
      buttons.forEach((button) => {
        (button as HTMLElement).style.position = "fixed";
        (button as HTMLElement).style.bottom = "1rem";
        (button as HTMLElement).style.right = "1rem";
        (button as HTMLElement).style.zIndex = "9999999";
        (button as HTMLElement).style.visibility = "visible";
        (button as HTMLElement).style.opacity = "1";
      });
    }, 10);
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

  // Reset all settings
  const resetAllSettings = () => {
    // Reset font size
    setFontSizeState(100);
    document.documentElement.style.fontSize = "100%";
    localStorage.setItem("a11y-fontSize", "100");

    // Reset high contrast
    setHighContrast(false);
    document.body.classList.remove("high-contrast");
    localStorage.setItem("a11y-highContrast", "false");

    // Reset dyslexic font
    setDyslexicFont(false);
    document.body.classList.remove("dyslexic-font");
    localStorage.setItem("a11y-dyslexicFont", "false");

    // Reset reduced motion
    setReducedMotion(false);
    document.body.classList.remove("reduced-motion");
    localStorage.setItem("a11y-reducedMotion", "false");

    // Reset grayscale
    setGrayscale(false);
    document.body.classList.remove("grayscale");
    localStorage.setItem("a11y-grayscale", "false");

    // Reset dark mode
    setDarkMode(false);
    document.body.classList.remove("dark-mode");
    localStorage.setItem("a11y-darkMode", "false");
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

// Accessibility toolbar button component
const AccessibilityToolbarButton = ({
  onClick,
  icon: Icon,
  label,
  active = false,
  ariaLabel,
}: {
  onClick: () => void;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  ariaLabel: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={onClick}
            className={`rounded-xl w-full h-12 ${active ? "bg-[#124A34] text-white" : "bg-white text-[#124A34]"} border-2 border-[#124A34] hover:bg-[#124A34] hover:text-white transition-colors flex flex-col items-center justify-center gap-1`}
            aria-label={ariaLabel}
            aria-pressed={active}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs font-medium">{label}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Main accessibility widget component
const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Get accessibility context first to avoid the reference error
  const {
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
  } = useAccessibility();

  // Add keyboard shortcut (Alt+A) to open accessibility menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key === "a") || (e.altKey && e.key === "א")) {
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Add dynamic styles for the accessibility button
  useEffect(() => {
    const styleId = "a11y-button-dynamic-styles";
    let styleEl = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    const buttonStyles = `
      .a11y-widget-button {
        position: fixed !important;
        bottom: 1rem !important;
        right: 1rem !important;
        z-index: 9999999 !important;
        background-color: #124a34 !important;
        color: white !important;
        border: 3px solid white !important;
        box-shadow: 0 0 0 2px #000000, 0 0 10px rgba(0, 0, 0, 0.5) !important;
        width: 48px !important;
        height: 48px !important;
        border-radius: 9999px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 0.5rem !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        cursor: pointer !important;
        /* Prevent event propagation issues */
        isolation: isolate !important;
      }
      
      .a11y-widget-container {
        position: fixed !important;
        bottom: 1rem !important;
        right: 1rem !important;
        z-index: 9999999 !important;
        width: 48px !important;
        height: 48px !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        /* Prevent event propagation issues */
        isolation: isolate !important;
      }

      body.dark-mode .a11y-widget-button {
        background-color: #d39a6a !important;
        color: black !important;
      }

      body.high-contrast .a11y-widget-button {
        background-color: yellow !important;
        color: black !important;
        position: fixed !important;
        bottom: 1rem !important;
        right: 1rem !important;
        z-index: 9999999 !important;
      }
      
      /* Force fixed position in all contexts */
      [data-radix-popper-content-wrapper] .a11y-widget-button,
      [role="dialog"] ~ .a11y-widget-button,
      .high-contrast [data-radix-popper-content-wrapper] .a11y-widget-button {
        position: fixed !important;
        bottom: 1rem !important;
        right: 1rem !important;
        z-index: 9999999 !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
      }
      
      /* Ensure buttons in storyboards are selectable */
      [role="button"], button {
        position: relative !important;
        z-index: 1 !important;
      }
    `;

    styleEl.innerHTML = buttonStyles;

    return () => {
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, []);

  // Effect to ensure the button is always visible and properly positioned
  useEffect(() => {
    const checkButtonVisibility = () => {
      const buttons = document.querySelectorAll(".a11y-widget-button");
      buttons.forEach((button) => {
        (button as HTMLElement).style.visibility = "visible";
        (button as HTMLElement).style.opacity = "1";
        (button as HTMLElement).style.pointerEvents = "auto";
        (button as HTMLElement).style.position = "fixed";
        (button as HTMLElement).style.bottom = "1rem";
        (button as HTMLElement).style.right = "1rem";
        (button as HTMLElement).style.zIndex = "9999999";
      });
    };

    // Check immediately and then periodically
    checkButtonVisibility();
    const intervalId = setInterval(checkButtonVisibility, 300);

    // Also check when accessibility modes change
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const classList = (mutation.target as Element).classList;
          if (
            classList.contains("high-contrast") ||
            classList.contains("grayscale") ||
            classList.contains("reduced-motion") ||
            classList.contains("dark-mode") ||
            classList.contains("dyslexic-font")
          ) {
            checkButtonVisibility();
          }
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    // Check after any DOM changes that might affect the button
    const domObserver = new MutationObserver(() => {
      checkButtonVisibility();
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
      domObserver.disconnect();
    };
  }, [highContrast, grayscale, reducedMotion, darkMode, dyslexicFont]);

  // Increase font size by 10%
  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
    }
  };

  // Decrease font size by 10%
  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="a11y-widget-container">
          <button
            ref={buttonRef}
            aria-label="פתח תפריט נגישות"
            className="a11y-widget-button !fixed !bottom-4 !right-4 !z-[999999] !bg-[#124A34] !text-white !p-3 !rounded-full !shadow-lg !focus:outline-none"
            onClick={(e) => {
              e.stopPropagation(); // Stop event propagation
              setOpen(!open);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation(); // Stop event propagation
                setOpen(!open);
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              zIndex: 9999999,
              visibility: "visible",
              opacity: 1,
              pointerEvents: "auto",
              transform: "none",
              transition: "none",
              animation: "none",
            }}
            data-tempo-no-select="true" // Add a data attribute to help Tempo identify this as a special element
            data-a11y-fixed="true" // Add a data attribute to help identify this as a fixed element
          >
            <Accessibility className="h-6 w-6" />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[350px] p-6 rounded-xl shadow-lg border-2 border-[#d39a6a]/30 bg-white text-right a11y-popover-content"
        side="top"
        sideOffset={5}
        align="end"
        alignOffset={-50}
        role="dialog"
        aria-label="הגדרות נגישות"
        onOpenAutoFocus={(e) => e.preventDefault()} // Prevent auto focus to avoid scroll jumps
      >
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 order-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetAllSettings}
                className="text-[#d39a6a] hover:text-[#124A34] transition-colors font-bold"
                aria-label="איפוס הגדרות נגישות"
              >
                <RefreshCw className="h-4 w-4 ml-1" />
                איפוס
              </Button>
              <a
                href="/accessibility-statement"
                className="text-sm text-[#124A34] hover:text-[#d39a6a] transition-colors font-bold px-2 py-1"
                aria-label="הצהרת נגישות"
              >
                הצהרת נגישות
              </a>
            </div>
            <h2
              className="text-xl font-bold text-[#124A34] order-1"
              id="a11y-dialog-title"
            >
              הגדרות נגישות
            </h2>
          </div>

          {/* Quick access toolbar */}
          <div className="grid grid-cols-3 gap-3 py-2">
            <AccessibilityToolbarButton
              onClick={decreaseFontSize}
              icon={ZoomOut}
              label="הקטן גופן"
              ariaLabel="הקטן גודל גופן"
            />
            <AccessibilityToolbarButton
              onClick={increaseFontSize}
              icon={ZoomIn}
              label="הגדל גופן"
              ariaLabel="הגדל גודל גופן"
            />
            <AccessibilityToolbarButton
              onClick={toggleHighContrast}
              icon={Eye}
              label="ניגודיות גבוהה"
              active={highContrast}
              ariaLabel="הפעל או בטל ניגודיות גבוהה"
            />
            <AccessibilityToolbarButton
              onClick={toggleDarkMode}
              icon={darkMode ? Sun : Moon}
              label={darkMode ? "מצב רגיל" : "מצב כהה"}
              active={darkMode}
              ariaLabel="הפעל או בטל מצב כהה"
            />
            <AccessibilityToolbarButton
              onClick={toggleReducedMotion}
              icon={PanelTop}
              label="הפחתת אנימציות"
              active={reducedMotion}
              ariaLabel="הפעל או בטל הפחתת אנימציות"
            />
            <AccessibilityToolbarButton
              onClick={toggleGrayscale}
              icon={EyeOff}
              label="מצב גווני אפור"
              active={grayscale}
              ariaLabel="הפעל או בטל מצב גווני אפור"
            />
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t border-[#124A34]/10 text-center">
            <p>קיצור מקלדת: Alt + A לפתיחת תפריט הנגישות</p>
          </div>

          {/* Font size indicator */}
          <div className="flex justify-between items-center">
            <div className="bg-[#f0f0f0] rounded-full h-2 w-full overflow-hidden">
              <div
                className="bg-[#124A34] h-full rounded-full"
                style={{ width: `${fontSize}%` }}
                aria-hidden="true"
              />
            </div>
            <span className="text-sm font-medium text-[#124A34] mr-2 whitespace-nowrap">
              גודל הגופן: {fontSize}%
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityWidget;
