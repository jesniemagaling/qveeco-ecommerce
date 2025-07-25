import { getCart, saveToStorage } from './cart';
import { products } from './utils/product';
import { formatCurrency } from './utils/money';
import { capitalizeFirstLetter } from './utils/formatter';

const cart = getCart();

export function renderItemCart() {
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = products.find((product) => product.id === productId);

    cartSummaryHTML += `
      <article class="flex w-full gap-2 items-center">
        <img
          src="${matchingProduct.image}"
          alt=""
          class="w-full max-w-40 md:max-w-60"
        />
        <div class="h-full w-full space-y-1 md:space-y-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="heading-2 line-clamp-1" title="${matchingProduct.name}">
                ${matchingProduct.name}
              </h2>
              <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
                Size:&nbsp;<span class="text-normal text-black/60">${capitalizeFirstLetter(cartItem.size)}</span>
              </p>
              <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
                Quantity:&nbsp;<span class="text-normal text-black/60">${cartItem.quantity}</span>
              </p>
            </div>
            <button class="delete-btn ml-auto flex-shrink-0" data-product-id="${cartItem.productId}">
              <img src="/src/assets/images/delete-icon.svg" alt="" class="size-5" />
            </button>
          </div>
          <div class="flex items-center justify-between">
            <strong class="ff-primary text-xl md:text-2xl">$${formatCurrency(matchingProduct.priceCents)}</strong>
            <div class="flex items-center rounded-full bg-gray-100 px-2 py-1">
              <button class="minus-btn px-2 text-xl font-medium text-black" data-product-id="${cartItem.productId}"
              data-product-size="${cartItem.size}">−</button>
              <span class="mx-2 inline-block w-6 text-center text-sm font-medium" id="itemCount"
                >${cartItem.quantity}</span
              >
              <button class="add-btn px-2 text-xl font-medium text-black" 
              data-product-id="${cartItem.productId}"
              data-product-size="${cartItem.size}">+</button>
            </div>
          </div>
        </div>
      </article>
    `;
  });

  const checkoutContainer = document.getElementById('orderSummaryContainer');
  checkoutContainer.innerHTML = cartSummaryHTML;
}

document.getElementById('orderSummaryContainer').addEventListener('click', (e) => {
  const minusBtn = e.target.closest('.minus-btn');
  const addBtn = e.target.closest('.add-btn');
  const deleteBtn = e.target.closest('.delete-btn');

  if (minusBtn) {
    const productId = minusBtn.dataset.productId;
    const productSize = minusBtn.dataset.productSize;
    const item = cart.find((i) => i.productId === productId && i.size === productSize);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      saveToStorage();
      renderItemCart();
      console.log(item.quantity);
    }
  }

  if (addBtn) {
    const productId = addBtn.dataset.productId;
    const productSize = addBtn.dataset.productSize;
    const item = cart.find((i) => i.productId === productId && i.size === productSize);
    if (item) {
      item.quantity += 1;
      saveToStorage();
      renderItemCart();
      console.log(item.quantity);
    }
  }

  if (deleteBtn) {
    const productId = deleteBtn.dataset.productId;
    const index = cart.findIndex((i) => i.productId === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      saveToStorage();
      renderItemCart();
      showToast();
    }
    console.log(productId);
  }
});

function showToast() {
  const toast = document.getElementById('toast-remove');
  if (!toast) return;

  // Show the toast
  toast.classList.remove('hidden');

  // Auto-hide after 3 seconds (optional)
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

document.querySelector('[data-dismiss-target="#toast-remove"]')?.addEventListener('click', () => {
  document.getElementById('toast-remove')?.classList.add('hidden');
});
