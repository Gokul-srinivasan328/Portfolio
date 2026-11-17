/* =============================================
   GOKUL S | DATA ANALYST PORTFOLIO
   main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── AOS INIT ── */
  AOS.init({ duration: 700, once: true, offset: 60 });

  /* ── CUSTOM CURSOR ── */
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    ring.animate(
      { left: e.clientX + 'px', top: e.clientY + 'px' },
      { duration: 400, fill: 'forwards' }
    );
  });

  document.querySelectorAll('a, button, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });

  /* ── MOBILE MENU ── */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu   = document.getElementById('mobileMenu');

  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  window.closeMobile = function () {
    mobileMenu.classList.remove('open');
  };

  /* ── ACTIVE NAV ON SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  /* ── SMOOTH BACK TO TOP ── */
  window.backToTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── SKILL TAG HOVER RIPPLE ── */
  document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
    });
    tag.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  /* ── TYPING EFFECT on hero greeting ── */
  const greetingEl = document.querySelector('.hero-greeting');
  if (greetingEl) {
    const text     = '// Hello, World!';
    const delay    = 60;
    greetingEl.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        greetingEl.textContent += text[i];
        i++;
        setTimeout(type, delay);
      }
    };
    setTimeout(type, 400);
  }

  /* ── CONTACT FORM – open mailto on send ── */
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const name    = document.getElementById('contactName')?.value || '';
      const email   = document.getElementById('contactEmail')?.value || '';
      const subject = document.getElementById('contactSubject')?.value || 'Portfolio Enquiry';
      const message = document.getElementById('contactMessage')?.value || '';
      const mailto  = `mailto:gokulsrinivasan328@gmail.com`
        + `?subject=${encodeURIComponent(subject)}`
        + `&body=${encodeURIComponent(`Hi Gokul,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
      window.location.href = mailto;
    });
  }

  /* ── NAVBAR background on scroll ── */
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10,10,15,0.97)';
    } else {
      navbar.style.background = 'rgba(10,10,15,0.85)';
    }
  });

});
