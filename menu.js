(() => {
  'use strict';
  const tabs = document.getElementById('menuTabs');
  const panel = document.getElementById('menuPanel');
  const showPrices = SITE_CONFIG.showPrices !== false;
  document.body.classList.toggle('prices-hidden', !showPrices);
  document.getElementById('hiddenNote').hidden = showPrices;
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  MENU_DATA.forEach(category => {
    const link = element('a', '', category.title);
    link.href = '#' + category.id;
    link.dataset.category = category.id;
    tabs.append(link);
  });
  function render() {
    const category = MENU_DATA.find(item => item.id === location.hash.slice(1)) || MENU_DATA[0];
    tabs.querySelectorAll('a').forEach(link => {
      if (link.dataset.category === category.id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = category.title + '｜中国料理 福林楼';
    const section = element('section', 'menu-section');
    section.dataset.category = category.id;
    const heading = element('div', 'menu-heading');
    heading.append(element('h2', '', category.title), element('span', 'menu-count', category.items.length + (category.id === 'course' ? 'コース' : '品')));
    section.append(heading);
    if (category.id === 'course') section.append(element('p', 'course-intro', 'すべてのコースを2名様から承ります。'));
    const hasPhotos = category.items.some(item => item.photo);
    const list = element('div', category.id === 'course' ? 'course-list' : 'menu-items' + (hasPhotos ? ' with-photos' : ''));
    category.items.forEach(item => {
      const isCourse = category.id === 'course';
      const family = item.id === 'course-family';
      const card = element('article', isCourse ? 'course-card' + (family ? ' family' : '') : 'dish-row');
      if (item.badge) card.append(element('span', 'menu-badge' + (family ? ' family' : ''), item.badge));
      if (isCourse) {
        card.append(element('h3', '', item.name));
        if (showPrices) card.append(element('p', 'course-price', (family ? '合計 ' : 'お一人様 ') + item.price.toLocaleString('ja-JP') + '円（税込）'));
        card.append(element('p', 'course-people', family ? '2〜4名様でお楽しみいただけます' : '2名様からご予約いただけます'));
        const dishes = element('ol', 'course-dishes');
        item.dishes.forEach(dish => dishes.append(element('li', '', dish)));
        card.append(dishes);
      } else {
        if (item.photo) {
          const photoButton = element('button', 'dish-photo');
          photoButton.type = 'button';
          photoButton.setAttribute('aria-label', item.name + 'の写真を拡大');
          const photo = element('img');
          photo.src = './' + item.photo;
          photo.alt = item.name + 'の盛り付け例';
          photo.loading = 'lazy';
          photo.decoding = 'async';
          photoButton.append(photo);
          card.append(photoButton);
        }
        const content = element('div', 'dish-content');
        const line = element('div', 'dish-line');
        line.append(element('h3', 'dish-name', item.name));
        if (showPrices) line.append(element('span', 'dish-price', '¥' + Number(item.price).toLocaleString('ja-JP')));
        content.append(line);
        if (item.desc) content.append(element('p', 'dish-desc', item.desc));
        card.append(content);
      }
      list.append(card);
    });
    section.append(list);
    if (hasPhotos) section.append(element('p', 'photo-note', '写真は盛り付け例です。仕入れ状況などにより、実際の料理と異なる場合があります。'));
    if (category.id === 'course') {
      const link = element('a', 'course-book', 'コース料理を予約する →');
      link.href = 'https://reserve.fukurinrou.jp/';
      section.append(link);
    }
    panel.replaceChildren(section);
  }
  window.addEventListener('hashchange', render);
  const photoDialog = document.getElementById('dishDialog');
  const photoDialogImage = document.getElementById('dishDialogImage');
  const photoDialogTitle = document.getElementById('dishDialogTitle');
  let photoTrigger;
  panel.addEventListener('click', event => {
    const button = event.target.closest('.dish-photo');
    if (!button || !photoDialog || typeof photoDialog.showModal !== 'function') return;
    photoTrigger = button;
    const photo = button.querySelector('img');
    photoDialogImage.src = photo.src;
    photoDialogImage.alt = photo.alt;
    photoDialogTitle.textContent = button.closest('.dish-row').querySelector('.dish-name').textContent;
    photoDialog.showModal();
  });
  photoDialog?.querySelector('.dish-dialog-close').addEventListener('click', () => photoDialog.close());
  photoDialog?.addEventListener('click', event => { if (event.target === photoDialog) photoDialog.close(); });
  photoDialog?.addEventListener('close', () => {
    photoDialogImage.removeAttribute('src');
    if (photoTrigger?.isConnected) photoTrigger.focus();
  });
  render();
})();
