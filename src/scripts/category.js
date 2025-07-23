import { products } from './utils/product';
import { initNavbarToggle } from './utils/nav';
import { formatCurrency } from './utils/money';

// navbar initialization
document.addEventListener('DOMContentLoaded', () => {
  initNavbarToggle();
});

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
    filterAside.classList.toggle('overflow-y-auto');

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

// DOM References
const productsWrapperEl = document.getElementById('productsWrapper');
const searchInput = document.getElementById('search');
const priceRangeInput = document.getElementById('priceRange');
const priceMaxOutput = document.getElementById('priceMax');
const colorCheckContainer = document.getElementById('colorCheckContainer');
const sizeContainer = document.getElementById('sizeContainer');
const typeCheckContainer = document.getElementById('typeCheckContainer');
const styleCheckContainer = document.getElementById('styleCheckContainer');
const clearFilterBtn = document.getElementById('clearFilter');
const productsCountEl = document.getElementById('productsCount');

// Render all products initially (sorted by price descending)
filterProducts();

// Helpers
function getCheckedIds(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter((input) => input.checked)
    .map((input) => input.id);
}

function getCheckedValue(container, name) {
  return container?.querySelector(`input[name="${name}"]:checked`)?.value || '';
}

function updateProductCount(visible, total) {
  productsCountEl.textContent =
    visible === 0 ? 'No products found' : `Showing ${visible} of ${total} products`;
}

// Create product element
function createProductElement(product) {
  const productEl = document.createElement('article');
  productEl.className = 'product cursor-pointer';

  productEl.innerHTML = `
    <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
    <h3 class="heading-2 xl:text-xl">${product.name}</h3>
    <div class="flex items-center gap-3.5 py-1">
      <img src="/src/assets/images/${product.rating}-star.svg" alt="" />
      <p class="ff-primary text-normal pt-1 text-black">
        ${product.rating}.0/<span class="text-normal text-black/60">5</span>
      </p>
    </div>
    <strong class="heading-2 xl:text-xl">$${formatCurrency(product.priceCents)}</strong>
  `;

  return productEl;
}

// Filter and sort products
function filterProducts() {
  const searchTerm = searchInput?.value.trim().toLowerCase() || '';
  const selectedPrice = parseInt(priceRangeInput?.value, 10) || Infinity;
  const selectedColor = getCheckedValue(colorCheckContainer, 'color');
  const selectedSize = getCheckedValue(sizeContainer, 'size');
  const checkedTypes = getCheckedIds('.type-check');
  const checkedStyles = getCheckedIds('.style-check');

  let matchedProducts = [];

  products.forEach((product) => {
    const matches = {
      search: product.name.toLowerCase().includes(searchTerm),
      price: product.priceCents <= selectedPrice,
      type: checkedTypes.length === 0 || checkedTypes.includes(product.type),
      style: checkedStyles.length === 0 || checkedStyles.includes(product.category),
      color: !selectedColor || product.color.toLowerCase() === selectedColor.toLowerCase(),
      size:
        !selectedSize ||
        product.size.map((s) => s.toLowerCase()).includes(selectedSize.toLowerCase()),
    };

    const isVisible = Object.values(matches).every(Boolean);
    if (isVisible) matchedProducts.push(product);
  });

  // Sort from highest to lowest price
  matchedProducts.sort((a, b) => b.priceCents - a.priceCents);

  // Re-render visible, sorted products
  productsWrapperEl.innerHTML = '';
  matchedProducts.forEach((product) => {
    const el = createProductElement(product);
    productsWrapperEl.appendChild(el);
  });

  updateProductCount(matchedProducts.length, products.length);
}

// Event Listeners
searchInput?.addEventListener('input', filterProducts);

priceRangeInput?.addEventListener('input', () => {
  const priceValue = priceRangeInput.value;
  if (priceMaxOutput) {
    priceMaxOutput.textContent = formatCurrency(priceValue);
  }
  filterProducts();
});

typeCheckContainer?.addEventListener('change', filterProducts);
styleCheckContainer?.addEventListener('change', filterProducts);
colorCheckContainer?.addEventListener('change', filterProducts);
sizeContainer?.addEventListener('change', filterProducts);

clearFilterBtn?.addEventListener('click', () => {
  searchInput.value = '';
  priceRangeInput.value = priceRangeInput.max;
  priceMaxOutput.textContent = formatCurrency(priceRangeInput.max);

  document
    .querySelectorAll('.type-check, .style-check')
    .forEach((checkbox) => (checkbox.checked = false));
  document
    .querySelectorAll('#colorCheckContainer input[name="color"]')
    .forEach((radio) => (radio.checked = false));
  document
    .querySelectorAll('#sizeContainer input[name="size"]')
    .forEach((radio) => (radio.checked = false));

  filterProducts();
});
