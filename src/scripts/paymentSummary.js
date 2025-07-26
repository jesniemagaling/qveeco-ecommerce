import { getCart } from './utils/cartModule';
import { products } from './utils/product';
import { formatCurrency } from './utils/money';

const cart = getCart();
export function renderPaymentSummary() {
  let productPriceCents = 0;
  const discountRate = 0.13;
  const taxRate = 0.05;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find((product) => product.id === productId);
    if (matchingProduct) {
      productPriceCents += matchingProduct.priceCents * cartItem.quantity;
    }
  });

  const discountAmount = productPriceCents * discountRate;
  const discountedPrice = productPriceCents - discountAmount;
  const taxAmount = discountedPrice * taxRate;
  const productTotal = discountedPrice + taxAmount;

  /*
  // Step 3: Output
  console.log('Subtotal: ', formatCurrency(productPriceCents));
  console.log('Discount Amount (cents):', formatCurrency(discountAmount));
  console.log('Tax Amount (cents):', formatCurrency(taxAmount));
  console.log('Final Total (cents):', formatCurrency(productTotal));

  // Optional: Convert to dollars
  console.log('Final Total ($):', formatCurrency(productTotal));
  */

  const paymentSummaryHTML = `
    <aside class="w-full space-y-2 lg:w-[460px]">
      <h2 class="ff-primary text-2xl font-bold md:text-3xl">Payment Summary</h2>
      <div class="heading-2 flex items-center justify-between">
        <p class="font-normal text-black/60">Subtotal</p>
        <span id="subTotal">$${formatCurrency(productPriceCents)}</span>
      </div>
      <div class="heading-2 flex items-center justify-between">
        <p class="font-normal text-black/60">Discount (-13%)</p>
        <span class="text-[#FF3333]" id="discount">$${formatCurrency(discountAmount)}</span>
      </div>
      <div class="heading-2 flex items-center justify-between">
        <p class="font-normal text-black/60">Tax (5%)</p>
        <span id="taxPrice">$${formatCurrency(taxAmount)}</span>
      </div>
      <div class="heading-2 my-6 flex items-center justify-between">
        <p class="font-normal text-black">Total</p>
        <span>$${formatCurrency(productTotal)}</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="relative flex-grow">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <img src="/src/assets/images/discount-icon.svg" alt="" />
          </div>
          <input
            type="text"
            placeholder="Add promo code"
            class="w-full rounded-full border-gray-300 bg-gray-100 py-3 pr-4 pl-12 text-black/60 focus:border-transparent focus:ring-2 focus:ring-black"
          />
        </div>
        <button class="btn-primary max-w-26 py-4">Apply</button>
      </div>
      <button class="btn-primary mt-4 flex items-center justify-center gap-2 py-4" id="checkoutBtn">
        Go to Checkout <img src="/src/assets/images/arrow-right.svg" alt="" />
      </button>
    </aside>
  `;

  document.getElementById('paymentSummaryContainer').innerHTML = paymentSummaryHTML;
}
