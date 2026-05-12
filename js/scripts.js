/* =========================================
   Mobile nav toggle
   ========================================= */

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.nav-hamburger');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    const isOpen = navbar.classList.contains('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navbar.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* =========================================
   Active nav link
   ========================================= */

(function markActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname;

  // Extract the filename (e.g. "about.html" or "" for index)
  const filename = path.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    // Normalize: treat "" and "index.html" as the same
    const linkFile = href.split('/').pop() || 'index.html';
    if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* =========================================
   Smooth scroll for anchor links
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* =========================================
   Scroll reveal (IntersectionObserver)
   ========================================= */

(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();
