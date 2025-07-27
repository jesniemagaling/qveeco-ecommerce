import { initNavbarToggle } from '../utils/nav';
import { breadcrumbList } from '../utils/breadcrumb';
import { renderItemCart } from './cartSummary';
import { renderPaymentSummary } from '../cart/paymentSummary';
import { getCartQuantity } from '../utils/cartUtils';

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartQuantity = getCartQuantity(cart);
  document.getElementById('cartCount').textContent = cartQuantity;
  initNavbarToggle();
  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'qveeco.html' },
    { label: 'Products', href: 'category.html' },
    { label: 'Cart', href: 'cart.html' },
  ]);
  renderItemCart();
  renderPaymentSummary();
});
