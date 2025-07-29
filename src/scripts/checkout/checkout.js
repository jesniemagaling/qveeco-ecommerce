import { initNavbarToggle } from '../utils/nav';
import { breadcrumbList } from '../utils/breadcrumb';
import { renderCartItems } from './cartItem';
import { renderShippingForm } from './shipping';
import { renderOrderSummary } from './orderSummary';
import { getCartQuantity, getCart } from '../utils/cartUtils';
import { showSuccessToast, showWarningToast, initToastDismiss } from '../utils/showtoast';

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
  renderOrderSummary();
  renderCartItems();
  renderShippingForm();
  initToastDismiss();

  const cartDropdown = document.getElementById('cartDropdown');
  const cartCollapse = document.getElementById('cartCollapse');
  const dropdownIcon = document.getElementById('dropdownIcon');

  cartDropdown.addEventListener('click', () => {
    cartCollapse.classList.toggle('hidden'); // Show/hide cart items
    dropdownIcon.classList.toggle('rotate-180'); // Rotate the icon
  });

  document.getElementById('placeOrder')?.addEventListener('click', () => {
    const regionEl = document.getElementById('region');
    const selectedRegion = regionEl?.value || '';
    const isNCR =
      selectedRegion === '130000000' || regionEl?.options[regionEl.selectedIndex]?.text === 'NCR';

    const requiredFields = [
      { id: 'email', label: 'Email' },
      { id: 'fullname', label: 'Full Name' },
      { id: 'country', label: 'Country' },
      { id: 'region', label: 'Region' },
      !isNCR && { id: 'province', label: 'Province' },
      { id: 'city', label: 'City' },
      { id: 'barangay', label: 'Barangay' },
      { id: 'street', label: 'Street' },
      { id: 'phone', label: 'Phone Number' },
    ].filter(Boolean); // Remove false/null (like province if NCR)

    const firstEmpty = requiredFields.find(({ id }) => {
      const el = document.getElementById(id);
      return (
        !el ||
        !el.value ||
        el.value.trim() === '' ||
        el.value === 'Select your region' ||
        el.value === 'Select your state or province' ||
        el.value === 'Select your town or city' ||
        el.value === 'Select your local area'
      );
    });

    if (firstEmpty) {
      showWarningToast(`Please complete the ${firstEmpty.label} field.`);
      return;
    }

    const cart = getCart();
    if (cart.length === 0) {
      showWarningToast('Your cart is empty. Add an item to continue.');
    } else {
      // success
      console.log('Placing order...');

      requiredFields.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });

      localStorage.removeItem('cart');

      showSuccessToast('Order placed successfully. Redirecting to homepage...');

      setTimeout(() => {
        window.location.href = 'qveeco.html';
      }, 5000);
    }
  });
});
