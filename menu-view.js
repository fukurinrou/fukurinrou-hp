// 2026-09-08 00:10 変更済み
// ?view=menu のときだけ、Firebaseメニューを注文操作なしで表示します。
(function () {
  'use strict';

  if (new URLSearchParams(window.location.search).get('view') !== 'menu') return;

  document.documentElement.classList.add('menu-view-only');
  document.title = '福林楼 お料理メニュー';

  const style = document.createElement('style');
  style.textContent = `
    .menu-view-only .qty-stepper,
    .menu-view-only .add-option-btn,
    .menu-view-only .cart-bar,
    .menu-view-only .option-overlay { display: none !important; }
    .menu-view-only .cust-wrap { padding-bottom: 24px; }
    .menu-view-only .menu-view-notice {
      margin: 0; padding: 10px 16px; background: var(--paper-deep);
      color: var(--ink-soft); font-size: 12.5px; text-align: center;
      border-bottom: 1px solid var(--line);
    }
  `;
  document.head.appendChild(style);

  function makeReadOnly() {
    const header = document.querySelector('.cust-header');
    if (header) {
      const sub = header.querySelector('.sub');
      if (sub) sub.textContent = 'お料理メニュー｜閲覧専用';
      if (!document.querySelector('.menu-view-notice')) {
        const notice = document.createElement('p');
        notice.className = 'menu-view-notice';
        notice.textContent = 'このページから注文はできません。価格は店舗設定により表示・非表示が切り替わります。';
        header.insertAdjacentElement('afterend', notice);
      }
    }
    document.querySelectorAll('.qty-stepper button, .add-option-btn').forEach(function (button) {
      button.disabled = true;
      button.setAttribute('aria-hidden', 'true');
    });
  }

  const observer = new MutationObserver(makeReadOnly);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', makeReadOnly);
  makeReadOnly();
})();
