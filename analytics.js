// The measurement ID belongs to the restaurant's GA4 web stream.
(() => {
  const id = SITE_CONFIG.ga4MeasurementId;
  if (!/^G-[A-Z0-9]+$/.test(id)) return;

  const notice = document.querySelector('[data-analytics-notice]');
  if (notice) notice.hidden = false;
  if (navigator.globalPrivacyControl || navigator.doNotTrack === '1') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', id, {
    page_location: location.origin + location.pathname,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.append(script);

  function clickEvent(link) {
    const url = new URL(link.href);
    if (url.protocol === 'tel:') return 'phone_click';
    if (url.hostname === 'reserve.fukurinrou.jp')
      return url.pathname.includes('cancel') ? 'cancel_link_click' : 'reservation_click';
    if (url.hostname === 'osechi.fukurinrou.jp') return 'takeout_click';
    if (url.hostname === 'search.google.com' && url.pathname.includes('writereview')) return 'review_click';
    if (url.hostname === 'www.google.com' && url.pathname.startsWith('/maps/')) return 'map_click';
    if (url.origin === location.origin && (url.pathname.endsWith('/menu.html') || url.hash === '#menu')) return 'menu_click';
    return null;
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const name = clickEvent(link);
    if (name) gtag('event', name, { send_to: id, page_language: document.documentElement.lang });
  }, { capture: true });
})();
