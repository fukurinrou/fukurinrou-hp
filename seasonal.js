(() => {
  'use strict';
  const root = document.getElementById('seasonalItems');
  if (!root) return;
  let requestedMonth = '';
  let inFlight = false;
  function monthNow() { return new Intl.DateTimeFormat('sv-SE', { timeZone:'Asia/Tokyo', year:'numeric', month:'2-digit' }).format(new Date()); }
  function node(tag, cls, text) { const el = document.createElement(tag); el.className = cls; if (text) el.textContent = text; return el; }
  function empty() { root.replaceChildren(node('p', 'seasonal-empty', '今月の期間限定商品は準備中です。最新情報はお電話（092-481-1369）またはInstagramでご確認ください。')); }
  async function refresh() {
    if (inFlight) return;
    inFlight = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    const month = monthNow();
    // 月をまたいだ場合、前月の商品をすぐに消す。
    if (requestedMonth && requestedMonth !== month) empty();
    requestedMonth = month;
    try {
      const response = await fetch(SITE_CONFIG.seasonalApiUrl, { cache:'no-store', credentials:'omit', signal:controller.signal });
      if (!response.ok) throw new Error('unavailable');
      const data = await response.json();
      if (!Array.isArray(data.items)) throw new Error('invalid');
      const cards = data.items.filter(item => item.month === month && typeof item.title === 'string').map(item => {
        const article = node('article', 'seasonal-box');
        const figure = node('figure', 'seasonal-image');
        const img = node('img', '');
        const imageUrl = new URL(item.imageUrl, SITE_CONFIG.seasonalApiUrl);
        if (imageUrl.protocol !== 'https:') throw new Error('invalid image');
        img.src = imageUrl.href; img.alt = item.title; img.loading = 'lazy';
        figure.append(img);
        const content = node('div', 'seasonal-content');
        content.append(node('div', 'seasonal-badge', Number(month.slice(5)) + '月限定'), node('h3', '', item.title), node('p', 'seasonal-period', item.priceText));
        if (item.description) content.append(node('p', 'seasonal-description', item.description));
        const phone = node('a', 'map-link', 'お電話でお問い合わせ →'); phone.href = 'tel:0924811369'; content.append(phone);
        article.append(figure, content); return article;
      });
      if (cards.length) root.replaceChildren(...cards); else empty();
    } catch {
      // 通信失敗時も、期限切れの商品や未公開の商品で置き換えない。
      if (!root.querySelector('.seasonal-box')) root.replaceChildren(node('p', 'seasonal-empty', '最新の期間限定商品は、お電話（092-481-1369）またはInstagramでご案内しています。'));
    } finally { clearTimeout(timeout); inFlight = false; }
  }
  refresh();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
  setInterval(() => { if (!document.hidden) refresh(); }, 60000);
})();
