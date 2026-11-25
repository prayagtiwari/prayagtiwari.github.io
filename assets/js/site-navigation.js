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
    profileButton.parentElement.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!profileButton.parentElement.contains(document.activeElement)) closeProfile(false);
      }, 0);
    });
    profileLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeProfile(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024) closeProfile(false);
    });
  }
}());

/* Enhance the existing lists without changing their source or publication data. */
(function () {
  "use strict";
  var content = document.querySelector(".page-publications .archive__content > div");
  if (!content) return;
  var definitions = [
    { title: "Conference Proceedings", label: "Conferences", emptyLabel: "conference papers", id: "conference-proceedings" },
    { title: "Journal Articles", label: "Journals", emptyLabel: "journal articles", id: "journal-articles" }
  ];
  var headings = Array.from(content.querySelectorAll("h2"));
  var groups = definitions.map(function (definition) {
    var heading = headings.find(function (item) { return item.textContent.trim() === definition.title; });
    var list = heading && heading.nextElementSibling;
    if (!list || list.tagName !== "UL") return null;
    return { definition: definition, heading: heading, list: list, items: Array.from(list.children) };
  });
  if (groups.some(function (group) { return !group; })) return;

  function normalize(text) {
    return text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  }
  var tools = document.createElement("section");
  tools.className = "publication-tools";
  tools.setAttribute("aria-label", "Find publications");
  var jumps = document.createElement("nav");
  jumps.className = "publication-jumps";
  jumps.setAttribute("aria-label", "Publication sections");
  tools.appendChild(jumps);
  groups.forEach(function (group) {
    if (!group.heading.id) group.heading.id = group.definition.id;
    group.heading.setAttribute("tabindex", "-1");
    var link = document.createElement("a");
    link.href = "#" + group.heading.id;
    var label = document.createElement("span");
    label.textContent = group.definition.label;
    group.count = document.createElement("span");
    group.count.className = "publication-count";
    link.appendChild(label);
    link.appendChild(group.count);
    jumps.appendChild(link);
    group.searchText = group.items.map(function (item) { return normalize(item.textContent); });
    group.empty = document.createElement("p");
    group.empty.className = "publication-empty";
    group.empty.textContent = "No " + group.definition.emptyLabel + " match your search.";
    group.empty.hidden = true;
    group.list.after(group.empty);
  });
  var form = document.createElement("form");
  form.setAttribute("role", "search");
  var label = document.createElement("label");
  label.htmlFor = "publication-query";
  label.textContent = "Search publications";
  var row = document.createElement("div");
  row.className = "publication-search-row";
  var query = document.createElement("input");
  query.type = "search";
  query.id = "publication-query";
  query.placeholder = "e.g. ICML 2026";
  query.setAttribute("aria-describedby", "publication-search-help");
  var reset = document.createElement("button");
  reset.type = "button";
  reset.textContent = "Clear";
  reset.setAttribute("aria-label", "Clear search");
  row.appendChild(query);
  row.appendChild(reset);
  form.appendChild(label);
  form.appendChild(row);
  tools.appendChild(form);
  var help = document.createElement("p");
  help.id = "publication-search-help";
  help.className = "publication-help";
  help.textContent = "Search by title, author, venue, or year.";
  tools.appendChild(help);
  var status = document.createElement("p");
  status.className = "publication-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  status.setAttribute("aria-atomic", "true");
  tools.appendChild(status);
  content.insertBefore(tools, groups[0].heading);
  var total = groups.reduce(function (sum, group) { return sum + group.items.length; }, 0);
  function filter() {
    var words = normalize(query.value).split(" ").filter(Boolean);
    var visible = 0;
    groups.forEach(function (group) {
      var count = 0;
      group.items.forEach(function (item, index) {
        var matches = words.every(function (word) { return group.searchText[index].includes(word); });
        item.hidden = !matches;
        if (matches) count += 1;
      });
      group.count.textContent = String(count);
      group.empty.hidden = count !== 0;
      visible += count;
    });
    status.textContent = "Showing " + visible + " of " + total + " publications.";
    reset.disabled = query.value.length === 0;
  }
  query.addEventListener("input", filter);
  function clear() {
    query.value = "";
    filter();
    query.focus();
  }
  reset.addEventListener("click", clear);
  query.addEventListener("keydown", function (event) {
    if (event.key === "Escape") clear();
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    filter();
  });
  window.addEventListener("pageshow", filter);
  filter();
}());
