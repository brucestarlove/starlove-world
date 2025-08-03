// Global scroll-to-top utility
export function initScrollToTop() {
  // Ensure page scrolls to top on load
  function scrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  // Execute immediately and on page events
  scrollToTop();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scrollToTop);
  } else {
    scrollToTop();
  }

  document.addEventListener("astro:after-swap", scrollToTop);
  window.addEventListener("load", scrollToTop);
}