(function () {
  // Per-page color moods. Mostly neutral (warmgray/coolgray/stone) so the
  // site reads as one calm, monochrome-leaning system rather than a
  // different saturated hue per page — each page keeps just one quiet key
  // accent for character. Case studies with their own real brand color
  // (GSSF's blue, Spendly's acid/violet, IC's orange) keep that instead of
  // the shared key accent, since that's the project's identity, not ours.
  var moods = {
    about: ["warmgray", "stone", "key"],
    projects: ["coolgray", "warmgray", "key"],
    gssf: ["navy", "coolgray", "navy"],
    spendly: ["acid", "violet", "warmgray"],
    ic: ["orange", "warmgray", "coolgray"],
    liner: ["warmgray", "key", "stone"]
  };

  function init() {
    var path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "") || "index";
    var key = path === "index" ? "home" : path;
    var mood = moods[key];
    if (!mood) return; // Home / Creative Works keep their own bespoke backgrounds

    // Parallax is applied to a plain wrapper, not the .mesh-blob itself —
    // the blob already has its own CSS drift animation, and a CSS animation
    // always wins over an inline style on the same property (transform), so
    // a JS-driven parallax transform on the blob directly would be silently
    // ignored. Nesting lets both transforms compose visually instead.
    //
    // Three large, overlapping blobs positioned top / middle / bottom so the
    // glow reads as one continuous field down the whole page, not two spots
    // in opposite corners with a flat gap between them.
    var wrap = document.createElement("div");
    wrap.className = "page-ambient";
    wrap.innerHTML =
      '<div data-parallax="0.08" style="position:absolute;width:85vw;height:85vw;top:-30%;left:-25%;">' +
        '<div class="mesh-blob ' + mood[0] + '" style="width:100%;height:100%;"></div>' +
      '</div>' +
      '<div data-parallax="-0.05" style="position:absolute;width:80vw;height:80vw;top:30%;right:-30%;">' +
        '<div class="mesh-blob ' + mood[1] + '" style="width:100%;height:100%;"></div>' +
      '</div>' +
      '<div data-parallax="0.03" style="position:absolute;width:75vw;height:75vw;bottom:-35%;left:5%;">' +
        '<div class="mesh-blob ' + mood[2] + '" style="width:100%;height:100%;"></div>' +
      '</div>' +
      '<div class="grain"></div>';
    document.body.insertBefore(wrap, document.body.firstChild);
    document.body.classList.add("has-ambient");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
