import { products } from './utils/product';

const filterBtn = document.querySelector('.js-filter');
const filterHeading = document.querySelector('.js-filter-heading');
const filterCollapse = document.querySelector('.js-collapse');
const priceBtn = document.querySelector('.js-price');
const priceCollapse = document.querySelector('.js-price-collapse');
const colorBtn = document.querySelector('.js-color');
const colorCollapse = document.querySelector('.js-color-collapse');
const sizeBtn = document.querySelector('.js-size');
const sizeCollapse = document.querySelector('.js-size-collapse');
const styleBtn = document.querySelector('.js-style');
const styleCollapse = document.querySelector('.js-style-collapse');
const priceDropdown = document.getElementById('priceDropdownIcon');
const colorDropdown = document.getElementById('colorDropdownIcon');
const sizeDropdown = document.getElementById('sizeDropdownIcon');
const styleDropdown = document.getElementById('styleDropdownIcon');
const filterIcon = document.getElementById('filterIcon');
const closeIcon = document.getElementById('closeIcon');
const filterAside = document.getElementById('filterAside');
const filterOverlay = document.getElementById('filterOverlay');

filterBtn.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    filterCollapse.classList.toggle('max-h-0');
    filterCollapse.classList.toggle('max-h-220');
    filterHeading.classList.toggle('hidden');
    filterIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    filterAside.classList.toggle('bg-white');
    filterBtn.classList.toggle('w-fit');
    filterBtn.classList.toggle('w-full');
    filterOverlay.classList.toggle('hidden');
    filterOverlay.classList.toggle('z-0');
    filterOverlay.classList.toggle('z-10');
  }
});

function setupToggle(button, collapse, icon) {
  button.addEventListener('click', () => {
    collapse.classList.toggle('max-h-0');
    collapse.classList.toggle('max-h-96');
    icon.classList.toggle('rotate-180');
  });
}

setupToggle(priceBtn, priceCollapse, priceDropdown);
setupToggle(colorBtn, colorCollapse, colorDropdown);
setupToggle(sizeBtn, sizeCollapse, sizeDropdown);
setupToggle(styleBtn, styleCollapse, styleDropdown);

// all products
let categoryHTML = '';

products.forEach((product) => {
  categoryHTML += `
    <article class="cursor-pointer">
      <figure>
        <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
      </figure>
      <h3 class="heading-2 xl:text-xl">${product.name}</h3>
      <div class="flex items-center gap-3.5 py-1">
        <img src="/src/assets/images/${product.rating}-star.svg" class="" alt="" />
        <p class="ff-primary text-normal pt-1 text-black">
          ${product.rating}.0/<span class="text-normal text-black/60">5</span>
        </p>
      </div>
      <strong class="heading-2 xl:text-xl">$${product.priceCents / 100}</strong>
    </article>
  `;
});

document.querySelector('.js-category').innerHTML = categoryHTML;
