(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var els = [];
  var ticking = false;

  function collect() {
    els = Array.prototype.slice
      .call(document.querySelectorAll("[data-parallax]"))
      .map(function (el) {
        return { el: el, factor: parseFloat(el.getAttribute("data-parallax")) || 0 };
      });
  }

  function apply() {
    var y = window.scrollY || window.pageYOffset;
    els.forEach(function (item) {
      item.el.style.transform = "translateY(" + y * item.factor + "px)";
    });
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(apply);
      ticking = true;
    }
  }

  function init() {
    collect();
    if (!els.length) return;
    window.addEventListener("scroll", onScroll, { passive: true });
    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
