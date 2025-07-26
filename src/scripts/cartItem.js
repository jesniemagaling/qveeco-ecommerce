import { getCart } from './utils/cartModule';
import { products } from './utils/product';
import { formatCurrency } from './utils/money';

const cart = getCart();
export function renderCartItems() {
  let cartItemsHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find((product) => product.id === productId);

    cartItemsHTML += `
      <article class="flex items-start gap-4">
        <img
          src="${matchingProduct.image}"
          alt="Product Image"
          class="h-16 w-16 object-cover"
        />
        <div class="flex-1">
          <p class="ff-primary line-clamp-1 text-base font-medium">
            ${matchingProduct.name}
          </p>
          <div class="ff-primary mt-1 flex items-center gap-2">
            <span class="text-base text-black/60">Qty ${cartItem.quantity}</span>
            <span class="text-md font-semibold">$${formatCurrency(matchingProduct.priceCents)}</span>
          </div>
        </div>
      </article>
    `;
  });

  const cartItems = document.getElementById('cartCollapse');
  cartItems.innerHTML = cartItemsHTML;
}
