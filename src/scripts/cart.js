export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [
    {
      productId: '',
      size: 'Medium',
      quantity: 2,
    },
    {
      productId: '',
      size: 'Medium',
      quantity: 2,
    },
  ];
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

console.log(cart);
