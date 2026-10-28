(function () {
  'use strict';

  // Author on the cover. A language pack may override it with its own ui.author (e.g. in Latin script)
  var AUTHOR = 'Максим Кукликов';

  // Languages in selector order. Texts live in lang/<code>.js
  var LANGS = [
    ['ru', 'Русский'], ['en', 'English'], ['eo', 'Esperanto'], ['isv', 'Medžuslovjansky'],
    ['uk', 'Українська'], ['be', 'Беларуская'], ['pl', 'Polski'], ['cs', 'Čeština'],
    ['sr', 'Српски'], ['bg', 'Български'], ['de', 'Deutsch'], ['fr', 'Français'],
    ['es', 'Español'], ['it', 'Italiano'], ['pt', 'Português'], ['nl', 'Nederlands'],
    ['sv', 'Svenska'], ['fi', 'Suomi'], ['la', 'Latina'], ['tr', 'Türkçe'],
    ['ja', '日本語'], ['zh', '中文'], ['ko', '한국어'], ['vi', 'Tiếng Việt'],
    ['th', 'ไทย'], ['km', 'ខ្មែរ'], ['hi', 'हिन्दी'],
    ['ar', 'العربية'], ['he', 'עברית'], ['tok', 'toki pona']
  ];
  var RTL = { ar: true, he: true };

  var packs = {};
  window.DirtyCode = { lang: function (code, pack) { packs[code] = pack; } };

  var book = document.getElementById('book');
  var more = document.getElementById('more');
  var select = document.getElementById('lang');
  var themeBtn = document.getElementById('theme');

  var KINDS = ['fails', 'wins'];
  var state = { code: null, t: null, step: 0, folio: 0, chainNo: 0, pools: {}, storiesShown: 0, neutralNo: 0, lastNeutral: { wishes: -1, checks: -1 } };

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  function has(code) {
    return LANGS.some(function (l) { return l[0] === code; });
  }

  function pickLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && has(q)) return q;
    var saved = store('dc-lang');
    if (saved && has(saved)) return saved;
    // No choice made yet: take the first browser language the book has
    var navs = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < navs.length; i++) {
      var p = String(navs[i]).toLowerCase().split('-')[0];
      if (has(p)) return p;
    }
    return LANGS[0][0];
  }

  function load(code, cb) {
    if (packs[code]) return cb();
    var s = document.createElement('script');
    s.src = 'lang/' + code + '.js';
    s.onload = cb;
    s.onerror = function () { if (code !== 'ru') setLang('ru'); };
    document.head.appendChild(s);
  }

  // Deterministic generator: the book in a given language always reads the same way
  function rng(seed) {
    return function () {
      seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function shuffle(arr, r) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function fmt(n) {
    try { return new Intl.NumberFormat(state.code).format(n); } catch (e) { return String(n); }
  }
  function quote(s) {
    var q = state.t.ui.q;
    return q[0] + s + q[1];
  }

  function page(cls) {
    var sec = el('section', 'page ' + cls);
    book.appendChild(sec);
    return sec;
  }
  function running(sec, text) { sec.appendChild(el('header', 'running', text)); }
  function folio(sec) {
    state.folio++;
    sec.appendChild(el('footer', 'folio', '— ' + fmt(state.folio) + ' —'));
  }

  function renderTitle() {
    var ui = state.t.ui;
    var sec = page('title');

    // Title on two lines: the first word is smudged, a cursor blinks after the last one
    var words = ui.title.split(' ');
    var first = words.shift();
    var mid = el('div', 'cover-mid');
    mid.appendChild(el('h1', null,
      '<span class="smudge">' + first + '</span>' + (words.length ? '<br>' + words.join(' ') : '') +
      '<span class="cursor" aria-hidden="true"></span>'));
    mid.appendChild(el('p', 'tagline', ui.tagline));
    sec.appendChild(mid);

    // Cover footer: year on the left, author on the right on one baseline; agents as a footnote to the name
    var foot = el('div', 'cover-foot');
    foot.appendChild(el('p', 'imprint', ui.year || '2026'));
    var byline = el('div', 'byline');
    byline.appendChild(el('p', 'author', (ui.author || AUTHOR) + '<sup>*</sup>'));
    byline.appendChild(el('p', 'coauthor', '* ' + ui.coauthor));
    foot.appendChild(byline);
    sec.appendChild(foot);
  }

  function renderPrologue() {
    var t = state.t, ui = t.ui;
    var sec = page('prologue');
    running(sec, ui.title);
    sec.appendChild(el('h2', null, ui.prologueTitle));
    t.prologue.forEach(function (p, i) {
      sec.appendChild(el('p', i === 0 ? 'lead' : null, p));
    });
    folio(sec);
  }

  // Each story appears exactly once. Kinds alternate: fail, win, fail…
  // When one kind runs out, the remaining stories of the other follow. The first fail always opens the book
  function nextChain() {
    for (var tries = 0; tries < KINDS.length; tries++) {
      var kind = KINDS[state.chainNo++ % KINDS.length];
      var list = state.t[kind] || [];
      var pool = state.pools[kind];
      if (!pool) {
        var idx = list.map(function (_, i) { return i; });
        var r = rng(hash(state.code + kind));
        pool = state.pools[kind] = {
          queue: kind === 'fails' ? [0].concat(shuffle(idx.slice(1), r)) : shuffle(idx, r)
        };
      }
      if (pool.queue.length) return list[pool.queue.shift()];
    }
    return null;
  }

  // After a thousand the number jumps to 1000 − 7 = 993 (Tokyo Ghoul), grows to a thousand again, and loops:
  // …999, 1000, 993, 994 … 1000, 993… The number never exceeds a thousand, and the wish / result alternation
  // holds because the loop has eight steps. Memes are tied to the ordinal n, not to the displayed number
  var LOOP_TOP = 1000;
  var LOOP_BACK = 7;
  function shownNumber(n) {
    if (n <= LOOP_TOP) return n;
    return LOOP_TOP - LOOP_BACK + (n - LOOP_TOP - 1) % (LOOP_BACK + 1);
  }

  function stepTitle(n) {
    var ui = state.t.ui;
    return ui.step + ' ' + fmt(shownNumber(n)) + '. ' + (n % 2 === 1 ? ui.wish : ui.check);
  }

  // Neutral steps: after every NEUTRAL_EVERY stories, a page of NEUTRAL_PAIRS_BETWEEN pairs;
  // once the stories run out, pages of NEUTRAL_PAIRS_AFTER pairs forever
  var NEUTRAL_EVERY = 2;
  var NEUTRAL_PAIRS_BETWEEN = 2;
  var NEUTRAL_PAIRS_AFTER = 4;

  function neutralLine(kind) {
    var list = state.t.neutral[kind];
    var r = rng(hash(state.code + ':neutral:' + kind) ^ Math.imul(++state.neutralNo, 2654435761));
    var i = Math.floor(r() * list.length);
    if (i === state.lastNeutral[kind] && list.length > 1) i = (i + 1) % list.length;
    state.lastNeutral[kind] = i;
    return list[i];
  }

  // One step: heading, a description for the first two, then the wish or the finding
  function renderStep(sec, text) {
    var ui = state.t.ui;
    var n = ++state.step;
    var isWish = n % 2 === 1;
    sec.appendChild(el('h3', null, stepTitle(n)));
    if (n <= 2) {
      sec.appendChild(el('p', null, isWish ? ui.wishDesc : ui.checkDesc));
      sec.appendChild(el('p', 'example', ui.example));
    }
    sec.appendChild(isWish ? el('blockquote', 'wish', quote(text)) : el('p', 'finding', text));
  }

  // Memes on exact step numbers (lang: specials). Always in pairs: odd is the wish, the next is the result
  function special(n) {
    var sp = state.t.specials;
    return sp && sp[n];
  }
  function specialIn(from, to) {
    for (var n = from; n <= to; n++) if (special(n)) return true;
    return false;
  }

  // A neutral pair of steps; if a meme sits on its numbers, show the meme instead
  function renderNeutralPair(sec) {
    var n = state.step + 1;
    renderStep(sec, special(n) || neutralLine('wishes'));
    renderStep(sec, special(n + 1) || neutralLine('checks'));
  }

  function renderNeutral(pairs) {
    // Regular pages go exactly up to step 992 and stop; after that comes the eternal 993–1000 page
    var loopStart = LOOP_TOP - LOOP_BACK;
    if (state.step >= loopStart - 1) return renderLoopPage();
    pairs = Math.min(pairs, (loopStart - 1 - state.step) / 2);
    var sec = page('chain neutral');
    running(sec, state.t.ui.title);
    for (var i = 0; i < pairs; i++) renderNeutralPair(sec);
    folio(sec);
  }

  // The 993–1000 page is built once and then repeats unchanged:
  // same steps, same text, same page number
  function renderLoopPage() {
    if (state.loopHtml) {
      page('chain neutral loop').innerHTML = state.loopHtml;
      return;
    }
    var sec = page('chain neutral loop');
    running(sec, state.t.ui.title);
    while (state.step < LOOP_TOP) renderNeutralPair(sec);
    folio(sec);
    state.loopHtml = sec.innerHTML;
  }

  // A meme falls inside the next story: render neutral steps up to and including the meme first,
  // so the number matches exactly and the story follows intact
  function renderInterlude(storyLength) {
    var sec = page('chain neutral');
    running(sec, state.t.ui.title);
    while (specialIn(state.step + 1, state.step + storyLength)) renderNeutralPair(sec);
    folio(sec);
  }

  // Steps are numbered through the whole book: odd ones are wishes, even ones review the result.
  // The step description is shown only the first two times, then straight to examples.
  function renderChain() {
    var hasNeutral = !!state.t.neutral;
    if (hasNeutral && state.storiesShown > 0 && state.storiesShown % NEUTRAL_EVERY === 0 && !state.neutralDue) {
      state.neutralDue = true;
      return renderNeutral(NEUTRAL_PAIRS_BETWEEN);
    }
    var chain = state.pending || nextChain();
    state.pending = null;
    if (!chain) {
      if (!hasNeutral) return;
      return renderNeutral(NEUTRAL_PAIRS_AFTER);
    }
    if (hasNeutral && specialIn(state.step + 1, state.step + chain.length)) {
      state.pending = chain;
      return renderInterlude(chain.length);
    }
    state.neutralDue = false;
    state.storiesShown++;
    var sec = page('chain');
    running(sec, state.t.ui.title);
    chain.forEach(function (text) { renderStep(sec, text); });
    folio(sec);
  }

  // Endless book: keep writing while the end is less than a couple of screens away
  function fill() {
    if (!state.t) return;
    var guard = 0;
    while (more.getBoundingClientRect().top < window.innerHeight * 2.5 && guard++ < 6) {
      renderChain();
    }
  }
  window.addEventListener('scroll', fill, { passive: true });
  window.addEventListener('resize', fill);

  function setLang(code, fromUser) {
    select.value = code;
    document.documentElement.lang = code;
    document.documentElement.dir = RTL[code] ? 'rtl' : 'ltr';
    if (fromUser) {
      store('dc-lang', code);
      try {
        var u = new URL(location.href);
        u.searchParams.set('lang', code);
        history.replaceState(null, '', u);
      } catch (e) {}
    }
    load(code, function () {
      state.code = code;
      state.t = packs[code];
      state.step = 0;
      state.folio = 0;
      state.chainNo = 0;
      state.storiesShown = 0;
      state.neutralNo = 0;
      state.neutralDue = false;
      state.pending = null;
      state.loopHtml = null;
      state.lastNeutral = { wishes: -1, checks: -1 };
      state.pools = {};
      var ui = state.t.ui;
      document.title = ui.title;
      themeBtn.setAttribute('aria-label', ui.theme);
      themeBtn.title = ui.theme;
      more.textContent = ui.loading;
      book.innerHTML = '';
      renderTitle();
      renderPrologue();
      window.scrollTo(0, 0);
      fill();
    });
  }

  LANGS.forEach(function (l) {
    var o = document.createElement('option');
    o.value = l[0];
    o.textContent = l[1];
    select.appendChild(o);
  });
  select.addEventListener('change', function () { setLang(select.value, true); });

  // The theme button shows where it will switch: moon to dark, sun to light
  var ICONS = {
    moon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
  };
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  function isDark() {
    var theme = document.documentElement.dataset.theme;
    return theme ? theme === 'dark' : systemDark.matches;
  }
  function syncThemeIcon() { themeBtn.innerHTML = isDark() ? ICONS.sun : ICONS.moon; }
  themeBtn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    store('dc-theme', next);
    syncThemeIcon();
  });
  if (systemDark.addEventListener) systemDark.addEventListener('change', syncThemeIcon);
  syncThemeIcon();

  setLang(pickLang());
})();
