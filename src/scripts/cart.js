import { initNavbarToggle } from './utils/nav';
import { breadcrumbList } from './utils/breadcrumb';
import { capitalizeFirstLetter } from './utils/formatter';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();

  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'homepage.html' },
    { label: 'Cart', href: 'category.html' },
  ]);
});

export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      productId: '',
      productName: 'Retro Mesh Football Jersey - Red',
      productPrice: '90',
      size: 'Large',
      quantity: 1,
    },
    {
      productId: '',
      size: 'Medium',
      productName: 'Classic Leather Jacket – Black',
      productPrice: '185',
      quantity: 3,
    },
  ];
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

console.log(cart);
