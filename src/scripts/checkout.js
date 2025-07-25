import { initNavbarToggle } from './utils/nav';
import { breadcrumbList } from './utils/breadcrumb';
import { renderItemCart } from './cartItem';
import { renderPaymentSummary } from './paymentSummary';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();
  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'homepage.html' },
    { label: 'Cart', href: 'category.html' },
  ]);
  renderItemCart();
  renderPaymentSummary();
});
