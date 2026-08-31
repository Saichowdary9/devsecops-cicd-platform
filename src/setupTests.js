import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement IntersectionObserver, which the pipeline visual
// and the navbar's scroll-spy hook rely on. A minimal mock is enough for
// components to mount cleanly in tests without exercising real scrolling.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver;
global.IntersectionObserver = MockIntersectionObserver;

// jsdom also lacks matchMedia, used to respect prefers-reduced-motion.
window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
    };
  };
