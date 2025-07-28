import { initNavbarToggle } from '../utils/nav';
import { breadcrumbList } from '../utils/breadcrumb';
import { renderCartItems } from './cartItem';
import { bindShippingListeners, renderShippingForm } from './shipping';
import { renderPaymentSummary } from './orderSummary';
import { getCartQuantity } from '../utils/cartUtils';

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartQuantity = getCartQuantity(cart);
  const displayQuantity = cartQuantity === 0 ? 13 : cartQuantity;
  document.getElementById('cartCount').textContent = displayQuantity;
  initNavbarToggle();
  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'qveeco.html' },
    { label: 'Cart', href: 'cart.html' },
    { label: 'Checkout', href: 'checkout.html' },
  ]);
  renderPaymentSummary();
  renderCartItems();
  renderShippingForm();

  const cartDropdown = document.getElementById('cartDropdown');
  const cartCollapse = document.getElementById('cartCollapse');
  const dropdownIcon = document.getElementById('dropdownIcon');

  cartDropdown.addEventListener('click', () => {
    cartCollapse.classList.toggle('hidden'); // Show/hide cart items
    dropdownIcon.classList.toggle('rotate-180'); // Rotate the icon
  });
});
