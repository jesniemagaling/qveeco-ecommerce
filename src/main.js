import './style.css';
import { products, newArrival, topSelling } from './product';

const menuTab = document.querySelector('.menu-tab');
const closeTab = document.querySelector('.close-tab');
const navTab = document.querySelector('.nav-links');

menuTab.addEventListener('click', () => {
  menuTab.classList.add('hidden');
  closeTab.classList.remove('hidden');

  navTab.classList.remove('hidden');
});

closeTab.addEventListener('click', () => {
  closeTab.classList.add('hidden');
  menuTab.classList.remove('hidden');

  navTab.classList.add('hidden');
});

// new arrival page
let newArrivalHTML = '';

newArrival.forEach((product) => {
  newArrivalHTML += `
    <article>
      <figure>
        <img src="${product.image}" class="w-full max-w-[460px]" alt="" />
      </figure>
      <h3 class="heading-2">${product.name}</h3>
      <div class="flex items-center gap-3.5 py-1">
        <img src="/src/assets/images/${product.rating}-star.svg" class="" alt="" />
        <p class="ff-primary text-normal pt-1 text-black">
          ${product.rating}.0/<span class="text-normal text-black/80">5</span>
        </p>
      </div>
      <strong class="heading-2">$${product.priceCents / 100}</strong>
    </article>
  `;
});

document.querySelector('.js-newarrival').innerHTML = newArrivalHTML;
