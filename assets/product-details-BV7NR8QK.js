import{i as p,p as b,b as g,a as f,g as y,f as m}from"./breadcrumb-B5fJoev5.js";import{c as x}from"./formatter-byuH9jKl.js";const c="/qveeco-ecommerce/assets/images";function v(e){return`
    <div class="grid w-full place-items-center lg:flex lg:justify-center">
      <div class="flex flex-col items-start gap-4 lg:mb-auto lg:flex-row">
        <!-- Thumbnails -->
        <div class="order-2 flex h-full justify-between gap-2 lg:order-1 lg:flex-col">
          <img src="${e.image}" alt="Thumb 1" class="max-h-xl w-full max-w-[10rem] cursor-pointer rounded-2xl border border-gray-300 object-cover hover:border-black" />
          <img src="${e.image}" alt="Thumb 2" class="max-h-xl w-full max-w-[10rem] cursor-pointer rounded-2xl border border-gray-300 object-cover hover:border-black" />
          <img src="${e.image}" alt="Thumb 3" class="max-h-xl w-full max-w-[10rem] cursor-pointer rounded-2xl border border-gray-300 object-cover hover:border-black" />
        </div>

        <!-- Main Image -->
        <div class="order-1 lg:order-2">
          <img src="${e.image}" alt="Main Image" class="w-full max-w-lg rounded-2xl object-cover" />
        </div>
      </div>

      <article class="grid gap-1 py-2">
        <h3 class="product-heading">${e.name.toUpperCase()}</h3>
        <div class="flex items-center gap-3.5 py-1">
          <img src="${c}/${e.rating}-star.svg" alt="" />
          <p class="ff-primary text-normal pt-1 text-black">${e.rating}.0/<span class="text-normal text-black/60">5</span></p>
        </div>
        <strong class="heading-2">$${m(e.priceCents)}</strong>
        <p class="mt-4 sec-heading text-lg xl:text-xl">${e.description}</p>

        <div class="mt-6 grid gap-3 text-sm text-black/60">
          <h2>Choose Size</h2>
          <div class="flex flex-wrap gap-2" id="sizeContainer">
            ${e.size.map(t=>`
              <label>
                <input type="radio" name="size" required value="${t.toLowerCase()}" class="peer sr-only" />
                <span class="inline-block cursor-pointer rounded-full px-4 py-2 text-sm text-black/60 transition-all duration-200 peer-checked:bg-black peer-checked:text-white hover:bg-black hover:text-white">${t}</span>
              </label>
            `).join("")}
          </div>
        </div>

        <div class="mt-6 flex items-center gap-4">
          <!-- Quantity Selector -->
          <div class="flex items-center rounded-full bg-gray-100 px-3 py-1">
            <button class="px-2 text-xl font-medium text-black" id="minusBtn">−</button>
            <span class="mx-2 text-sm font-medium inline-block text-center w-6"  id="itemCount">1</span>
            <button class="px-2 text-xl font-medium text-black" id="addBtn">+</button>
          </div>

          <!-- Add to Cart Button -->
          <button class="btn-primary max-w-xl xl:max-w-sm" id="addToCartBtn" 
          data-product-id="${e.id}"
          data-product-name="${e.name}"
          data-product-price="${m(e.priceCents)}">
          Add to Cart
          </button>
        </div>
      </article>
    </div>
    <div class="my-6 grid grid-cols-3 gap-2">
      <button
        class="w-full border-b-2 border-b-transparent py-4 text-sm text-black/60 hover:border-b-black md:text-base xl:text-lg"
        id="productDetailsBtn"
      >
        Product Details
      </button>
      <button
        class="w-full border-b-2 border-b-transparent py-4 text-sm text-black/60 hover:border-b-black md:text-base xl:text-lg"
        id="productFAQBtn"
      >
        FAQs
      </button>
      <button
        class="w-full border-b-2 border-b-transparent py-4 text-sm text-black/60 hover:border-b-black md:text-base xl:text-lg"
        id="productRatingsBtn"
      >
        Rating & Reviews
      </button>
    </div>
    <div class="hidden" id="productDetails">
      <h2 class="mb-8 text-xl font-bold md:text-2xl">Product Information</h2>
      <p class="text-black/60">${e.details}</p>
    </div>
    <div class="hidden" id="productFAQ">
      <h2 class="mb-8 text-xl font-bold md:text-2xl">Shop Terms & Conditions</h2>
      <!-- Definitions & Interpretation -->
      <section class="">
        <h3 class="my-6 text-xl font-semibold">Definitions & Interpretation</h3>
        <ul class="list-disc space-y-1 pl-6 text-black/60">
          <li><strong>"Shop"</strong> means Shop Pty Ltd ABN 11 222 333 444;</li>
          <li>
            <strong>"Customer"</strong> means the person or corporation placing an order for the
            purchase of goods or services from Shop;
          </li>
          <li>
            <strong>"Products"</strong> means any goods, materials, equipment or services provided
            to the Customer by Shop;
          </li>
          <li>
            If the Customer comprises more than one person, each of those person’s liability is
            joint and several;
          </li>
          <li>
            References to a party or a person includes any form of entity and their respective
            successors, assigns and representatives;
          </li>
          <li>
            For all periods and times specified in clauses 5 and 11, time is of the essence;
          </li>
          <li>All references to currency are references to Australian dollars.</li>
        </ul>
      </section>

      <!-- General -->
      <section>
        <h3 class="my-6 text-xl font-semibold">General</h3>
        <p class="leading-relaxed text-black/60">
          By ordering the Products and/or accepting delivery of the Products from Shop, the
          Customer agrees that it is bound by these Terms and Conditions of sale. Customer orders,
          including orders placed via the internet, are subject to acceptance by Shop. The
          acceptance of the Customer's order by Shop is expressly made conditional upon the
          Customer's assent to these Terms and Conditions which will prevail notwithstanding
          anything that may be stated to the contrary on the Customer's order. Shop reserves the
          right to vary any of these terms at any time and any subsequent orders placed by the
          Customer will constitute an acceptance of the terms as varied. Once a Customer order has
          been placed and accepted by Shop, the Customer agrees that the Customer has no right to
          cancel or vary the order at any time, unless agreed upon in writing by both parties.
        </p>
      </section>

      <!-- Quotations -->
      <section>
        <h3 class="my-6 text-xl font-semibold">Quotations</h3>
        <p class="leading-relaxed text-black/60">
          Any quotation by Shop to the Customer will be open for acceptance by the Customer within
          the period stated in the quotation or, where no period is stated, within seven (7) days
          from the date of the quotation. Thereafter, prices stated in the quotation may be varied
          by Shop without notice to the Customer.
        </p>
      </section>

      <!-- Hidden Content -->
      <div id="faqMoreContent" class="hidden transition-all duration-300">
        <!-- Prices / Taxes -->
        <section>
          <h3 class="my-6 text-xl font-semibold">Prices / Taxes</h3>
          <p class="leading-relaxed text-black/60">
            The prices charged by and payable to Shop will be the ruling prices applicable at the
            time of order placement, provided that the Products are accepted for delivery within a
            reasonable time. Prices are subject to change without notice. Recommended retail
            prices are provided for indicative purposes only and there is no obligation for Shop
            to comply with that recommendation. It is agreed that should the Customer fail for any
            reason to acquire the quantity of Products sold then without limiting Shop's other
            rights and remedies the unit price charged for the goods sold may be amended to take
            into account any variation in the total quantity purchased by the Customer. Prices
            include GST, but do not include any other tax or duty, which is in addition to the
            price and is to be paid by the Customer at the time of payment for the Products.
          </p>
        </section>

        <!-- Terms of Payment -->
        <section>
          <h3 class="my-6 text-xl font-semibold">Terms of Payment</h3>
          <p class="leading-relaxed text-black/60">
            Credit Card Payments may attract a surcharge, and Shop will inform the Customer if
            this is to be the case before processing the transaction. Unless otherwise agreed in
            writing by Shop, where Shop has not agreed in writing to provide commercial credit to
            the Customer, the total purchase price for Products supplied will be due for payment
            in cash prior to delivery.
            <br /><br />
            Where Shop has agreed in writing to provide commercial credit to the Customer, the
            Customer must make payments in accordance with the payment terms provided by Shop.
            <br /><br />
            Where Shop has approved the provision of a commercial credit arrangement with the
            Customer but has not provided notice of the payment terms to the Customer, the
            Customer must pay the total purchase price for Products supplied within seven days of
            the statement date.
            <br /><br />
            Credit Card Payment at an Invoice or transaction level may also be offered to the
            Customer as a stand-alone payment method, or in conjunction with Credit Card Direct
            Debit Authorisation.
          </p>
        </section>

        <!-- Credit Accounts -->
        <section>
          <h3 class="my-6 text-xl font-semibold">Credit Accounts</h3>
          <p class="leading-relaxed text-black/60">
            Any commercial credit arrangements that are provided to the Customer by Shop will
            continue until terminated by Shop at its sole discretion. In the event that Shop
            terminates the Customer's commercial credit arrangement, the Customer will be notified
            in writing and termination will take effect upon receipt of that notification by the
            Customer.
          </p>
        </section>

        <!-- Change of Ownership -->
        <section>
          <h2 class="my-6 text-xl font-semibold">Change of Ownership</h2>
          <p class="leading-relaxed text-black/60">
            Trading accounts are approved by Shop based on the information supplied and the
            representations made by the Customer. In the event that there is a change in ownership
            of the Customer, whether total or partial, the Customer must immediately provide
            written notice to Shop informing Shop of these changes. Until Shop receives written
            notice from the Customer of a change in ownership, the Customer (including where it is
            a company or trustee, each of the Directors thereof) holds Shop indemnified against
            any and all losses, unpaid accounts, interest, damages, costs, charges, fees and
            expenses incurred or suffered by Shop in trading with any person, company or entity
            which may have purchased the Customer's business or shares and used the previously
            approved account for trading.
            <br /><br />
            Where a Customer has been authorised by Shop to make payments through Credit Card
            Direct Debit, the Customer must provide notice in writing at least five (5) days prior
            to any change in ownership of the business to allow Shop sufficient time to contact
            the new owner to obtain and confirm new Credit Card information if applicable.
          </p>
        </section>

        <!-- Information on the Products Supplied -->
        <section>
          <h2 class="my-6 text-xl font-semibold">Information on the Products Supplied</h2>
          <p class="leading-relaxed text-black/60">
            All descriptive specifications, illustrations, drawings, data, dimensions and weights
            furnished by Shop or otherwise contained in catalogues or other advertising material
            are approximate only and are intended to be merely a general description of the goods.
            These are not incorporated within this agreement and do not form part of the
            description of the goods sold under this or any other agreement unless otherwise
            agreed to in writing by Shop, in which case such information will be subject to
            recognised trade tolerances.
          </p>
        </section>

        <!-- Delivery -->
        <section>
          <h2 class="my-6 text-xl font-semibold">Delivery</h2>
          <p class="leading-relaxed text-black/60">
            The means of delivering the Products to the Customer will be at Shop's discretion.
            Shop reserves the right to deliver Products in part deliveries. If Shop incurs
            additional costs for meeting special or urgent delivery arrangements (e.g., Tasmania /
            Northern Territory Deliveries), these may be charged to the Customer and may include
            airfreight. The Customer agrees to accept delivery of the Products sold at any time
            during normal business hours.
            <br /><br />
            Shop will not be liable for any loss or damage resulting from any late delivery of the
            Products and late delivery will not entitle the Customer to rescind or repudiate the
            Customer's order for the Products.
          </p>
        </section>
      </div>

      <!-- Load More Button -->
      <div class="text-center">
        <button id="faqLoadMoreBtn"
          class="mt-8 w-fit border-b-2 border-b-transparent p-2 text-sm hover:border-b-black md:text-base"
        >
          Load More FAQs
        </button>
      </div>
      </div>
        <div class="hidden" id="productRatings">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold md:text-2xl">All Reviews</h2>
            <div class="flex items-center">
              <div class="dropdown dropdown-end cursor-pointer px-4">
                <div
                  tabindex="0"
                  role="button"
                  class="a-links flex items-center gap-3 text-sm md:text-lg"
                >
                  Latest
                  <span
                    ><img
                      src="${c}/dropdown-icon.svg"
                      alt=""
                      class="-mt-0.5 w-12 md:-mt-0 md:w-14"
                  /></span>
                </div>
                <ul
                  tabindex="0"
                  class="dropdown-content menu bg-base-200 rounded-box z-1 mt-4 w-52 p-2 text-white shadow-sm"
                >
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              <button class="btn-primary px-0 text-xs md:text-base">Write a Review</button>
            </div>
          </div>
        <div class="grid gap-x-12 gap-y-16 p-10 md:grid-cols-2" id="productRatingContainer"></div>
        
        <div class="text-center">
          <button
            id="ratingLoadMoreBtn"
            class="mt-8 w-fit border-b-2 border-b-transparent p-2 text-sm hover:border-b-black md:text-base"
          >
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  `}let d=2;document.addEventListener("DOMContentLoaded",()=>{p();const e=w(),t=b.find(o=>o.id===e);t&&(d=2,g(".breadcrumbs ul",[{label:"Home",href:"qveeco.html"},{label:"Products",href:"category.html"},{label:x(t.type||"Product")}]),C(t),k(),S(),u())});function w(){return new URLSearchParams(window.location.search).get("id")}function C(e){const t=document.getElementById("productContainer");t&&(t.innerHTML=v(e),h(e))}function h(e){const t=document.getElementById("productRatingContainer"),o=document.getElementById("ratingLoadMoreBtn");if(!t||!o)return;t.innerHTML="";const n=e.reviews||[];n.forEach((a,s)=>{const r=document.createElement("article");r.classList.add("review-item"),s>=d&&r.classList.add("hidden"),r.innerHTML=`
      <img src="${c}/${a.rating}-star.svg" alt="${a.rating} stars" />
      <h3 class="ff-primary my-2 flex gap-1 text-2xl font-bold">
        ${a.name}
        <img src="${c}/check-icon.svg" alt="verified" class="-mt-1" />
      </h3>
      <p class="text-black/60">"${a.testimonial}"</p>
      <p class="mt-6 text-black/60">Posted on ${a.date}</p>
    `,t.appendChild(r)}),o.classList.toggle("hidden",n.length<=d),o.onclick=()=>{d=n.length,h(e)}}function k(){const e=document.getElementById("addToCartBtn"),t=document.getElementById("itemCount");if(!e||!t)return;let o=1;e.addEventListener("click",()=>{const s=e.dataset.productId,r=o,i=document.querySelector('input[name="size"]:checked');if(!i){alert("Please select a size before adding to cart.");return}const l=i.value;f({productId:s,size:l,quantity:r}),B(),u(),o=1,t.textContent="1",i.checked=!1});const n=document.getElementById("minusBtn"),a=document.getElementById("addBtn");n?.addEventListener("click",()=>{o>1&&(o--,t.textContent=o)}),a?.addEventListener("click",()=>{o++,t.textContent=o})}function u(){const e=y();document.getElementById("cartCount").textContent=e}function S(){const e=[{btn:"productDetailsBtn",section:"productDetails"},{btn:"productRatingsBtn",section:"productRatings"},{btn:"productFAQBtn",section:"productFAQ"}];e.forEach(({btn:n,section:a})=>{const s=document.getElementById(n),r=document.getElementById(a);s&&r&&s.addEventListener("click",()=>{e.forEach(({btn:i,section:l})=>{document.getElementById(i).classList.remove("border-b-black","text-black","font-medium"),document.getElementById(i).classList.add("border-b-transparent","text-black/60"),document.getElementById(l).classList.add("hidden")}),s.classList.add("border-b-black","text-black","font-medium"),s.classList.remove("border-b-transparent","text-black/60"),r.classList.remove("hidden")})}),document.getElementById("productDetailsBtn")?.click();const t=document.getElementById("faqLoadMoreBtn"),o=document.getElementById("faqMoreContent");t?.addEventListener("click",()=>{o?.classList.remove("hidden"),t.classList.add("hidden")})}function B(){const e=document.getElementById("toast-success");e&&(e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},3e3))}document.querySelector('[data-dismiss-target="#toast-success"]')?.addEventListener("click",()=>{document.getElementById("toast-success")?.classList.add("hidden")});export{w as g};
