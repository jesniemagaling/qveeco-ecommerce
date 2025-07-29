import { showWarningToast } from '../utils/showtoast';
const imageBase = `${import.meta.env.BASE_URL}assets/images`;

export function renderShippingForm() {
  let shippingFormHTML = '';

  shippingFormHTML += `
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
        <img src="${imageBase}/dropdown-icon.svg" alt="" />
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
        <img src="${imageBase}/dropdown-icon.svg" alt="" />
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
        <img src="${imageBase}/dropdown-icon.svg" alt="" />
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
        <img src="${imageBase}/dropdown-icon.svg" alt="" />
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
        <img src="${imageBase}/dropdown-icon.svg" alt="" />
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
  `;

  const shippingContainer = document.getElementById('shippingForm');
  if (!shippingContainer) {
    console.warn('Shipping form container not found.');
    return;
  }

  // SAFER: use insertAdjacentHTML for <form>
  shippingContainer.innerHTML = '';
  shippingContainer.insertAdjacentHTML('beforeend', shippingFormHTML);
  bindShippingListeners();

  const regionSelect = document.getElementById('region');
  const provinceSelect = document.getElementById('province');
  const citySelect = document.getElementById('city');
  const barangaySelect = document.getElementById('barangay');

  // Helper to clear select
  function resetSelect(select, placeholder) {
    select.innerHTML = `<option value="" disabled selected hidden>${placeholder}</option>`;
    select.disabled = false;
  }

  // Load Regions on page load
  fetch('https://psgc.gitlab.io/api/regions/')
    .then((res) => res.json())
    .then((regions) => {
      resetSelect(regionSelect, 'Select your region');
      regions.forEach((region) => {
        const option = document.createElement('option');
        option.value = region.code;
        option.textContent = region.name;
        regionSelect.appendChild(option);
      });
    });

  // Load Provinces OR Cities when region is selected
  regionSelect.addEventListener('change', () => {
    const regionCode = regionSelect.value;
    resetSelect(provinceSelect, 'Select your state or province');
    resetSelect(citySelect, 'Select your town or city');
    resetSelect(barangaySelect, 'Select your local area');

    if (regionCode === '130000000') {
      // NCR has no provinces
      resetSelect(provinceSelect, 'No province in NCR', true);
      provinceSelect.disabled = true;

      fetch(`https://psgc.gitlab.io/api/regions/${regionCode}/cities-municipalities/`)
        .then((res) => res.json())
        .then((cities) => {
          resetSelect(citySelect, 'Select your town or city');
          cities.forEach((city) => {
            const option = document.createElement('option');
            option.value = city.code;
            option.textContent = city.name;
            citySelect.appendChild(option);
          });
        });
    } else {
      provinceSelect.disabled = false;

      fetch(`https://psgc.gitlab.io/api/regions/${regionCode}/provinces/`)
        .then((res) => res.json())
        .then((provinces) => {
          provinces.forEach((province) => {
            const option = document.createElement('option');
            option.value = province.code;
            option.textContent = province.name;
            provinceSelect.appendChild(option);
          });
        });
    }
  });

  // Load Cities/Municipalities when province is selected
  provinceSelect.addEventListener('change', () => {
    const provinceCode = provinceSelect.value;
    resetSelect(citySelect, 'Select your town or city');
    resetSelect(barangaySelect, 'Select your local area');

    fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/cities-municipalities/`)
      .then((res) => res.json())
      .then((cities) => {
        cities.forEach((city) => {
          const option = document.createElement('option');
          option.value = city.code;
          option.textContent = city.name;
          citySelect.appendChild(option);
        });
      });
  });

  // Load Barangays when city/municipality is selected
  citySelect.addEventListener('change', () => {
    const cityCode = citySelect.value;
    resetSelect(barangaySelect, 'Select your local area');

    fetch(`https://psgc.gitlab.io/api/cities-municipalities/${cityCode}/barangays/`)
      .then((res) => res.json())
      .then((barangays) => {
        barangays.forEach((barangay) => {
          const option = document.createElement('option');
          option.value = barangay.code;
          option.textContent = barangay.name;
          barangaySelect.appendChild(option);
        });
      });
  });
}

export function bindShippingListeners() {
  const regionSelect = document.getElementById('region');
  const provinceSelect = document.getElementById('province');
  const citySelect = document.getElementById('city');
  const barangaySelect = document.getElementById('barangay');

  if (!regionSelect || !provinceSelect || !citySelect || !barangaySelect) {
    console.warn('Shipping form not found in DOM yet.');
    return;
  }

  provinceSelect.addEventListener('click', () => {
    if (!regionSelect.value) {
      showWarningToast('Please select a region first.');
    }
  });

  citySelect.addEventListener('click', () => {
    if (!regionSelect.value || (!provinceSelect.value && regionSelect.value !== '130000000')) {
      showWarningToast('Please select a province first.');
    }
  });

  barangaySelect.addEventListener('click', () => {
    if (!citySelect.value) {
      showWarningToast('Please select a city first.');
    }
  });
}
