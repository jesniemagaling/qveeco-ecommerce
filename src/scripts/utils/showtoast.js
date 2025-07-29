export function showSuccessToast(message) {
  const toast = document.getElementById('toast-success');
  const msg = document.getElementById('success-toast-msg');

  if (!toast || !msg) {
    console.warn('Toast element not found');
    return;
  }

  msg.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}
export function showWarningToast(message) {
  const toast = document.getElementById('toast-warning');
  const msg = document.getElementById('warning-toast-msg');

  if (!toast || !msg) {
    console.warn('Toast element not found');
    return;
  }

  msg.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}
export function showRemoveToast(message) {
  const toast = document.getElementById('toast-remove');
  const msg = document.getElementById('remove-toast-msg');

  if (!toast || !msg) {
    console.warn('Toast element not found');
    return;
  }

  msg.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

export function initToastDismiss() {
  document.addEventListener('click', function (e) {
    const button = e.target.closest('[data-dismiss-target]');
    if (button) {
      const targetSelector = button.getAttribute('data-dismiss-target');
      const toast = document.querySelector(targetSelector);
      if (toast) {
        toast.classList.add('hidden');
      }
    }
  });
}
