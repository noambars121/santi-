// This script ensures the accessibility button is always visible in high contrast mode
document.addEventListener("DOMContentLoaded", function () {
  // Create a style element
  const style = document.createElement("style");
  style.id = "a11y-button-fix";
  style.innerHTML = `
    .a11y-widget-button,
    button.a11y-widget-button,
    .a11y-widget-container button {
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
    }
    
    body.high-contrast .a11y-widget-button,
    .high-contrast .a11y-widget-button,
    .high-contrast button.a11y-widget-button,
    .high-contrast .a11y-widget-container button {
      background-color: yellow !important;
      color: black !important;
      border: 3px solid white !important;
      box-shadow: 0 0 0 2px black, 0 0 10px rgba(0, 0, 0, 0.5) !important;
    }
  `;
  document.head.appendChild(style);

  // Check if the button exists and is visible
  setInterval(function () {
    const buttons = document.querySelectorAll(".a11y-widget-button");
    if (buttons.length > 0) {
      buttons.forEach((button) => {
        if (document.body.classList.contains("high-contrast")) {
          button.style.backgroundColor = "yellow";
          button.style.color = "black";
        } else {
          button.style.backgroundColor = "#124a34";
          button.style.color = "white";
        }
        button.style.position = "fixed";
        button.style.bottom = "1rem";
        button.style.right = "1rem";
        button.style.zIndex = "9999999";
        button.style.visibility = "visible";
        button.style.opacity = "1";
        button.style.display = "flex";
      });
    }
  }, 500);
});
