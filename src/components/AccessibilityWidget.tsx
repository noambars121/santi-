import React, { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Slider } from "./ui/slider";
import { Accessibility } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [open, setOpen] = useState(false);

  // מקש Alt + A לפתיחת תפריט הנגישות
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && e.key === "a") || (e.altKey && e.key === "א")) {
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // הוספת מאזין למקשי מקלדת לזיהוי משתמשי מקלדת
  useEffect(() => {
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
        background-color: ${highContrast ? "yellow" : "#124a34"} !important;
        color: ${highContrast ? "black" : "white"} !important;
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
      }
    `;

    styleEl.innerHTML = buttonStyles;

    return () => {
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [highContrast]);

  // טוען הגדרות שנשמרו ב-localStorage
  useEffect(() => {
    const savedFontSize = localStorage.getItem("a11y-fontSize");
    const savedContrast = localStorage.getItem("a11y-highContrast");
    const savedDyslexicFont = localStorage.getItem("a11y-dyslexicFont");
    const savedReducedMotion = localStorage.getItem("a11y-reducedMotion");
    const savedGrayscale = localStorage.getItem("a11y-grayscale");

    if (savedFontSize) {
      const size = parseInt(savedFontSize);
      setFontSize(size);
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
  }, []);

  const changeFontSize = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    localStorage.setItem("a11y-fontSize", newSize.toString());

    // עדכון בצורה בטוחה יותר ללא reflow מלא
    try {
      // Force layout update without hiding the entire body
      const elements = document.querySelectorAll("*");
      elements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.maxHeight = el.style.maxHeight;
        }
      });
    } catch (error) {
      console.error("Error updating layout:", error);
    }
  };

  // Add a ref to track the button element
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Effect to ensure the button is always visible
  useEffect(() => {
    const checkButtonVisibility = () => {
      if (buttonRef.current) {
        buttonRef.current.style.visibility = "visible";
        buttonRef.current.style.opacity = "1";
        buttonRef.current.style.pointerEvents = "auto";
      }
    };

    // Check immediately and then periodically
    checkButtonVisibility();
    const intervalId = setInterval(checkButtonVisibility, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    if (newValue) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
    localStorage.setItem("a11y-highContrast", newValue.toString());

    // Force minimal layout update
    try {
      document.body.style.zoom = "99.99%";
      setTimeout(() => {
        document.body.style.zoom = "100%";
      }, 10);
    } catch (error) {
      console.error("Error updating contrast:", error);
    }
  };

  const toggleDyslexicFont = () => {
    const newValue = !dyslexicFont;
    setDyslexicFont(newValue);
    if (newValue) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
    localStorage.setItem("a11y-dyslexicFont", newValue.toString());

    // Force minimal layout update
    try {
      document.body.style.zoom = "99.99%";
      setTimeout(() => {
        document.body.style.zoom = "100%";
      }, 10);
    } catch (error) {
      console.error("Error updating font:", error);
    }
  };

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

  const resetAllSettings = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = "100%";
    localStorage.setItem("a11y-fontSize", "100");

    setHighContrast(false);
    document.body.classList.remove("high-contrast");
    localStorage.setItem("a11y-highContrast", "false");

    setDyslexicFont(false);
    document.body.classList.remove("dyslexic-font");
    localStorage.setItem("a11y-dyslexicFont", "false");

    setReducedMotion(false);
    document.body.classList.remove("reduced-motion");
    localStorage.setItem("a11y-reducedMotion", "false");

    setGrayscale(false);
    document.body.classList.remove("grayscale");
    localStorage.setItem("a11y-grayscale", "false");

    // Force minimal layout update
    try {
      document.body.style.zoom = "99.99%";
      setTimeout(() => {
        document.body.style.zoom = "100%";
      }, 10);
    } catch (error) {
      console.error("Error resetting settings:", error);
    }
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className="justify-start items-center"
    >
      <PopoverTrigger asChild>
        <div className="a11y-widget-container">
          <button
            aria-label="פתח תפריט נגישות"
            className="a11y-widget-button"
            onClick={() => setOpen(!open)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setOpen(!open);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <Accessibility className="h-6 w-6" />
          </button>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-5 rounded-lg shadow-lg border-2 border-[#d39a6a]/30 bg-white"
        side="top"
        sideOffset={5}
        align="end"
        alignOffset={-50}
        role="dialog"
        aria-label="תפריט הגדרות נגישות"
      >
        <div className="space-y-4">
          <h2
            className="text-xl font-bold text-[#124A34] mb-4"
            id="a11y-dialog-title"
          >
            הגדרות נגישות
          </h2>

          <div className="space-y-2">
            <label
              htmlFor="font-size"
              className="text-sm font-medium block text-[#124A34]"
            >
              גודל הגופן: {fontSize}%
            </label>
            <Slider
              id="font-size"
              min={80}
              max={150}
              step={10}
              value={[fontSize]}
              onValueChange={changeFontSize}
              aria-label="שינוי גודל הגופן"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#124A34]">
              ניגודיות גבוהה
            </span>
            <Switch
              checked={highContrast}
              onCheckedChange={toggleHighContrast}
              aria-label="הפעל או בטל ניגודיות גבוהה"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#124A34]">
              גופן ידידותי לדיסלקטים
            </span>
            <Switch
              checked={dyslexicFont}
              onCheckedChange={toggleDyslexicFont}
              aria-label="הפעל או בטל גופן לדיסלקטים"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#124A34]">
              הפחתת אנימציות
            </span>
            <Switch
              checked={reducedMotion}
              onCheckedChange={toggleReducedMotion}
              aria-label="הפעל או בטל הפחתת אנימציות"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#124A34]">
              מצב גווני אפור
            </span>
            <Switch
              checked={grayscale}
              onCheckedChange={toggleGrayscale}
              aria-label="הפעל או בטל מצב גווני אפור"
            />
          </div>

          <div className="pt-3 mt-2 border-t border-[#124A34]/20">
            <div className="flex justify-between">
              <a
                href="/accessibility-statement"
                className="text-sm text-[#124A34] hover:text-[#d39a6a] transition-colors font-bold"
                aria-label="הצהרת נגישות"
              >
                הצהרת נגישות
              </a>
              <button
                onClick={resetAllSettings}
                className="text-sm text-[#d39a6a] hover:text-[#124A34] transition-colors font-bold"
                aria-label="איפוס הגדרות נגישות"
              >
                איפוס הגדרות
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityWidget;
