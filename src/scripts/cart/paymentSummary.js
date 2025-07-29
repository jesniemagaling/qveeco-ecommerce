import { getCart, groupCartItems } from '../utils/cartUtils';
import { products } from '../utils/productUtils';
import { formatCurrency } from '../utils/money';
const imageBase = `${import.meta.env.BASE_URL}assets/images`;

const cart = getCart();

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let itemListHTML = '';
  const groupedItems = groupCartItems(cart);

  // Step 2: Render item list summary with merged quantities
  Object.values(groupedItems).forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find((product) => product.id === productId);

    if (matchingProduct) {
      const itemTotal = matchingProduct.priceCents * cartItem.quantity;
      productPriceCents += itemTotal;

      itemListHTML += `
      <div class="text-lg md:text-xl ff-primary font-bold flex items-center gap-4 justify-between">
        <p class="font-normal text-black/60 line-clamp-1" title="${matchingProduct.name}">
          ${matchingProduct.name} x${cartItem.quantity}
        </p>
        <span>$${formatCurrency(itemTotal)}</span>
      </div>
    `;
    }
  });

  const cartSummaryHTML = `
    <h2 class="ff-primary mb-4 text-2xl font-bold md:text-3xl">Payment Summary</h2>
    ${itemListHTML}
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${formatCurrency(productPriceCents)}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="relative flex-grow">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="${imageBase}/discount-icon.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Add promo code"
          class="w-full rounded-full border-gray-300 py-3 pr-4 pl-12 text-black/60 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>
      <button class="btn-primary max-w-26 py-4">Apply</button>
    </div>
    <a href="checkout.html"><button class="checkout-btn btn-primary mt-4 flex items-center justify-center gap-2 py-4">
      Go to Checkout <img src="${imageBase}/arrow-right.svg" alt="" />
    </button></a>
    
  `;

  document.getElementById('paymentSummaryContainer').innerHTML = cartSummaryHTML;
}
