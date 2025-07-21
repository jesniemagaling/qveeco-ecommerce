import { products } from './utils/product';

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
