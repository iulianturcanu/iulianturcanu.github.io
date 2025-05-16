(function() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  let lang = 'en';

  function setLang(newLang) {
    lang = newLang;
    document.body.classList.remove('lang-en', 'lang-fr');
    document.body.classList.add('lang-' + lang);
    btn.textContent = lang === 'en' ? 'FR' : 'EN';
    document.documentElement.lang = lang;
  }

  btn.addEventListener('click', function() {
    setLang(lang === 'en' ? 'fr' : 'en');
  });

  setLang('en');
})();