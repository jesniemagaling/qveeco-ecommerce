// navbar.js
export function initNavbarToggle() {
  const menuTab = document.querySelector('.menu-tab');
  const closeTab = document.querySelector('.close-tab');
  const navTab = document.querySelector('.nav-links');

  if (!menuTab || !closeTab || !navTab) return; // safety check

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

  // search tab
  document.getElementById('navSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('search');
    const searchTerm = encodeURIComponent(input.value.trim().toLowerCase() || '');

    if (searchTerm) {
      window.location.href = `category.html?search=${searchTerm}`;
    }
  });
}
