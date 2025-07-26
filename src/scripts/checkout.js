import { initNavbarToggle } from './utils/nav';
import { breadcrumbList } from './utils/breadcrumb';
import { renderItemCart } from './orderSummary';
import { renderPaymentSummary } from './paymentSummary';

document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();
  breadcrumbList('.breadcrumbs ul', [
    { label: 'Home', href: 'qveeco.html' },
    { label: 'Products', href: 'category.html' },
    { label: 'Cart', href: 'category.html' },
  ]);
  renderItemCart();
  renderPaymentSummary();
});
