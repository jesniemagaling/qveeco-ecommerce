// navbar.js
export function initNavbarToggle() {
  const menuTab = document.querySelector('.menu-tab');
  const closeTab = document.querySelector('.close-tab');
  const navTab = document.querySelector('.nav-links');

  if (!menuTab || !closeTab || !navTab) return; // optional: safety check

  menuTab.addEventListener('click', () => {
    menuTab.classList.add('hidden');
    closeTab.classList.remove('hidden');
    navTab.classList.remove('hidden');
  });

  closeTab.addEventListener('click', () => {
    closeTab.classList.add('hidden');
    menuTab.classList.remove('hidden');
    navTab.classList.add('hidden');
  });
}
