import { products } from './utils/product';

// Select DOM elements
const filterBtn = document.querySelector('.js-filter');
const filterHeading = document.querySelector('.js-filter-heading');
const filterCollapse = document.querySelector('.js-collapse');

const filterIcon = document.getElementById('filterIcon');
const closeIcon = document.getElementById('closeIcon');
const filterAside = document.getElementById('filterAside');
const filterOverlay = document.getElementById('filterOverlay');

const sections = {
  price: {
    btn: document.querySelector('.js-price'),
    collapse: document.querySelector('.js-price-collapse'),
    icon: document.getElementById('priceDropdownIcon'),
  },
  color: {
    btn: document.querySelector('.js-color'),
    collapse: document.querySelector('.js-color-collapse'),
    icon: document.getElementById('colorDropdownIcon'),
  },
  size: {
    btn: document.querySelector('.js-size'),
    collapse: document.querySelector('.js-size-collapse'),
    icon: document.getElementById('sizeDropdownIcon'),
  },
  style: {
    btn: document.querySelector('.js-style'),
    collapse: document.querySelector('.js-style-collapse'),
    icon: document.getElementById('styleDropdownIcon'),
  },
};

// Mobile filter toggle
filterBtn.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    filterCollapse.classList.toggle('max-h-0');
    filterCollapse.classList.toggle('max-h-220');
    filterHeading.classList.toggle('hidden');

    filterIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

    filterAside.classList.toggle('h-0');
    filterAside.classList.toggle('h-[calc(100vh-8.625rem)]');
    filterAside.classList.toggle('bg-white');

    filterBtn.classList.toggle('w-fit');
    filterBtn.classList.toggle('w-full');

    filterOverlay.classList.toggle('hidden');
    filterOverlay.classList.toggle('z-0');
    filterOverlay.classList.toggle('z-10');
  }
});

// Section toggle
function setupToggle({ btn, collapse, icon }) {
  btn.addEventListener('click', () => {
    collapse.classList.toggle('max-h-0');
    collapse.classList.toggle('max-h-96');
    icon.classList.toggle('rotate-180');
  });
}

sections.color.btn.addEventListener('click', () => {
  sections.color.collapse.classList.toggle('py-2');
});

// Initialize all sections
Object.values(sections).forEach(setupToggle);

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
