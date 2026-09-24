/* ============================================================
   CAIPEX 메인 사이트 공통 스크립트
   - 테마: 라이트/다크/시스템 3모드 순환 (기본: 시스템)
   - 언어: 한국어/영어/일본어 (localStorage 유지, 기본: English)
   - 라이트박스, 비활성 버튼 가드
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 테마 (페인트 전 스크립트가 data-theme을 이미 설정) ---------- */
  var MODES = ['system', 'light', 'dark'];
  var ICONS = { system: '🖥️', light: '☀️', dark: '🌙' };
  var THEME_LABELS = {
    system: { en: 'System mode', ko: '시스템 모드', ja: 'システムモード' },
    light: { en: 'Light mode', ko: '라이트 모드', ja: 'ライトモード' },
    dark: { en: 'Dark mode', ko: '다크 모드', ja: 'ダークモード' }
  };

  function themeMode() { return localStorage.getItem('caipex-theme') || 'system'; }

  function applyTheme(mode) {
    var resolved = mode === 'dark' ? 'dark'
      : mode === 'light' ? 'light'
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', resolved);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = ICONS[mode];
      var lang = currentLang();
      btn.title = (THEME_LABELS[mode] && THEME_LABELS[mode][lang]) || mode;
    }
    localStorage.setItem('caipex-theme', mode);
  }

  /* ---------- 언어 ---------- */
  var I18N = window.CAIPEX_I18N;
  function currentLang() {
    var saved = localStorage.getItem('caipex-lang');
    var valid = I18N.langs.some(function (l) { return l.code === saved; });
    return valid ? saved : 'en'; // 기본: English
  }

  function t(key, lang) {
    var entry = I18N.dict[key];
    if (!entry) return '';
    return entry[lang] !== undefined ? entry[lang] : entry.en;
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : lang === 'ja' ? 'ja' : 'en');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = t(key, lang);
      if (text === '') return;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = t(el.getAttribute('data-i18n-title'), lang);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var text = t(el.getAttribute('data-i18n-ph'), lang);
      if (text !== '') el.placeholder = text;
    });
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = lang;
    localStorage.setItem('caipex-lang', lang);
    applyTheme(themeMode()); // 테마 버튼 툴팁 언어 갱신
  }

  /* ---------- 초기화 ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = MODES[(MODES.indexOf(themeMode()) + 1) % MODES.length];
        applyTheme(next);
      });
    }
    var sel = document.getElementById('langSelect');
    if (sel) {
      I18N.langs.forEach(function (l) {
        var opt = document.createElement('option');
        opt.value = l.code;
        opt.textContent = l.emoji + ' ' + l.label;
        sel.appendChild(opt);
      });
      sel.addEventListener('change', function () { applyLang(sel.value); });
    }
    applyTheme(themeMode());
    applyLang(currentLang());

    /* 비활성 버튼 가드 */
    document.querySelectorAll('.nav-btn.disabled, .btn-download.disabled, .btn-event.disabled, .btn-submit.disabled').forEach(function (btn) {
      btn.addEventListener('click', function (e) { e.preventDefault(); });
    });

    /* 라이트박스 */
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
      var lightboxImg = document.getElementById('lightbox-img');
      var closeBtn = lightbox.querySelector('.lightbox-close');
      var thumbs = document.querySelectorAll('.event-thumb img, .pub-cover img');
      thumbs.forEach(function (thumb) {
        thumb.style.cursor = 'zoom-in';
        thumb.addEventListener('click', function () {
          lightboxImg.src = thumb.src;
          lightboxImg.alt = thumb.alt;
          lightbox.classList.add('active');
        });
      });
      if (closeBtn) closeBtn.addEventListener('click', function () { lightbox.classList.remove('active'); });
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) lightbox.classList.remove('active');
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) lightbox.classList.remove('active');
      });
    }
  });
})();
