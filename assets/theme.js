// Gallery slider functionality
const initGallerySlider = () => {
  const slider = document.querySelector(".gallery-slider");
  if (!slider) return;

  let currentSlide = 0;
  const slides = slider.querySelectorAll(".gallery-item");
  const totalSlides = slides.length;

  const updateSlider = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  window.nextSlide = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  };

  window.prevSlide = () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  };
};

// Mobile menu functionality
const initMobileMenu = () => {
  const menuButton = document.querySelector("[data-mobile-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
  });
};

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initGallerySlider();
  initMobileMenu();
});
