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

  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const navIconMenu = document.getElementById('nav-icon-menu');
  const navIconClose = document.getElementById('nav-icon-close');

  if (navToggle && navMobile && navIconMenu && navIconClose) {
    navToggle.addEventListener('click', function () {
      const isOpen = !navMobile.classList.contains('hidden');
      navMobile.classList.toggle('hidden');
      navIconMenu.classList.toggle('hidden', isOpen);
      navIconClose.classList.toggle('hidden', !isOpen);
      navToggle.setAttribute('aria-expanded', !isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
    });

    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.add('hidden');
        navIconMenu.classList.remove('hidden');
        navIconClose.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });
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
