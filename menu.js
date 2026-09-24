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
    const list = element('div', category.id === 'course' ? 'course-list' : 'menu-items');
    category.items.forEach(item => {
      const isCourse = category.id === 'course';
      const family = item.id === 'course-family';
      const card = element('article', isCourse ? 'course-card' + (family ? ' family' : '') : 'dish-row');
      if (item.badge) card.append(element('span', 'menu-badge' + (family ? ' family' : ''), item.badge));
      if (isCourse) {
        card.append(element('h3', '', item.name), element('p', 'course-price', (family ? '合計 ' : 'お一人様 ') + item.price.toLocaleString('ja-JP') + '円（税込）'));
        card.append(element('p', 'course-people', family ? '2〜4名様でお楽しみいただけます' : '2名様からご予約いただけます'));
        const dishes = element('ol', 'course-dishes');
        item.dishes.forEach(dish => dishes.append(element('li', '', dish)));
        card.append(dishes);
      } else {
        const line = element('div', 'dish-line');
        line.append(element('h3', 'dish-name', item.name), element('span', 'dish-price', '¥' + Number(item.price).toLocaleString('ja-JP')));
        card.append(line);
        if (item.desc) card.append(element('p', 'dish-desc', item.desc));
      }
      list.append(card);
    });
    section.append(list);
    if (category.id === 'course') {
      const link = element('a', 'course-book', 'コース料理を予約する →');
      link.href = 'https://fukurinrou-reserve.yangshiyuan2004.workers.dev/';
      section.append(link);
    }
    panel.replaceChildren(section);
  }
  window.addEventListener('hashchange', render);
  render();
})();
