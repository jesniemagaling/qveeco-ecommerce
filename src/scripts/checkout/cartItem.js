import { getCart } from '../utils/cartUtils';
import { products } from '../utils/productUtils';
import { formatCurrency } from '../utils/money';
import { groupCartItems } from '../utils/cartUtils';

const cart = getCart();

export function renderCartItems() {
  let cartItemsHTML = '';

  // Group items by productId
  const groupedItems = groupCartItems(cart);

  // Render the merged summary
  Object.values(groupedItems).forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find((product) => product.id === productId);

    if (!matchingProduct) return;

    cartItemsHTML += `
      <article class="flex items-start gap-4">
        <img
          src="${matchingProduct.image}"
          alt="Product Image"
          class="h-16 w-16 object-cover"
        />
        <div class="flex-1">
          <p class="ff-primary line-clamp-1 text-base font-medium" title="${matchingProduct.name}">
            ${matchingProduct.name}
          </p>
          <div class="ff-primary mt-1 flex items-center gap-4">
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
