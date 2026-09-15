// Shared site behaviour: theme persistence + dynamic year.
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  const toggle = document.getElementById('toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
