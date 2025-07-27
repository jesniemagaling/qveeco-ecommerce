import{c as x,p as f,f as u,d as g,s as m,g as y,i as b,b as v}from"./breadcrumb-DEYYAhfd.js";import{c as h}from"./formatter-byuH9jKl.js";const p="/qveeco-ecommerce/assets/images",$=g();function r(){let t=0,n="";const s=x($);Object.values(s).forEach(e=>{const o=e.productId,a=f.find(c=>c.id===o);if(a){const c=a.priceCents*e.quantity;t+=c,n+=`
      <div class="text-lg md:text-xl ff-primary font-bold flex items-center gap-4 justify-between">
        <p class="font-normal text-black/60 line-clamp-1" title="${a.name}">
          ${a.name} x${e.quantity}
        </p>
        <span>$${u(c)}</span>
      </div>
    `}});const d=`
    <h2 class="ff-primary mb-4 text-2xl font-bold md:text-3xl">Payment Summary</h2>
    ${n}
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${u(t)}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="relative flex-grow">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="${p}/discount-icon.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Add promo code"
          class="w-full rounded-full border-gray-300 py-3 pr-4 pl-12 text-black/60 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>
      <button class="btn-primary max-w-26 py-4">Apply</button>
    </div>
    <a href="checkout.html"><button class="btn-primary mt-4 flex items-center justify-center gap-2 py-4" id="checkoutBtn">
      Go to Checkout <img src="${p}/arrow-right.svg" alt="" />
    </button></a>
    
  `;document.getElementById("paymentSummaryContainer").innerHTML=d}const k="/qveeco-ecommerce/assets/images",i=g();function l(){let t="";i.forEach(s=>{const d=s.productId,e=f.find(o=>o.id===d);if(!e){console.warn("Product not found for ID:",d);return}t+=`
    <article class="flex w-full gap-2 items-center">
      <img
        src="${e.image}"
        alt=""
        class="w-full max-w-40 md:max-w-60"
      />
      <div class="h-full w-full space-y-1 md:space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="heading-2 line-clamp-1" title="${e.name}">
              ${e.name}
            </h2>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Size:&nbsp;<span class="text-normal text-black/60">${h(s.size)}</span>
            </p>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Quantity:&nbsp;<span class="text-normal text-black/60">${s.quantity}</span>
            </p>
          </div>
          <button class="delete-btn ml-auto flex-shrink-0" data-product-id="${s.productId}">
            <img src="${k}/delete-icon.svg" alt="" class="size-5" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <strong class="ff-primary text-xl md:text-2xl">$${u(e.priceCents)}</strong>
          <div class="flex items-center rounded-full bg-gray-100 px-2 py-1">
            <button class="minus-btn px-2 text-xl font-medium text-black" data-product-id="${s.productId}"
            data-product-size="${s.size}">−</button>
            <span class="mx-2 inline-block w-6 text-center text-sm font-medium" id="itemCount"
              >${s.quantity}</span
            >
            <button class="add-btn px-2 text-xl font-medium text-black" 
            data-product-id="${s.productId}"
            data-product-size="${s.size}">+</button>
          </div>
        </div>
      </div>
    </article>
  `});const n=document.getElementById("orderSummaryContainer");n.innerHTML=t}document.getElementById("orderSummaryContainer").addEventListener("click",t=>{const n=t.target.closest(".minus-btn"),s=t.target.closest(".add-btn"),d=t.target.closest(".delete-btn");if(n){const e=n.dataset.productId,o=n.dataset.productSize,a=i.find(c=>c.productId===e&&c.size===o);a&&a.quantity>1&&(a.quantity-=1,m(),l(),r(),console.log(a.quantity))}if(s){const e=s.dataset.productId,o=s.dataset.productSize,a=i.find(c=>c.productId===e&&c.size===o);a&&(a.quantity+=1,m(),l(),r(),console.log(a.quantity))}if(d){const e=d.dataset.productId,o=i.findIndex(a=>a.productId===e);o!==-1&&(i.splice(o,1),m(),l(),r(),C()),console.log(e)}});function C(){const t=document.getElementById("toast-remove");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3))}document.querySelector('[data-dismiss-target="#toast-remove"]')?.addEventListener("click",()=>{document.getElementById("toast-remove")?.classList.add("hidden")});document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const t=y(),n=t===0?9:t;document.getElementById("cartCount").textContent=n,b(),v(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Products",href:"category.html"},{label:"Cart",href:"cart.html"}]),l(),r()});
