import '../style.css';
import { newArrival, topSelling } from './utils/product';
import { ratings } from './rating';
import { initNavbarToggle } from './utils/nav';
import { formatCurrency } from './utils/money';

// navbar initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();
});

// new arrival page
let newArrivalHTML = '';

newArrival.forEach((product) => {
  newArrivalHTML += `
    <article class="cursor-pointer">
      <figure>
        <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
      </figure>
      <h3 class="heading-2">${product.name}</h3>
      <div class="flex items-center gap-3.5 py-1">
        <img src="/src/assets/images/${product.rating}-star.svg" class="" alt="" />
        <p class="ff-primary text-normal pt-1 text-black">
          ${product.rating}.0/<span class="text-normal text-black/60">5</span>
        </p>
      </div>
      <strong class="heading-2">$${formatCurrency(product.priceCents)}</strong>
    </article>
  `;
});

document.querySelector('.js-new-arrival').innerHTML = newArrivalHTML;

// top selling page
let topSellingHTML = '';

topSelling.forEach((product) => {
  topSellingHTML += `
    <article class="cursor-pointer">
      <figure>
        <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
      </figure>
      <h3 class="heading-2">${product.name}</h3>
      <div class="flex items-center gap-3.5 py-1">
        <img src="/src/assets/images/${product.rating}-star.svg" class="" alt="" />
        <p class="ff-primary text-normal pt-1 text-black">
          ${product.rating}.0/<span class="text-normal text-black/60">5</span>
        </p>
      </div>
      <strong class="heading-2">$${formatCurrency(product.priceCents)}</strong>
    </article>
  `;
});

document.querySelector('.js-top-selling').innerHTML = topSellingHTML;

// customer rating
let ratingHTML = '';

ratings.forEach((rating) => {});
