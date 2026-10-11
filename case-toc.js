(function () {
  function init() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('[data-toc]'));
    if (!sections.length) return;

    var rail = document.createElement('nav');
    rail.className = 'cs-rail';

    sections.forEach(function (sec, i) {
      var id = sec.id || 'toc-section-' + i;
      sec.id = id;
      var num = String(i + 1).padStart(2, '0');
      var btn = document.createElement('button');
      btn.className = 'cs-rail-item';
      btn.type = 'button';
      btn.innerHTML =
        '<span class="cs-rail-bar"></span>' +
        '<span class="cs-rail-num">' + num + '</span>' +
        '<span class="cs-rail-label">' + sec.getAttribute('data-toc') + '</span>';
      btn.addEventListener('click', function () {
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      rail.appendChild(btn);
    });

    document.body.appendChild(rail);
    document.body.classList.add('has-cs-rail');

    var items = Array.prototype.slice.call(rail.querySelectorAll('.cs-rail-item'));
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var idx = sections.indexOf(entry.target);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            items.forEach(function (el) { el.classList.remove('is-active'); });
            items[idx].classList.add('is-active');
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach(function (sec) { io.observe(sec); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
