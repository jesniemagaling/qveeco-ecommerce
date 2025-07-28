import{c as x,p as g,f as m,d as p,s as u,g as y,i as b,b as v}from"./breadcrumb-BskWwaws.js";import{c as h}from"./formatter-byuH9jKl.js";import"./emailHandler-D0p-4OFJ.js";const f="/qveeco-ecommerce/assets/images",$=p();function r(){let t=0,a="";const e=x($);Object.values(e).forEach(n=>{const o=n.productId,s=g.find(c=>c.id===o);if(s){const c=s.priceCents*n.quantity;t+=c,a+=`
      <div class="text-lg md:text-xl ff-primary font-bold flex items-center gap-4 justify-between">
        <p class="font-normal text-black/60 line-clamp-1" title="${s.name}">
          ${s.name} x${n.quantity}
        </p>
        <span>$${m(c)}</span>
      </div>
    `}});const i=`
    <h2 class="ff-primary mb-4 text-2xl font-bold md:text-3xl">Payment Summary</h2>
    ${a}
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${m(t)}</span>
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
    
  `;document.getElementById("paymentSummaryContainer").innerHTML=i}const k="/qveeco-ecommerce/assets/images",d=p();function l(){let t="";d.forEach(e=>{const i=e.productId,n=g.find(o=>o.id===i);if(!n){console.warn("Product not found for ID:",i);return}t+=`
    <article class="flex w-full gap-2 items-center">
      <img
        src="${n.image}"
        alt=""
        class="w-full max-w-40 md:max-w-60"
      />
      <div class="h-full w-full space-y-1 md:space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="heading-2 line-clamp-1" title="${n.name}">
              ${n.name}
            </h2>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Size:&nbsp;<span class="text-normal text-black/60">${h(e.size)}</span>
            </p>
            <p class="ff-primary text-normal text-sm text-black md:text-base lg:text-lg">
              Quantity:&nbsp;<span class="text-normal text-black/60">${e.quantity}</span>
            </p>
          </div>
          <button class="delete-btn ml-auto flex-shrink-0" data-product-id="${e.productId}">
            <img src="${k}/delete-icon.svg" alt="" class="size-5" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <strong class="ff-primary text-xl md:text-2xl">$${m(n.priceCents)}</strong>
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
  `});const a=document.getElementById("orderSummaryContainer");if(d.length===0){a.innerHTML=`
      <p class="text-center text-black/60 text-lg">Your cart is empty.</p>
    `;return}a.innerHTML=t}document.getElementById("orderSummaryContainer").addEventListener("click",t=>{const a=t.target.closest(".minus-btn"),e=t.target.closest(".add-btn"),i=t.target.closest(".delete-btn");if(a){const n=a.dataset.productId,o=a.dataset.productSize,s=d.find(c=>c.productId===n&&c.size===o);s&&s.quantity>1&&(s.quantity-=1,u(),l(),r(),console.log(s.quantity))}if(e){const n=e.dataset.productId,o=e.dataset.productSize,s=d.find(c=>c.productId===n&&c.size===o);s&&(s.quantity+=1,u(),l(),r(),console.log(s.quantity))}if(i){const n=i.dataset.productId,o=d.findIndex(s=>s.productId===n);o!==-1&&(d.splice(o,1),u(),l(),r(),w()),console.log(n)}});function w(){const t=document.getElementById("toast-remove");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3))}document.querySelector('[data-dismiss-target="#toast-remove"]')?.addEventListener("click",()=>{document.getElementById("toast-remove")?.classList.add("hidden")});document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const t=y(),a=t===0?13:t;document.getElementById("cartCount").textContent=a,b(),v(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Products",href:"category.html"},{label:"Cart",href:"cart.html"}]),l(),r(),document.querySelector(".checkout-btn")?.addEventListener("click",()=>{p().length===0?L():(console.log("Proceed to checkout"),window.location.href="checkout.html")})});function L(){const t=document.getElementById("toast-warning");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3))}document.querySelector('[data-dismiss-target="#toast-warning"]')?.addEventListener("click",()=>{document.getElementById("toast-warning")?.classList.add("hidden")});
