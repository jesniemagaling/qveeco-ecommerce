(function () {
  emailjs.init('-HTl4rU_tkX-7EmKx'); // Your EmailJS Public Key
})();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('subscribe-form');
  const toast = document.getElementById('toast-email-success');
  const closeBtn = toast?.querySelector('[data-dismiss-target]');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs
      .sendForm('service_f2hrrub', 'template_tbbw2fg', form)
      .then(() => {
        showToast();
        form.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send email. Please try again.');
      });
  });

  function showToast() {
    if (!toast) return;

    toast.classList.remove('hidden');
    toast.classList.add('flex');

    setTimeout(() => {
      toast.classList.remove('flex');
      toast.classList.add('hidden');
    }, 3000); // Auto-hide after 3 seconds
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toast.classList.remove('flex');
      toast.classList.add('hidden');
    });
  }
});
