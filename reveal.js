(function () {
  function init() {
    // auto-enroll common repeating blocks so pages don't need hand-tagged
    // data-reveal on every element — progressive enhancement: if this script
    // never runs, nothing gets the attribute and content just shows normally.
    //
    // Section text and section media are enrolled SEPARATELY (not just the
    // whole .cs-section as one block) so a card/image visibly arrives a beat
    // after its heading as you scroll, rather than the entire section
    // appearing all at once — this is what makes scrolling through one named
    // section (e.g. "Design Decisions") feel like things are progressively
    // showing up, not just one static block fading in.
    var textAuto = document.querySelectorAll('.cs-section-head, .proj-card, .ds-card, .cat-row');
    Array.prototype.forEach.call(textAuto, function (el) {
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'fade');
    });

    var mediaAuto = document.querySelectorAll(
      '.cs-figure, .cs-grid-2, .cs-outcomes, .cs-stat-banner, .cs-swatches, .cs-tag-row, .cs-callout'
    );
    Array.prototype.forEach.call(mediaAuto, function (el) {
      if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'scale');
    });

    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;

    // stagger items that share a parent (e.g. a row of cards)
    var parentCounts = new WeakMap();
    els.forEach(function (el) {
      var parent = el.parentElement;
      var n = parentCounts.has(parent) ? parentCounts.get(parent) : 0;
      el.style.transitionDelay = Math.min(n * 90, 360) + 'ms';
      parentCounts.set(parent, n + 1);
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
