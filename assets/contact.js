(function() {
  const btn = document.getElementById('contact-btn');
  const modal = document.getElementById('contact-modal');
  const closeBtn = modal && modal.querySelector('.close');

  if (btn && modal && closeBtn) {
    btn.addEventListener('click', () => { modal.style.display = 'block'; });
    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

    const form = document.getElementById('contact-form');
    const statusDiv = document.createElement('div');
    statusDiv.id = 'contact-status';
    form.prepend(statusDiv);

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          statusDiv.textContent = 'Thank you! Your message has been sent.';
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              statusDiv.textContent = data['errors'].map(error => error['message']).join(', ');
            } else {
              statusDiv.textContent = 'Oops! There was a problem submitting your form.';
            }
          });
        }
      }).catch(() => {
        statusDiv.textContent = 'Oops! There was a problem submitting your form.';
      });
    });
  }
})();