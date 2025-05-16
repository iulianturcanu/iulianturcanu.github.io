(function() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;

  // Get language from localStorage or default to 'en'
  let lang = localStorage.getItem('lang') || 'en';

  function setLang(newLang) {
    lang = newLang;
    document.body.classList.remove('lang-en', 'lang-fr');
    document.body.classList.add('lang-' + lang);
    btn.textContent = lang === 'en' ? 'FR' : 'EN';
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  btn.addEventListener('click', function() {
    setLang(lang === 'en' ? 'fr' : 'en');
  });

  // Initialize on page load
  setLang(lang);
})();