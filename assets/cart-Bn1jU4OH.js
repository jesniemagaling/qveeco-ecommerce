import{c as g,p as x,f as m,d as p,e as u,h as b,g as y,i as h,b as v,j as $,k}from"./emailHandler-OspaDWTX.js";import{c as w}from"./formatter-byuH9jKl.js";const f="/qveeco-ecommerce/assets/images",C=p();function l(){let s=0,a="";const t=g(C);Object.values(t).forEach(e=>{const o=e.productId,n=x.find(c=>c.id===o);if(n){const c=n.priceCents*e.quantity;s+=c,a+=`
      <div class="text-lg md:text-xl ff-primary font-bold flex items-center gap-4 justify-between">
        <p class="font-normal text-black/60 line-clamp-1" title="${n.name}">
          ${n.name} x${e.quantity}
        </p>
        <span>$${m(c)}</span>
      </div>
    `}});const i=`
    <h2 class="ff-primary mb-4 text-2xl font-bold md:text-3xl">Payment Summary</h2>
    ${a}
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${m(s)}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="relative flex-grow">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="${f}/discount-icon.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Add promo code"
          class="w-full rounded-full border-gray-300 py-3 pr-4 pl-12 text-black/60 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>
      <button class="btn-primary max-w-26 py-4">Apply</button>
    </div>
    <button class="checkout-btn btn-primary mt-4 flex items-center justify-center gap-2 py-4">
      Go to Checkout <img src="${f}/arrow-right.svg" alt="" />
    </button>
    
  `;document.getElementById("paymentSummaryContainer").innerHTML=i}const I="/qveeco-ecommerce/assets/images",r=p();function d(){let s="";r.forEach(t=>{const i=t.productId,e=x.find(o=>o.id===i);if(!e){console.warn("Product not found for ID:",i);return}s+=`
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
              Size:&nbsp;<span class="text-normal text-black/60">${w(t.size)}</span>
            </p>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Quantity:&nbsp;<span class="text-normal text-black/60">${t.quantity}</span>
            </p>
          </div>
          <button class="delete-btn ml-auto flex-shrink-0" data-product-id="${t.productId}">
            <img src="${I}/delete-icon.svg" alt="" class="size-5" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <strong class="ff-primary text-xl md:text-2xl">$${m(e.priceCents)}</strong>
          <div class="flex items-center rounded-full bg-gray-100 px-2 py-1">
            <button class="minus-btn px-2 text-xl font-medium text-black" data-product-id="${t.productId}"
            data-product-size="${t.size}">−</button>
            <span class="mx-2 inline-block w-6 text-center text-sm font-medium" id="itemCount"
              >${t.quantity}</span
            >
            <button class="add-btn px-2 text-xl font-medium text-black" 
            data-product-id="${t.productId}"
            data-product-size="${t.size}">+</button>
          </div>
        </div>
      </div>
    </article>
  `});const a=document.getElementById("orderSummaryContainer");if(r.length===0){a.innerHTML=`
      <p class="text-center text-black/60 text-lg">Your cart is empty.</p>
    `;return}a.innerHTML=s}document.getElementById("orderSummaryContainer").addEventListener("click",s=>{const a=s.target.closest(".minus-btn"),t=s.target.closest(".add-btn"),i=s.target.closest(".delete-btn");if(a){const e=a.dataset.productId,o=a.dataset.productSize,n=r.find(c=>c.productId===e&&c.size===o);n&&n.quantity>1&&(n.quantity-=1,u(),d(),l(),console.log(n.quantity))}if(t){const e=t.dataset.productId,o=t.dataset.productSize,n=r.find(c=>c.productId===e&&c.size===o);n&&(n.quantity+=1,u(),d(),l(),console.log(n.quantity))}if(i){const e=i.dataset.productId,o=r.findIndex(n=>n.productId===e);o!==-1&&(r.splice(o,1),u(),d(),l(),b("Item has been removed.")),console.log(e)}});document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const s=y(),a=s===0?13:s;document.getElementById("cartCount").textContent=a,h(),v(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Products",href:"category.html"},{label:"Cart",href:"cart.html"}]),d(),l(),$(),document.querySelector(".checkout-btn")?.addEventListener("click",()=>{p().length===0?k("Add an item to continue."):(console.log("Proceed to checkout"),window.location.href="checkout.html")})});
