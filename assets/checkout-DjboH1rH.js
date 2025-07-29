import{d as x,e as v,p as k,f as p,k as f,g as E,i as S,b as C,a as I,s as $}from"./emailHandler-CeslL5sG.js";const B=v();function L(){let i="";const s=x(B);Object.values(s).forEach(a=>{const d=a.productId,l=k.find(r=>r.id===d);l&&(i+=`
      <article class="flex items-start gap-4">
        <img
          src="${l.image}"
          alt="Product Image"
          class="h-16 w-16 object-cover"
        />
        <div class="flex-1">
          <p class="ff-primary line-clamp-1 text-base font-medium" title="${l.name}">
            ${l.name}
          </p>
          <div class="ff-primary mt-1 flex items-center gap-4">
            <span class="text-base text-black/60">Qty ${a.quantity}</span>
            <span class="text-md font-semibold">$${p(l.priceCents)}</span>
          </div>
        </div>
      </article>
    `)});const c=document.getElementById("cartCollapse");c.innerHTML=i}const b="/qveeco-ecommerce/assets/images";function P(){let i="";i+=`
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
        <img src="${b}/dropdown-icon.svg" alt="" />
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
        <img src="${b}/dropdown-icon.svg" alt="" />
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
        <img src="${b}/dropdown-icon.svg" alt="" />
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
        <img src="${b}/dropdown-icon.svg" alt="" />
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
        <img src="${b}/dropdown-icon.svg" alt="" />
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
  `;const s=document.getElementById("shippingForm");if(!s){console.warn("Shipping form container not found.");return}s.innerHTML="",s.insertAdjacentHTML("beforeend",i),T();const c=document.getElementById("region"),a=document.getElementById("province"),d=document.getElementById("city"),l=document.getElementById("barangay");function r(n,e){n.innerHTML=`<option value="" disabled selected hidden>${e}</option>`,n.disabled=!1}fetch("https://psgc.gitlab.io/api/regions/").then(n=>n.json()).then(n=>{r(c,"Select your region"),n.forEach(e=>{const t=document.createElement("option");t.value=e.code,t.textContent=e.name,c.appendChild(t)})}),c.addEventListener("change",()=>{const n=c.value;r(a,"Select your state or province"),r(d,"Select your town or city"),r(l,"Select your local area"),n==="130000000"?(r(a,"No province in NCR"),a.disabled=!0,fetch(`https://psgc.gitlab.io/api/regions/${n}/cities-municipalities/`).then(e=>e.json()).then(e=>{r(d,"Select your town or city"),e.forEach(t=>{const o=document.createElement("option");o.value=t.code,o.textContent=t.name,d.appendChild(o)})})):(a.disabled=!1,fetch(`https://psgc.gitlab.io/api/regions/${n}/provinces/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const o=document.createElement("option");o.value=t.code,o.textContent=t.name,a.appendChild(o)})}))}),a.addEventListener("change",()=>{const n=a.value;r(d,"Select your town or city"),r(l,"Select your local area"),fetch(`https://psgc.gitlab.io/api/provinces/${n}/cities-municipalities/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const o=document.createElement("option");o.value=t.code,o.textContent=t.name,d.appendChild(o)})})}),d.addEventListener("change",()=>{const n=d.value;r(l,"Select your local area"),fetch(`https://psgc.gitlab.io/api/cities-municipalities/${n}/barangays/`).then(e=>e.json()).then(e=>{e.forEach(t=>{const o=document.createElement("option");o.value=t.code,o.textContent=t.name,l.appendChild(o)})})})}function T(){const i=document.getElementById("region"),s=document.getElementById("province"),c=document.getElementById("city"),a=document.getElementById("barangay");if(!i||!s||!c||!a){console.warn("Shipping form not found in DOM yet.");return}s.addEventListener("click",()=>{i.value||f("Please select a region first.")}),c.addEventListener("click",()=>{(!i.value||!s.value&&i.value!=="130000000")&&f("Please select a province first.")}),a.addEventListener("click",()=>{c.value||f("Please select a city first.")})}const h="/qveeco-ecommerce/assets/images";function q(){const i=v();let s=0,c=0;const a=.13,d=.05,l=900,r=x(i);Object.values(r).forEach(g=>{const y=k.find(w=>w.id===g.productId);c+=g.quantity,y&&(s+=y.priceCents*g.quantity)});const n=s*a,e=s-n,t=e*d,o=e+t+l,m=`
    <h2 class="ff-primary text-2xl font-bold md:text-3xl">Order Summary</h2>
    <div class="mb-6">
      <!-- Header -->
      <button class="mb-4 flex w-full items-center justify-between" id="cartDropdown">
        <h2 class="heading-2 font-normal text-black/60">${c} Items in Cart</h2>
        <img src="${h}/dropdown-icon.svg" alt="" class="transform transition-transform duration-100" id="dropdownIcon" />
      </button>

      <!-- Cart Item -->
      <div class="hidden space-y-2" id="cartCollapse"></div>
    </div>

    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Subtotal</p>
      <span id="subTotal">$${p(s)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Discount (-13%)</p>
      <span class="text-[#FF3333]" id="discount">$${p(n)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Tax (5%)</p>
      <span id="taxPrice">$${p(t)}</span>
    </div>
    <div class="heading-2 flex items-center justify-between">
      <p class="font-normal text-black/60">Delivery Fee</p>
      <span id="deliveryFee">$${p(l)}</span>
    </div>
    <div class="heading-2 my-6 flex items-center justify-between">
      <p class="font-normal text-black">Total</p>
      <span>$${p(o)}</span>
    </div>

    <div class="flex items-center gap-2">
      <div class="relative flex-grow">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <img src="${h}/discount-icon.svg" alt="" />
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
  `,u=document.getElementById("paymentSummaryContainer");u?u.innerHTML=m:console.error("paymentSummaryContainer not found in the DOM.")}document.addEventListener("DOMContentLoaded",()=>{JSON.parse(localStorage.getItem("cart"));const i=E(),s=i===0?13:i;document.getElementById("cartCount").textContent=s,S(),C(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Cart",href:"cart.html"},{label:"Checkout",href:"checkout.html"}]),q(),L(),P(),I();const c=document.getElementById("cartDropdown"),a=document.getElementById("cartCollapse"),d=document.getElementById("dropdownIcon");c.addEventListener("click",()=>{a.classList.toggle("hidden"),d.classList.toggle("rotate-180")}),document.getElementById("placeOrder")?.addEventListener("click",()=>{const l=document.getElementById("region"),n=(l?.value||"")==="130000000"||l?.options[l.selectedIndex]?.text==="NCR",e=[{id:"email",label:"Email"},{id:"fullname",label:"Full Name"},{id:"country",label:"Country"},{id:"region",label:"Region"},!n&&{id:"province",label:"Province"},{id:"city",label:"City"},{id:"barangay",label:"Barangay"},{id:"street",label:"Street"},{id:"phone",label:"Phone Number"}].filter(Boolean),t=e.find(({id:m})=>{const u=document.getElementById(m);return!u||!u.value||u.value.trim()===""||u.value==="Select your region"||u.value==="Select your state or province"||u.value==="Select your town or city"||u.value==="Select your local area"});if(t){f(`Please complete the ${t.label} field.`);return}v().length===0?f("Your cart is empty. Add an item to continue."):(console.log("Placing order..."),e.forEach(({id:m})=>{const u=document.getElementById(m);u&&(u.value="")}),localStorage.removeItem("cart"),$("Order placed successfully. Redirecting to homepage..."),setTimeout(()=>{window.location.href="qveeco.html"},5e3))})});
