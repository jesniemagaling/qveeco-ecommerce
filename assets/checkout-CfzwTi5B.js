import{c as y,d as h,p as x,f as u,g as C,i as S,b as E}from"./emailHandler-BFc5NzdT.js";const $=h();function I(){let a="";const t=y($);Object.values(t).forEach(c=>{const r=c.productId,d=x.find(i=>i.id===r);d&&(a+=`
      <article class="flex items-start gap-4">
        <img
          src="${d.image}"
          alt="Product Image"
          class="h-16 w-16 object-cover"
        />
        <div class="flex-1">
          <p class="ff-primary line-clamp-1 text-base font-medium" title="${d.name}">
            ${d.name}
          </p>
          <div class="ff-primary mt-1 flex items-center gap-4">
            <span class="text-base text-black/60">Qty ${c.quantity}</span>
            <span class="text-md font-semibold">$${u(d.priceCents)}</span>
          </div>
        </div>
      </article>
    `)});const o=document.getElementById("cartCollapse");o.innerHTML=a}const p="/qveeco-ecommerce/assets/images";function L(){let a="";a+=`
    <!-- Email -->
    <div>
      <label for="email" class="mb-3 block font-medium"
        >Email address <span class="text-red-500">*</span></label
      >
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Your valid email address"
        class="w-full rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      />
    </div>

    <!-- Full Name -->
    <div>
      <label for="fullname" class="mb-3 block font-medium"
        >Full Name <span class="text-red-500">*</span></label
      >
      <input
        type="text"
        id="fullname"
        name="fullname"
        required
        placeholder="Your full name"
        class="w-full rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      />
    </div>

    <!-- Country -->
    <div class="relative">
      <label for="country" class="mb-3 block font-medium"
        >Country <span class="text-red-500">*</span></label
      >
      <select
        id="country"
        name="country"
        required
        class="w-full cursor-pointer text-black/60 appearance-none rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      >
        <option value="" disabled selected hidden>Select your country</option>
        <option value="philippines">Philippines</option>
        <!-- Add options here -->
      </select>
      <div class="pointer-events-none absolute right-4 bottom-5 flex items-center">
        <img src="${p}/dropdown-icon.svg" alt="" />
      </div>
    </div>

    <!-- Region -->
    <div class="relative">
      <label for="region" class="mb-3 block font-medium"
        >Region <span class="text-red-500">*</span></label
      >
      <select
        id="region"
        name="region"
        required
        class="w-full cursor-pointer text-black/60 appearance-none rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      >
        <option value="" disabled selected hidden>Select your region</option>
        <!-- Add options here -->
      </select>
      <div class="pointer-events-none absolute right-4 bottom-5 flex items-center">
        <img src="${p}/dropdown-icon.svg" alt="" />
      </div>
    </div>

    <!-- State Province -->
    <div class="relative">
      <label for="province" class="mb-3 block font-medium"
        >State Province <span class="text-red-500">*</span></label
      >
      <select
        id="province"
        name="province"
        required
        class="w-full cursor-pointer text-black/60 appearance-none rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      >
        <option value="" disabled selected hidden>Select your state or province</option>
        <!-- Add options here -->
      </select>
      <div class="pointer-events-none absolute right-4 bottom-5 flex items-center">
        <img src="${p}/dropdown-icon.svg" alt="" />
      </div>
    </div>

    <!-- Town/City -->
    <div class="relative">
      <label for="town" class="mb-3 block font-medium"
        >Town/City <span class="text-red-500">*</span></label
      >
      <select
        id="city"
        name="city"
        required
        class="w-full cursor-pointer text-black/60 appearance-none rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      >
        <option value="" disabled selected hidden>Select your town or city</option>
        <!-- Add options here -->
      </select>
      <div class="pointer-events-none absolute right-4 bottom-5 flex items-center">
        <img src="${p}/dropdown-icon.svg" alt="" />
      </div>
    </div>

    <!-- Barangay -->
    <div class="relative">
      <label for="barangay" class="mb-3 block font-medium"
        >Barangay <span class="text-red-500">*</span></label
      >
      <select
        id="barangay"
        name="barangay"
        required
        class="w-full cursor-pointer text-black/60 appearance-none rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      >
        <option value="" disabled selected hidden>Select your local area</option>
        <!-- Add options here -->
      </select>
      <div class="pointer-events-none absolute right-4 bottom-5 flex items-center">
        <img src="${p}/dropdown-icon.svg" alt="" />
      </div>
    </div>

    <!-- Street Address -->
    <div>
      <label for="street" class="mb-3 block font-medium"
        >Street address <span class="text-red-500">*</span></label
      >
      <input
        type="text"
        id="street"
        name="street"
        required
        placeholder="House number and street name"
        class="w-full rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      />
    </div>

    <!-- Phone -->
    <div>
      <label for="phone" class="mb-1 block font-medium"
        >Phone Number <span class="text-red-500">*</span></label
      >
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        placeholder="Your valid phone number"
        class="w-full rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      />
    </div>
  `;const t=document.getElementById("shippingForm");if(!t){console.warn("Shipping form container not found.");return}t.innerHTML="",t.insertAdjacentHTML("beforeend",a);const o=document.getElementById("region"),c=document.getElementById("province"),r=document.getElementById("city"),d=document.getElementById("barangay");function i(s,e,n=!0){s.innerHTML=`<option value="" disabled selected hidden>${e}</option>`,s.disabled=n}fetch("https://psgc.gitlab.io/api/regions/").then(s=>s.json()).then(s=>{i(o,"Select your region",!1),i(c,"Select your state or province"),i(r,"Select your town or city"),i(d,"Select your local area"),s.forEach(e=>{const n=document.createElement("option");n.value=e.code,n.textContent=e.name,o.appendChild(n)})}),o.addEventListener("change",()=>{const s=o.value;i(r,"Select your town or city"),i(d,"Select your local area"),s==="130000000"?(i(c,"No province in NCR",!0),i(r,"Select your town or city",!1),fetch(`https://psgc.gitlab.io/api/regions/${s}/cities-municipalities/`).then(e=>e.json()).then(e=>{e.forEach(n=>{const l=document.createElement("option");l.value=n.code,l.textContent=n.name,r.appendChild(l)})})):(i(c,"Select your state or province",!1),fetch(`https://psgc.gitlab.io/api/regions/${s}/provinces/`).then(e=>e.json()).then(e=>{e.forEach(n=>{const l=document.createElement("option");l.value=n.code,l.textContent=n.name,c.appendChild(l)})}))}),c.addEventListener("change",()=>{const s=c.value;i(r,"Select your town or city",!1),i(d,"Select your local area"),fetch(`https://psgc.gitlab.io/api/provinces/${s}/cities-municipalities/`).then(e=>e.json()).then(e=>{e.forEach(n=>{const l=document.createElement("option");l.value=n.code,l.textContent=n.name,r.appendChild(l)})})}),r.addEventListener("change",()=>{const s=r.value;i(d,"Select your local area",!1),fetch(`https://psgc.gitlab.io/api/cities-municipalities/${s}/barangays/`).then(e=>e.json()).then(e=>{e.forEach(n=>{const l=document.createElement("option");l.value=n.code,l.textContent=n.name,d.appendChild(l)})})}),B()}function B(){const a=document.getElementById("region"),t=document.getElementById("province"),o=document.getElementById("city"),c=document.getElementById("barangay");if(!a||!t||!o||!c){console.warn("Shipping form not found in DOM yet.");return}t.addEventListener("click",()=>{a.value||f("Please select a region first.")}),o.addEventListener("click",()=>{(!a.value||!t.value&&a.value!=="130000000")&&f("Please select a region and province first.")}),c.addEventListener("click",()=>{o.value||f("Please select a city first.")})}function f(a){const t=document.getElementById("toast-warning"),o=document.getElementById("warning-msg");if(!t||!o){console.warn("Toast element not found");return}o.textContent=a,t.classList.remove("hidden"),setTimeout(()=>{t.classList.add("hidden")},3e3)}const v="/qveeco-ecommerce/assets/images";function T(){const a=h();let t=0,o=0;const c=.13,r=.05,d=900,i=y(a);Object.values(i).forEach(m=>{const g=x.find(w=>w.id===m.productId);o+=m.quantity,g&&(t+=g.priceCents*m.quantity)});const s=t*c,e=t-s,n=e*r,l=e+n+d,k=`
    <h2 class="ff-primary text-2xl font-bold md:text-3xl">Order Summary</h2>
    <div class="mb-6">
      <!-- Header -->
      <button class="mb-4 flex w-full items-center justify-between" id="cartDropdown">
        <h2 class="heading-2 font-normal text-black/60">${o} Items in Cart</h2>
        <img src="${v}/dropdown-icon.svg" alt="" class="transform transition-transform duration-100" id="dropdownIcon" />
      </button>

      <!-- Cart Item -->
      <div class="hidden space-y-2" id="cartCollapse"></div>
    </div>

    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Subtotal</p>
      <span id="subTotal">$${u(t)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Discount (-13%)</p>
      <span class="text-[#FF3333]" id="discount">$${u(s)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Tax (5%)</p>
      <span id="taxPrice">$${u(n)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Delivery Fee</p>
      <span id="deliveryFee">$${u(d)}</span>
    </div>
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${u(l)}</span>
    </div>

    <div class="flex items-center gap-2">
      <div class="relative flex-grow">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="${v}/discount-icon.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Add promo code"
          class="w-full rounded-full border-gray-300 py-3 pr-4 pl-12 text-black/60 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>
      <button class="btn-primary max-w-26 py-4">Apply</button>
    </div>

    <button class="btn-primary mt-4 py-4" id="placeOrder">Place Order</button>
  `,b=document.getElementById("paymentSummaryContainer");b?b.innerHTML=k:console.error("paymentSummaryContainer not found in the DOM.")}document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const a=C(),t=a===0?13:a;document.getElementById("cartCount").textContent=t,S(),E(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Cart",href:"cart.html"},{label:"Checkout",href:"checkout.html"}]),T(),I(),L();const o=document.getElementById("cartDropdown"),c=document.getElementById("cartCollapse"),r=document.getElementById("dropdownIcon");o.addEventListener("click",()=>{c.classList.toggle("hidden"),r.classList.toggle("rotate-180")})});
