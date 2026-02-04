(function () {
  "use strict";
  const SCROLL_NAV_THRESHOLD = 50;
  const nav = document.querySelector('nav');
  if (nav) {
    const handleNavScroll = function () {
      if (window.scrollY > SCROLL_NAV_THRESHOLD) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  function setupNavMobile() {
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const navIconMenu = document.getElementById('nav-icon-menu');
    const navIconClose = document.getElementById('nav-icon-close');

    if (navToggle && navMobile) {
      navToggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = navMobile.classList.toggle('is-open');
        if (navIconMenu) navIconMenu.classList.toggle('hidden', isOpen);
        if (navIconClose) navIconClose.classList.toggle('hidden', !isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        navMobile.setAttribute('aria-hidden', !isOpen);
      });

      navMobile.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navMobile.classList.remove('is-open');
          if (navIconMenu) navIconMenu.classList.remove('hidden');
          if (navIconClose) navIconClose.classList.add('hidden');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Open menu');
          navMobile.setAttribute('aria-hidden', 'true');
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupNavMobile);
  } else {
    setupNavMobile();
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();
