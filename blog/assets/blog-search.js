// Nav-bar search on post pages: lists matching writeups as you type.
// The blog index has its own inline filter, so this does nothing there.
(function () {
  var input = document.getElementById('navsearch');
  if (!input || document.getElementById('search')) return;

  var box = input.parentNode;
  var panel = document.createElement('div');
  panel.className = 'ns-results';
  panel.hidden = true;
  box.appendChild(panel);

  var posts = null, active = -1;

  // The blog index is the single list of writeups; read the cards from it.
  function load() {
    if (!posts) {
      posts = fetch('/blog/').then(function (r) { return r.text(); }).then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        return [].map.call(doc.querySelectorAll('.card'), function (c) {
          return {
            href: new URL(c.getAttribute('href'), location.origin + '/blog/').pathname,
            title: c.querySelector('h3').textContent,
            src: c.querySelector('.src').textContent,
            hay: [c.getAttribute('data-search'), c.getAttribute('data-difficulty'), c.querySelector('.date').textContent].join(' ').toLowerCase()
          };
        });
      }).catch(function () { posts = null; return []; });
    }
    return posts;
  }

  function links() { return panel.querySelectorAll('a'); }

  function highlight(i) {
    var l = links();
    if (!l.length) return;
    active = (i + l.length) % l.length;
    l.forEach(function (a, n) { a.classList.toggle('on', n === active); });
  }

  function render() {
    var q = input.value;
    var words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) { panel.hidden = true; return; }
    load().then(function (list) {
      if (input.value !== q) return; // a newer keystroke will render
      var hits = list.filter(function (p) {
        return words.every(function (w) { return p.hay.indexOf(w) !== -1; });
      });
      panel.textContent = '';
      active = -1;
      hits.forEach(function (p) {
        var a = document.createElement('a');
        a.href = p.href;
        var t = document.createElement('span'); t.className = 'ns-title'; t.textContent = p.title;
        var s = document.createElement('span'); s.className = 'ns-src'; s.textContent = p.src;
        a.append(t, s);
        panel.appendChild(a);
      });
      if (!hits.length) {
        var none = document.createElement('div');
        none.className = 'ns-empty';
        none.textContent = 'No writeups match.';
        panel.appendChild(none);
      }
      panel.hidden = false;
    });
  }

  input.addEventListener('input', render);
  input.addEventListener('focus', render);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); highlight(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); highlight(active - 1); }
    else if (e.key === 'Escape') { panel.hidden = true; }
    else if (e.key === 'Enter') {
      var l = links();
      location.href = active >= 0 && l[active] ? l[active].href : '/blog/?q=' + encodeURIComponent(input.value.trim());
    }
  });
  document.addEventListener('click', function (e) { if (!box.contains(e.target)) panel.hidden = true; });
})();
