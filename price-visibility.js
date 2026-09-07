// 2026-09-08 00:10 変更済み
// Firebaseの settings/showPrices が false のとき、公開画面の価格表示をすべて隠します。
(function () {
  'use strict';

  function applyVisibility(showPrices) {
    document.documentElement.classList.toggle('prices-hidden', showPrices === false);
  }

  function connect() {
    if (!window.firebase || !firebase.apps || !firebase.apps.length) {
      window.setTimeout(connect, 120);
      return;
    }

    try {
      firebase.database().ref('settings/showPrices').on('value', function (snapshot) {
        // 初回設定前は、これまで通り価格を表示します。
        applyVisibility(snapshot.val() !== false);
      });
    } catch (error) {
      console.warn('価格表示設定を読み込めませんでした。', error);
      applyVisibility(true);
    }
  }

  const style = document.createElement('style');
  style.textContent = `
    .prices-hidden .price,
    .prices-hidden .op-price,
    .prices-hidden .option-price-preview,
    .prices-hidden .option-choice small,
    .prices-hidden .cart-bar .total,
    .prices-hidden .review-total,
    .prices-hidden .review-line > span:last-child { display: none !important; }
  `;
  document.head.appendChild(style);
  connect();
})();
