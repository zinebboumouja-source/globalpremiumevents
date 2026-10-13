/* Global Premium Events — shared behaviour: nav, counters, lightbox, page transitions */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Navigation: shrink on scroll, mobile menu, dropdown ---- */
  var nav = document.getElementById('gpeNav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    var toggle = nav.querySelector('.gpe-nav-toggle');
    if (toggle) toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('.gpe-dd').forEach(function (dd) {
      var btn = dd.querySelector('.gpe-dd-toggle');
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var open = dd.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', function (e) {
        if (!dd.contains(e.target)) { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
      });
    });
  }

  /* ---- Back to top ---- */
  var top = document.createElement('button');
  top.className = 'gpe-top';
  top.type = 'button';
  top.setAttribute('aria-label', 'Back to top');
  top.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(top);
  var onTop = function () { top.classList.toggle('show', window.scrollY > 600); };
  onTop();
  window.addEventListener('scroll', onTop, { passive: true });
  top.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    var skip = document.querySelector('.gpe-nav-logo'); if (skip) skip.focus({ preventScroll: true });
  });

  /* ---- Count-up for hero figures (12+, 8,000+, 45+ …) ---- */
  var stats = document.querySelectorAll('.hero-stat b');
  stats.forEach(function (el) {
    var raw = el.textContent.trim();
    var m = raw.match(/^([\d,]+)(.*)$/);
    if (!m) return;
    var target = parseInt(m[1].replace(/,/g, ''), 10);
    if (!target || target < 5) return;
    var suffix = m[2], useComma = m[1].indexOf(',') > -1;
    var fmt = function (n) { var s = String(n); return useComma ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : s; };
    if (reduce) return;
    el.textContent = fmt(0) + suffix;
    var start = null, dur = 1600;
    var step = function (t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * e)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    setTimeout(function () { requestAnimationFrame(step); }, 350);
  });

  /* ---- Lightbox for field photography ---- */
  var sel = '[data-lightbox], .case-bento div.bento-tile img, .field-card img';
  var imgs = Array.prototype.slice.call(document.querySelectorAll(sel)).filter(function (i) { return i.tagName === 'IMG' && !i.closest('a'); });
  if (imgs.length) {
    var lb = document.createElement('div');
    lb.className = 'gpe-lb';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Photo viewer');
    lb.innerHTML = '<button class="gpe-lb-close" aria-label="Close">&times;</button><button class="gpe-lb-prev" aria-label="Previous photo">&larr;</button><figure><img alt=""><figcaption></figcaption></figure><button class="gpe-lb-next" aria-label="Next photo">&rarr;</button>';
    document.body.appendChild(lb);
    var big = lb.querySelector('img'), cap = lb.querySelector('figcaption'), idx = 0, last = null;
    var show = function (i) {
      idx = (i + imgs.length) % imgs.length;
      big.src = imgs[idx].currentSrc || imgs[idx].src;
      big.alt = imgs[idx].alt || '';
      cap.textContent = imgs[idx].alt || '';
    };
    var open = function (i) { last = document.activeElement; show(i); lb.classList.add('open'); lb.querySelector('.gpe-lb-close').focus(); };
    var close = function () { lb.classList.remove('open'); if (last) last.focus(); };
    imgs.forEach(function (img, i) {
      img.setAttribute('tabindex', '0');
      img.addEventListener('click', function () { open(i); });
      img.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(i); } });
    });
    lb.querySelector('.gpe-lb-close').addEventListener('click', close);
    lb.querySelector('.gpe-lb-prev').addEventListener('click', function () { show(idx - 1); });
    lb.querySelector('.gpe-lb-next').addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
  }

  /* ---- Soft fade between pages ---- */
  if (!reduce) {
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) !== '/' || href.indexOf('#') > -1) return;
      e.preventDefault();
      document.body.classList.add('gpe-leaving');
      setTimeout(function () { window.location.href = href; }, 200);
    });
    window.addEventListener('pageshow', function () { document.body.classList.remove('gpe-leaving'); });
  }
})();
