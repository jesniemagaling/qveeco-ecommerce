import{c as g,p as f,f as u,d as x,e as m,h as b,g as y,i as v,b as h,j as $}from"./emailHandler-OspaDWTX.js";import{c as k}from"./formatter-byuH9jKl.js";const p="/qveeco-ecommerce/assets/images",C=x();function l(){let s=0,n="";const e=g(C);Object.values(e).forEach(t=>{const o=t.productId,a=f.find(c=>c.id===o);if(a){const c=a.priceCents*t.quantity;s+=c,n+=`
      <div class="text-lg md:text-xl ff-primary font-bold flex items-center gap-4 justify-between">
        <p class="font-normal text-black/60 line-clamp-1" title="${a.name}">
          ${a.name} x${t.quantity}
        </p>
        <span>$${u(c)}</span>
      </div>
    `}});const i=`
    <h2 class="ff-primary mb-4 text-2xl font-bold md:text-3xl">Payment Summary</h2>
    ${n}
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${u(s)}</span>
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
    <a href="checkout.html"><button class="checkout-btn btn-primary mt-4 flex items-center justify-center gap-2 py-4">
      Go to Checkout <img src="${p}/arrow-right.svg" alt="" />
    </button></a>
    
  `;document.getElementById("paymentSummaryContainer").innerHTML=i}const I="/qveeco-ecommerce/assets/images",r=x();function d(){let s="";r.forEach(e=>{const i=e.productId,t=f.find(o=>o.id===i);if(!t){console.warn("Product not found for ID:",i);return}s+=`
    <article class="flex w-full gap-2 items-center">
      <img
        src="${t.image}"
        alt=""
        class="w-full max-w-40 md:max-w-60"
      />
      <div class="h-full w-full space-y-1 md:space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="heading-2 line-clamp-1" title="${t.name}">
              ${t.name}
            </h2>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Size:&nbsp;<span class="text-normal text-black/60">${k(e.size)}</span>
            </p>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Quantity:&nbsp;<span class="text-normal text-black/60">${e.quantity}</span>
            </p>
          </div>
          <button class="delete-btn ml-auto flex-shrink-0" data-product-id="${e.productId}">
            <img src="${I}/delete-icon.svg" alt="" class="size-5" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <strong class="ff-primary text-xl md:text-2xl">$${u(t.priceCents)}</strong>
          <div class="flex items-center rounded-full bg-gray-100 px-2 py-1">
            <button class="minus-btn px-2 text-xl font-medium text-black" data-product-id="${e.productId}"
            data-product-size="${e.size}">−</button>
            <span class="mx-2 inline-block w-6 text-center text-sm font-medium" id="itemCount"
              >${e.quantity}</span
            >
            <button class="add-btn px-2 text-xl font-medium text-black" 
            data-product-id="${e.productId}"
            data-product-size="${e.size}">+</button>
          </div>
        </div>
      </div>
    </article>
  `});const n=document.getElementById("orderSummaryContainer");if(r.length===0){n.innerHTML=`
      <p class="text-center text-black/60 text-lg">Your cart is empty.</p>
    `;return}n.innerHTML=s}document.getElementById("orderSummaryContainer").addEventListener("click",s=>{const n=s.target.closest(".minus-btn"),e=s.target.closest(".add-btn"),i=s.target.closest(".delete-btn");if(n){const t=n.dataset.productId,o=n.dataset.productSize,a=r.find(c=>c.productId===t&&c.size===o);a&&a.quantity>1&&(a.quantity-=1,m(),d(),l(),console.log(a.quantity))}if(e){const t=e.dataset.productId,o=e.dataset.productSize,a=r.find(c=>c.productId===t&&c.size===o);a&&(a.quantity+=1,m(),d(),l(),console.log(a.quantity))}if(i){const t=i.dataset.productId,o=r.findIndex(a=>a.productId===t);o!==-1&&(r.splice(o,1),m(),d(),l(),b("Item has been removed.")),console.log(t)}});document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const s=y(),n=s===0?13:s;document.getElementById("cartCount").textContent=n,v(),h(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Products",href:"category.html"},{label:"Cart",href:"cart.html"}]),d(),l(),$()});
