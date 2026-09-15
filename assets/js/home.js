(function () {
  const socialRow = document.getElementById('socials');
  if (socialRow && typeof SOCIALS !== 'undefined') {
    socialRow.innerHTML = SOCIALS.map((s) => {
      const external = s.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      return `<a class="icon-btn" href="${s.href}"${external} aria-label="${s.label}" title="${s.label}">`
        + `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${ICONS[s.icon] || ''}</svg></a>`;
    }).join('');
  }

  const grid = document.getElementById('projects-grid');
  if (grid && typeof PROJECTS !== 'undefined') {
    grid.innerHTML = PROJECTS.map((p) => {
      const external = p.href.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
      return `<a class="p-card" href="${p.href}"${external}><h3>${p.title}</h3><p>${p.desc}</p></a>`;
    }).join('');
  }
})();
