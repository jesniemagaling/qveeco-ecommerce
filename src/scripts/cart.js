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

console.log(cart);

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
