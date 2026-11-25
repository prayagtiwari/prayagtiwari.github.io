(function () {
  "use strict";
  var header = document.querySelector(".masthead");
  var toggle = document.querySelector(".site-nav-toggle");
  var menu = document.getElementById("site-menu");
  if (header && toggle && menu) {
    header.classList.add("is-enhanced");
    toggle.hidden = false;
    function closeMenu(returnFocus) {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      if (returnFocus) toggle.focus();
    }
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      header.classList.toggle("menu-open", open);
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu(false);
    });
    document.addEventListener("click", function (event) {
      if (!header.contains(event.target)) closeMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("menu-open")) closeMenu(true);
    });
    header.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!header.contains(document.activeElement)) closeMenu(false);
      }, 0);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1200) closeMenu(false);
    });
  }
  var profileButton = document.querySelector(".author__urls-wrapper button");
  var profileLinks = document.getElementById("profile-links");
  if (profileButton && profileLinks) {
    function closeProfile(returnFocus) {
      profileButton.classList.remove("open");
      profileButton.setAttribute("aria-expanded", "false");
      profileLinks.style.display = "none";
      if (returnFocus) profileButton.focus();
    }
    profileButton.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      var open = profileButton.getAttribute("aria-expanded") !== "true";
      profileButton.classList.toggle("open", open);
      profileButton.setAttribute("aria-expanded", String(open));
      profileLinks.style.display = open ? "block" : "none";
    }, true);
    document.addEventListener("click", function (event) {
      if (!profileButton.parentElement.contains(event.target)) closeProfile(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && profileButton.classList.contains("open")) {
        closeProfile(true);
      }
    });
  }
}());
