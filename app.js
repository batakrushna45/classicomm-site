/* Builds the whole page from config.js. You normally do NOT need to edit this file. */
(function () {
  "use strict";
  var C = window.SITE_CONFIG;
  if (!C) { document.body.innerHTML = "<p style='padding:40px;color:#fff'>config.js is missing or has a typo (check quotes and commas).</p>"; return; }

  var $ = function (id) { return document.getElementById(id); };
  function txt(id, v) { var e = $(id); if (e) e.textContent = v || ""; }
  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function show(id, on) { var e = $(id); if (e) e.hidden = !on; }

  /* theme colours */
  var t = C.theme || {}, r = document.documentElement.style;
  var map = { gold: "--gold", goldDark: "--gold-d", goldLight: "--gold-l", background: "--bg", backgroundAlt: "--bg-alt", heading: "--heading", text: "--text", dark: "--dark" };
  Object.keys(map).forEach(function (k) { if (t[k]) r.setProperty(map[k], t[k]); });

  /* page title */
  var S = C.seo || {};
  document.title = S.title || C.company.name;
  var md = document.querySelector('meta[name="description"]');
  if (md && S.description) md.setAttribute("content", S.description);
  function ext(a, href) { if (/^https?:/i.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; } }

  /* header + menu */
  txt("brandName", C.company.name);
  var menu = $("menu");
  (C.menu || []).forEach(function (m) {
    var a = mk("a", "", m.label); a.href = m.link; ext(a, m.link); menu.appendChild(a);
    a.addEventListener("click", closeMenu);
  });
  var burger = $("burger");
  function closeMenu() { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  window.addEventListener("scroll", function () { $("top").classList.toggle("solid", window.scrollY > 40); }, { passive: true });

  /* hero */
  var h = C.hero || {};
  txt("heroEyebrow", h.eyebrow); txt("heroTitle", h.title); txt("heroSub", h.subtitle);
  var hb = $("heroBtn"); hb.textContent = h.buttonText || ""; hb.href = h.buttonLink || "#contact"; ext(hb, hb.href);
  if (!h.buttonText) hb.hidden = true;

  /* about */
  var A = C.about || {};
  show("about", A.show !== false);
  txt("aboutH", A.heading);
  (A.paragraphs || []).forEach(function (p) { $("aboutBody").appendChild(mk("p", "", p)); });

  /* focus cards */
  var F = C.focus || {};
  show("focus", F.show !== false);
  txt("focusH", F.heading); txt("focusIntro", F.intro);
  (F.items || []).forEach(function (it, i) {
    var c = mk("div", "card rv");
    c.appendChild(mk("span", "num", "0" + (i + 1)));
    c.appendChild(mk("h3", "", it.title)); c.appendChild(mk("p", "", it.text));
    $("focusCards").appendChild(c);
  });

  /* approach */
  var P = C.approach || {};
  show("approach", P.show !== false);
  txt("approachH", P.heading);
  (P.items || []).forEach(function (it) {
    var c = mk("div", "col rv");
    c.appendChild(mk("h3", "", it.title)); c.appendChild(mk("p", "", it.text));
    $("approachCols").appendChild(c);
  });

  /* registration (optional) */
  var R = C.registration || {};
  var rows = (R.rows || []).filter(function (x) { return x && x.value; });
  show("registration", R.show === true && rows.length > 0);
  txt("regH", R.heading);
  rows.forEach(function (x) {
    var d = mk("div"); d.appendChild(mk("dt", "", x.label)); d.appendChild(mk("dd", "", x.value));
    $("regRows").appendChild(d);
  });

  /* contact + form */
  var K = C.contact || {};
  show("contact", K.show !== false);
  txt("contactH", K.heading); txt("contactIntro", K.intro);
  var L = K.labels || {}, req = K.required || {}, max = K.maxWords || 2000;
  ["name", "email", "mobile", "comments"].forEach(function (k) {
    var lb = $("l-" + k); lb.textContent = L[k] || k;
    if (req[k]) { var s = mk("span", "req", " *"); lb.appendChild(s); }
  });
  $("submitBtn").textContent = L.submit || "Send";
  var ml = $("mailLink"); ml.textContent = C.company.email; ml.href = "mailto:" + C.company.email;

  var form = $("enquiry"), area = $("f-comments"), counter = $("count"), status = $("status"), btn = $("submitBtn");

  function words(s) { s = s.trim(); return s ? s.split(/\s+/).length : 0; }
  function updateCount() {
    var n = words(area.value);
    counter.textContent = n + " / " + max + " words";
    counter.classList.toggle("over", n > max);
    return n;
  }
  area.addEventListener("input", updateCount); updateCount();

  function setErr(name, msg) {
    var f = form.elements[name].closest(".field");
    f.classList.toggle("bad", !!msg);
    f.querySelector(".err").textContent = msg || "";
    return !msg;
  }
  function validate() {
    var v = {
      name: form.elements.name.value.trim(), email: form.elements.email.value.trim(),
      mobile: form.elements.mobile.value.trim(), comments: area.value.trim()
    };
    var ok = true;
    ok = setErr("name", req.name && !v.name ? "Please enter your name." : "") && ok;
    var em = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email);
    ok = setErr("email", (req.email || v.email) && !em ? "Please enter a valid email address." : "") && ok;
    var digits = v.mobile.replace(/\D/g, "").length;
    var mobBad = (req.mobile || v.mobile) && (!/^[+\d\s\-().]+$/.test(v.mobile) || digits < 7 || digits > 15);
    ok = setErr("mobile", mobBad ? "Please enter a valid mobile number." : "") && ok;
    var n = words(v.comments);
    var cm = req.comments && !n ? "Please add a few words." : (n > max ? "Comments are limited to " + max + " words." : "");
    ok = setErr("comments", cm) && ok;
    return ok ? v : null;
  }

  function say(msg, cls) { status.textContent = msg; status.className = "status " + (cls || ""); }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.elements._gotcha.value) { say(K.successMessage, "ok"); return; } /* bots */
    var v = validate(); if (!v) return;

    var ep = (K.formEndpoint || "").trim();
    if (!ep) { /* fallback: open visitor's email app */
      var body = "Name: " + v.name + "\nEmail: " + v.email + "\nMobile: " + v.mobile + "\n\n" + v.comments;
      window.location.href = "mailto:" + C.company.email + "?subject=" + encodeURIComponent("Website enquiry from " + v.name) + "&body=" + encodeURIComponent(body);
      say("Opening your email app…", "ok");
      return;
    }
    btn.disabled = true; say("Sending…");
    fetch(ep, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name: v.name, email: v.email, mobile: v.mobile, comments: v.comments, _subject: "Website enquiry from " + v.name })
    }).then(function (res) {
      if (!res.ok) throw new Error(res.status);
      form.reset(); updateCount(); say(K.successMessage, "ok");
    }).catch(function () {
      say(K.errorMessage + " (" + C.company.email + ")", "bad");
    }).then(function () { btn.disabled = false; });
  });

  /* footer */
  txt("footName", "© " + (C.footer && C.footer.showYear === false ? "" : new Date().getFullYear() + " ") + (C.company.legalName || C.company.name));
  txt("footNote", (C.footer || {}).note);

  var fl = $("footLinks");
  ((C.footer || {}).links || []).forEach(function (x) { var l = mk("a", "", x.label); l.href = x.link; ext(l, x.link); fl.appendChild(l); });

  /* scroll reveal */
  var items = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: .15 });
    items.forEach(function (n, i) { n.style.transitionDelay = (i % 3) * 120 + "ms"; io.observe(n); });
  } else { items.forEach(function (n) { n.classList.add("in"); }); }
})();
