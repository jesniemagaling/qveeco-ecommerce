import{c as x,p as f,f as u,d as g,s as m,g as y,i as b,b as v}from"./breadcrumb-Cpo2odwq.js";import{c as h}from"./formatter-byuH9jKl.js";const p="/qveeco-ecommerce/assets/images",$=g();function r(){let t=0,c="";const e=x($);Object.values(e).forEach(s=>{const n=s.productId,a=f.find(o=>o.id===n);if(a){const o=a.priceCents*s.quantity;t+=o,c+=`
      <div class="text-lg md:text-xl ff-primary font-bold flex items-center gap-4 justify-between">
        <p class="font-normal text-black/60 line-clamp-1" title="${a.name}">
          ${a.name} x${s.quantity}
        </p>
        <span>$${u(o)}</span>
      </div>
    `}});const d=`
    <h2 class="ff-primary mb-4 text-2xl font-bold md:text-3xl">Payment Summary</h2>
    ${c}
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
    
  `;document.getElementById("paymentSummaryContainer").innerHTML=d}const k="/qveeco-ecommerce/assets/images",i=g();function l(){let t="";i.forEach(e=>{const d=e.productId,s=f.find(n=>n.id===d);t+=`
    <article class="flex w-full gap-2 items-center">
      <img
        src="${s.image}"
        alt=""
        class="w-full max-w-40 md:max-w-60"
      />
      <div class="h-full w-full space-y-1 md:space-y-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 class="heading-2 line-clamp-1" title="${s.name}">
              ${s.name}
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
          <strong class="ff-primary text-xl md:text-2xl">$${u(s.priceCents)}</strong>
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
  `});const c=document.getElementById("orderSummaryContainer");c.innerHTML=t}document.getElementById("orderSummaryContainer").addEventListener("click",t=>{const c=t.target.closest(".minus-btn"),e=t.target.closest(".add-btn"),d=t.target.closest(".delete-btn");if(c){const s=c.dataset.productId,n=c.dataset.productSize,a=i.find(o=>o.productId===s&&o.size===n);a&&a.quantity>1&&(a.quantity-=1,m(),l(),r(),console.log(a.quantity))}if(e){const s=e.dataset.productId,n=e.dataset.productSize,a=i.find(o=>o.productId===s&&o.size===n);a&&(a.quantity+=1,m(),l(),r(),console.log(a.quantity))}if(d){const s=d.dataset.productId,n=i.findIndex(a=>a.productId===s);n!==-1&&(i.splice(n,1),m(),l(),r(),C()),console.log(s)}});function C(){const t=document.getElementById("toast-remove");t&&(t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3))}document.querySelector('[data-dismiss-target="#toast-remove"]')?.addEventListener("click",()=>{document.getElementById("toast-remove")?.classList.add("hidden")});document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const t=y();document.getElementById("cartCount").textContent=t,b(),v(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Products",href:"category.html"},{label:"Cart",href:"cart.html"}]),l(),r()});
