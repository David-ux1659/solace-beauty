/* ==========================================================================
   SOLACE BEAUTY — Main JavaScript
   Navigation, scroll animations, filters, testimonials
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initScrollTop();
  initFilters();
  initTestimonials();
  initNavScroll();
});

/* ---------- Mobile Navigation ---------- */
function initNavigation() {
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('mobileMenu');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobile.classList.toggle('open');
    document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when a link is clicked
  mobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Navbar Background on Scroll ---------- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Scroll Reveal Animations ---------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ---------- Scroll to Top Button ---------- */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Category Filters (Blog + Shop) ---------- */
function initFilters() {
  const filterContainers = document.querySelectorAll('.blog-filters__inner, .shop-filters__inner');

  filterContainers.forEach(container => {
    const pills = container.querySelectorAll('.pill');
    // Find the grid to filter — look for blog grid or product grid
    const grid = document.getElementById('blogGrid') || document.getElementById('productGrid');
    if (!pills.length || !grid) return;

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const filter = pill.dataset.filter;

        // Update active pill
        pills.forEach(p => {
          p.classList.remove('pill--active');
          p.classList.add('pill--inactive');
        });
        pill.classList.add('pill--active');
        pill.classList.remove('pill--inactive');

        // Filter items
        const items = grid.children;
        Array.from(items).forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = '';
            // Re-trigger reveal animation
            item.classList.remove('visible');
            requestAnimationFrame(() => item.classList.add('visible'));
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
}

/* ---------- Testimonial Slider ---------- */
function initTestimonials() {
  const slider = document.getElementById('testimonialSlider');
  const dotsContainer = document.getElementById('testimonialDots');
  if (!slider || !dotsContainer) return;

  const testimonials = slider.querySelectorAll('.testimonial');
  if (testimonials.length <= 1) return;

  let current = 0;

  // Create dots
  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `testimonial-dot ${i === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    testimonials[current].style.display = 'none';
    testimonials[current].classList.remove('visible');

    current = index;

    testimonials[current].style.display = '';
    // Animate in
    testimonials[current].classList.remove('visible');
    requestAnimationFrame(() => {
      testimonials[current].classList.add('reveal', 'visible');
    });

    // Update dots
    dotsContainer.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  // Auto-advance every 6 seconds
  let interval = setInterval(() => {
    goTo((current + 1) % testimonials.length);
  }, 6000);

  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(interval));
  slider.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 6000);
  });
}
