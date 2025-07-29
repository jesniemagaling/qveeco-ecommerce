import { showSuccessToast, initToastDismiss } from './showtoast';

(function () {
  emailjs.init('-HTl4rU_tkX-7EmKx');
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
        showSuccessToast('Email sent successfully.');
        form.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send email. Please try again.');
      });
  });
  initToastDismiss();
});
