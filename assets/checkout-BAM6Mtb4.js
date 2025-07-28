import{c as y,d as h,p as x,f as p,g as w,i as C,b as S}from"./breadcrumb-BskWwaws.js";const $=h();function E(){let i="";const d=y($);Object.values(d).forEach(s=>{const l=s.productId,c=x.find(n=>n.id===l);c&&(i+=`
      <article class="flex items-start gap-4">
        <img
          src="${c.image}"
          alt="Product Image"
          class="h-16 w-16 object-cover"
        />
        <div class="flex-1">
          <p class="ff-primary line-clamp-1 text-base font-medium" title="${c.name}">
            ${c.name}
          </p>
          <div class="ff-primary mt-1 flex items-center gap-4">
            <span class="text-base text-black/60">Qty ${s.quantity}</span>
            <span class="text-md font-semibold">$${p(c.priceCents)}</span>
          </div>
        </div>
      </article>
    `)});const r=document.getElementById("cartCollapse");r.innerHTML=i}const u="/qveeco-ecommerce/assets/images";function I(){let i="";i+=`
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
        <img src="${u}/dropdown-icon.svg" alt="" />
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
        <img src="${u}/dropdown-icon.svg" alt="" />
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
        <img src="${u}/dropdown-icon.svg" alt="" />
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
        <img src="${u}/dropdown-icon.svg" alt="" />
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
        <img src="${u}/dropdown-icon.svg" alt="" />
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
        >Phone <span class="text-red-500">*</span></label
      >
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        class="w-full rounded-full border border-black/20 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
      />
    </div>
  `;const d=document.getElementById("shippingForm");d.innerHTML=i;const r=document.getElementById("region"),s=document.getElementById("province"),l=document.getElementById("city"),c=document.getElementById("barangay");function n(o,e,t=!0){o.innerHTML=`<option value="" disabled selected hidden>${e}</option>`,o.disabled=t}fetch("https://psgc.gitlab.io/api/regions/").then(o=>o.json()).then(o=>{n(r,"Select your region",!1),n(s,"Select your state or province"),n(l,"Select your town or city"),n(c,"Select your local area"),o.forEach(e=>{const t=document.createElement("option");t.value=e.code,t.textContent=e.name,r.appendChild(t)})}),r.addEventListener("change",()=>{const o=r.value;n(l,"Select your town or city"),n(c,"Select your local area"),o==="130000000"?(n(s,"No province in NCR",!0),n(l,"Select your town or city",!1),fetch(`https://psgc.gitlab.io/api/regions/${o}/cities-municipalities/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const a=document.createElement("option");a.value=t.code,a.textContent=t.name,l.appendChild(a)})})):(n(s,"Select your state or province",!1),fetch(`https://psgc.gitlab.io/api/regions/${o}/provinces/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const a=document.createElement("option");a.value=t.code,a.textContent=t.name,s.appendChild(a)})}))}),s.addEventListener("change",()=>{const o=s.value;n(l,"Select your town or city",!1),n(c,"Select your local area"),fetch(`https://psgc.gitlab.io/api/provinces/${o}/cities-municipalities/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const a=document.createElement("option");a.value=t.code,a.textContent=t.name,l.appendChild(a)})})}),l.addEventListener("change",()=>{const o=l.value;n(c,"Select your local area",!1),fetch(`https://psgc.gitlab.io/api/cities-municipalities/${o}/barangays/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const a=document.createElement("option");a.value=t.code,a.textContent=t.name,c.appendChild(a)})})})}const g="/qveeco-ecommerce/assets/images",L=h();let v=0;function q(){let i=0;const d=.13,r=.05,s=900,l=y(L);Object.values(l).forEach(m=>{const k=m.productId,f=x.find(b=>b.id===k);if(v+=m.quantity,f){const b=f.priceCents*m.quantity;i+=b}});const c=i*d,n=i-c,o=n*r,e=n+o+s,t=`
    <h2 class="ff-primary text-2xl font-bold md:text-3xl">Order Summary</h2>
    <div class="mb-6">
      <!-- Header -->
      <button class="mb-4 flex w-full items-center justify-between" id="cartDropdown">
        <h2 class="heading-2 font-normal text-black/60">${v} Items in Cart</h2>
        <img
          src="${g}/dropdown-icon.svg"
          alt=""
          class="transform transition-transform duration-100"
          id="dropdownIcon"
        />
      </button>
      <!-- Cart Item -->
      <div class="hidden space-y-2" id="cartCollapse">
      </div>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Subtotal</p>
      <span id="subTotal">$${p(i)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Discount (-13%)</p>
      <span class="text-[#FF3333]" id="discount">$${p(c)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Tax (5%)</p>
      <span id="taxPrice">$${p(o)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Delivery Fee</p>
      <span id="deliveryFee">$${p(s)}</span>
    </div>
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${p(e)}</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="relative flex-grow">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="${g}/discount-icon.svg" alt="" />
        </div>
        <input
          type="text"
          placeholder="Add promo code"
          class="w-full rounded-full border-gray-300 py-3 pr-4 pl-12 text-black/60 focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>
      <button class="btn-primary max-w-26 py-4">Apply</button>
    </div>
    <button class="btn-primary mt-4 py-4" id="placeOrder">
      Place Order
    </button>
  `,a=document.getElementById("paymentSummaryContainer");a.innerHTML=t}document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const i=w(),d=i===0?13:i;document.getElementById("cartCount").textContent=d,C(),S(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Cart",href:"category.html"},{label:"Checkout",href:"checkout.html"}]),I(),q(),E();const r=document.getElementById("cartDropdown"),s=document.getElementById("cartCollapse"),l=document.getElementById("dropdownIcon");r.addEventListener("click",()=>{s.classList.toggle("hidden"),l.classList.toggle("rotate-180")})});
