(function () {
  var path = window.location.pathname.replace(/^\//, "").replace(/\.html$/, "") || "index";
  var current = path === "index" ? "home" : path;

  var links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "about.html", label: "About", key: "about" },
    { href: "projects.html", label: "Projects", key: "projects" },
    { href: "artworks.html", label: "Artworks", key: "artworks" }
  ];

  var linkHtml = links
    .map(function (l) {
      var isCurrent = l.key === current;
      return (
        '<a href="' + l.href + '" class="site-nav-link' + (isCurrent ? " is-current" : "") + '">' +
        l.label +
        "</a>"
      );
    })
    .join("");

  var nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.innerHTML =
    '<a href="index.html" class="site-nav-logo">Jacqueline Lee</a>' +
    '<div class="site-nav-links">' + linkHtml + "</div>";

  document.body.insertBefore(nav, document.body.firstChild);
})();
