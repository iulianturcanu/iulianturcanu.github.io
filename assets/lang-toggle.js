(function() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;

  function setLang(newLang) {
    document.body.classList.remove('lang-en', 'lang-fr');
    document.body.classList.add('lang-' + newLang);
    btn.textContent = newLang === 'en' ? 'FR' : 'EN';
    document.documentElement.lang = newLang;
    localStorage.setItem('lang', newLang);
  }

  btn.addEventListener('click', function() {
    const currentLang = document.documentElement.lang || localStorage.getItem('lang') || 'en';
    setLang(currentLang === 'en' ? 'fr' : 'en');
  });

  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
})();