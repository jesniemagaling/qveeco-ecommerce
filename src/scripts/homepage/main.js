import { newArrival, products, topSelling } from '../utils/productUtils';
import { ratings } from '../utils/rating';
import { initNavbarToggle } from '../utils/nav';
import { formatCurrency } from '../utils/money';
import { getCartQuantity } from '../utils/cartUtils';
import { getProductIdFromURL } from '../category/product-details';

// navbar initialization
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartQuantity = getCartQuantity(cart);
  document.getElementById('cartCount').textContent = cartQuantity;

  const productId = getProductIdFromURL();
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  initNavbarToggle();
});

// new arrival page
let newArrivalHTML = '';

newArrival.forEach((product) => {
  newArrivalHTML += `
    <article class="cursor-pointer js-product-card" data-product-id="${product.id}">
      <figure>
        <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
      </figure>
      <h3 class="heading-2">${product.name}</h3>
      <div class="flex items-center gap-3.5 py-1">
        <img src="/assets/images/${product.rating}-star.svg" class="" alt="" />
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
    <article class="cursor-pointer js-product-card" data-product-id="${product.id}">
      <figure>
        <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
      </figure>
      <h3 class="heading-2">${product.name}</h3>
      <div class="flex items-center gap-3.5 py-1">
        <img src="/assets/images/${product.rating}-star.svg" class="" alt="" />
        <p class="ff-primary text-normal pt-1 text-black">
          ${product.rating}.0/<span class="text-normal text-black/60">5</span>
        </p>
      </div>
      <strong class="heading-2">$${formatCurrency(product.priceCents)}</strong>
    </article>
  `;
});

document.querySelector('.js-top-selling').innerHTML = topSellingHTML;

// Delegate clicks to each product card
document.querySelectorAll('.js-product-card').forEach((card) => {
  card.addEventListener('click', () => {
    const productId = card.dataset.productId;
    if (productId) {
      window.location.href = `product-details.html?id=${productId}`;
    }
  });
});

// search tab
document.getElementById('navSearchForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const input = document.getElementById('search');
  const searchTerm = encodeURIComponent(input.value.trim().toLowerCase() || '');

  if (searchTerm) {
    window.location.href = `category.html?search=${searchTerm}`;
  }
});

// Create customer rating
const swiperWrapper = document.querySelector('.swiper-wrapper');
const maxPerSlide = 3;
const totalSlides = Math.ceil(ratings.length / maxPerSlide);
const slides = [];

for (let i = 0; i < totalSlides; i++) {
  const slide = document.createElement('article');
  slide.className = 'swiper-slide ratings-wrapper justify-center lg:!flex';
  swiperWrapper.appendChild(slide);
  slides.push(slide);
}

ratings.forEach((rating, index) => {
  const slideIndex = Math.floor(index / maxPerSlide);
  const targetSlide = slides[slideIndex];

  if (!targetSlide) {
    console.warn(`No slide found for rating at index ${index}`);
    return;
  }

  targetSlide.appendChild(createRatingElement(rating));
});

function createRatingElement({ rating, name, testimonial }) {
  const el = document.createElement('div');
  el.className = 'rating-card p-4';

  el.innerHTML = `
    <img src="/assets/images/${rating}-star.svg" alt="${rating} stars" />
    <h3 class="ff-primary my-2 flex gap-1 text-2xl font-bold">
      ${name}
      <img src="/assets/images/check-icon.svg" alt="verified" class="-mt-1" />
    </h3>
    <p class="text-black/60">"${testimonial}"</p>
  `;

  return el;
}
