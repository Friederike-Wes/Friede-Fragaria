document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.sidebar-nav a');
  const backToTopButton = document.getElementById('back-to-top');

  const activateLink = () => {
    const hash = window.location.hash || '#home';

    links.forEach((link) => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');

      const linkHref = link.getAttribute('href');

      if (linkHref === hash) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }

      if (linkHref === 'index.html' && (hash === '#home' || hash === '')) {
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

  activateLink();
});
