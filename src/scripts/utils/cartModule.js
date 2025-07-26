let cart = JSON.parse(localStorage.getItem('cart'));

if (!Array.isArray(cart)) {
  cart = [
    {
      productId: '',
      size: 'Large',
      quantity: 1,
    },
    {
      productId: '',
      size: 'Medium',
      quantity: 3,
    },
  ];

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

function updateCartDisplay() {
  const cartCountEl = document.getElementById('cartCount');
  if (!cartCountEl) return;

  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQuantity = storedCart.reduce((sum, item) => sum + item.quantity, 0);

  cartCountEl.textContent = totalQuantity;

  if (totalQuantity === 0) {
    cartCountEl.classList.add('hidden');
  } else {
    cartCountEl.classList.remove('hidden');
  }
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
