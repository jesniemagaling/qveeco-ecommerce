let cart = JSON.parse(localStorage.getItem('cart'));

if (!Array.isArray(cart)) {
  cart = [];

  // Save the default cart to localStorage immediately
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart() {
  return cart;
}

export function addToCart(item) {
  const existing = cart.find((i) => i.productId === item.productId && i.size === item.size);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  saveToStorage();
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveToStorage();
}

export function getCartQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function groupCartItems(cart) {
  const groupedItems = {};

  cart.forEach((item) => {
    if (groupedItems[item.productId]) {
      groupedItems[item.productId].quantity += item.quantity;
    } else {
      groupedItems[item.productId] = { ...item };
    }
  });

  return groupedItems;
}

function updateCartBadge() {
  const cartQuantity = getCartQuantity();
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = cartQuantity === 0 ? 13 : cartQuantity;
  }
}
