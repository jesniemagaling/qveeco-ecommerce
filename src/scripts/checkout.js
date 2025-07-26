import { initNavbarToggle } from './utils/nav';
import { breadcrumbList } from './utils/breadcrumb';
import { renderCartItems } from './cartItem';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();
  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'qveeco.html' },
    { label: 'Cart', href: 'category.html' },
    { label: 'Checkout', href: 'category.html' },
  ]);
  renderCartItems();
});

const cartDropdown = document.getElementById('cartDropdown');
const cartCollapse = document.getElementById('cartCollapse');
const dropdownIcon = document.getElementById('dropdownIcon');

cartDropdown.addEventListener('click', () => {
  cartCollapse.classList.toggle('hidden'); // Show/hide cart items
  dropdownIcon.classList.toggle('rotate-180'); // Rotate the icon
});

console.log('object');
