document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.hero-side-nav a, .sidebar-nav a');
  const backToTopButton = document.getElementById('back-to-top');
  const mobileQuery = window.matchMedia('(max-width: 768px)');

  const getShortLabel = (label, href) => {
    if (!href) return label;

    if (href.includes('#home')) return 'Home';
    if (href.includes('#illustrationen')) return 'Illus';
    if (href.includes('#workshops')) return 'Workshops';
    if (href.includes('#club')) return 'Botanischer Illustrationsclub';
    if (href.includes('#about')) return 'Über mich';
    if (href.includes('#kontakt')) return 'Kontakt';

    return label;
  };

  const updateMobileLabels = () => {
    links.forEach((link) => {
      if (!link.dataset.fullLabel) {
        link.dataset.fullLabel = link.textContent.trim();
      }

      const href = link.getAttribute('href') || '';

      link.textContent = mobileQuery.matches
        ? getShortLabel(link.dataset.fullLabel, href)
        : link.dataset.fullLabel;
    });
  };

  const activateLink = () => {
    const hash = window.location.hash || '#home';
    const path = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach((link) => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');

      const linkHref = link.getAttribute('href');
      const normalizedHref = linkHref.replace(/^\.\//, '');

      if (normalizedHref === hash || normalizedHref === `${path}${hash}`) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }

      if ((normalizedHref === '#home' || normalizedHref === 'index.html#home') && (hash === '#home' || hash === '')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  };

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      links.forEach((l) => l.classList.remove('active'));
      links.forEach((l) => l.removeAttribute('aria-current'));
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');

      const hash = link.getAttribute('href');
      if (hash.startsWith('#')) {
        window.history.replaceState(null, '', hash);
      }
    });
  });

  window.addEventListener('hashchange', activateLink);
  mobileQuery.addEventListener('change', updateMobileLabels);

  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '#home');
      activateLink();
    });
  }

  // Modal für Termine
  const modal = document.getElementById('termine-modal');
  const btn = document.getElementById('termine-btn');
  const span = document.getElementsByClassName('close')[0];

  if (btn) {
    btn.onclick = function() {
      modal.style.display = 'block';
    }
  }

  if (span) {
    span.onclick = function() {
      modal.style.display = 'none';
    }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  // Kontaktformular: öffnet das E-Mail-Programm mit vorausgefüllter Nachricht
  const kontaktForm = document.querySelector('.kontakt-form');
  if (kontaktForm) {
    kontaktForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!kontaktForm.checkValidity()) {
        kontaktForm.reportValidity();
        return;
      }

      const name = (document.getElementById('kontakt-name')?.value || '').trim();
      const email = (document.getElementById('kontakt-email')?.value || '').trim();
      const nachricht = (document.getElementById('kontakt-nachricht')?.value || '').trim();

      const subject = encodeURIComponent('Kontakt über Website');
      const body = encodeURIComponent(
        `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}`
      );

      window.location.href = `mailto:friederike.westrich@web.de?subject=${subject}&body=${body}`;
    });
  }

  updateMobileLabels();
  activateLink();
});
