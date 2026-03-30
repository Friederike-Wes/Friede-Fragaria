document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.hero-side-nav a, .sidebar-nav a');
  const backToTopButton = document.getElementById('back-to-top');
  const mobileQuery = window.matchMedia('(max-width: 768px)');

  const getShortLabel = (label, href) => {
    if (!href) return label;

    if (href.includes('#home')) return 'Home';
    if (href.includes('#illustrationen')) return 'Illus';
    if (href.includes('#workshops')) return 'Workshops';
    if (href.includes('#club')) return 'Club';
    if (href.includes('#about')) return 'Ueber mich';

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

  updateMobileLabels();
  activateLink();
});
