import { initNavbarToggle } from '../utils/nav';
import { breadcrumbList } from '../utils/breadcrumb';
import { renderItemCart } from './cartSummary';
import { renderPaymentSummary } from '../cart/paymentSummary';
import { getCart, getCartQuantity } from '../utils/cartUtils';
import { showWarningToast, initToastDismiss } from '../utils/showtoast';

document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartQuantity = getCartQuantity(cart);
  const displayQuantity = cartQuantity === 0 ? 13 : cartQuantity;
  document.getElementById('cartCount').textContent = displayQuantity;
  initNavbarToggle();
  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'qveeco.html' },
    { label: 'Products', href: 'category.html' },
    { label: 'Cart', href: 'cart.html' },
  ]);
  renderItemCart();
  renderPaymentSummary();
  initToastDismiss();

  /* Handle checkout button click
  const checkoutBtn = document.querySelector('.checkout-btn');
  checkoutBtn?.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
      showWarningToast('Add an item to continue.');
    } else {
      console.log('Proceed to checkout');
      window.location.href = 'checkout.html';
    }
  });
  */
});
