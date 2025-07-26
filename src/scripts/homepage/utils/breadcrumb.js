// breadcrumb.js
export function breadcrumbList(selector, items = []) {
  const ul = document.querySelector(selector);
  if (!ul) return;

  ul.innerHTML = ''; // Clear existing items

  items.forEach((item, index) => {
    const li = document.createElement('li');

    if (item.href && index !== items.length - 1) {
      li.innerHTML = `<a href="${item.href}" class="text-black/60">${item.label}</a>`;
    } else {
      li.textContent = item.label;
    }

    ul.appendChild(li);
  });
}
