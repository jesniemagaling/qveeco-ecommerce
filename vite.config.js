import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    open: '/pages/checkout.html', // Automatically open this page in the browser
  },

  build: {
    rollupOptions: {
      input: {
        homepage: resolve(__dirname, 'pages/qveeco.html'),
        product: resolve(__dirname, 'pages/category.html'),
        productDetails: resolve(__dirname, 'pages/product-details.html'),
        cart: resolve(__dirname, 'pages/cart.html'),
        checkout: resolve(__dirname, 'pages/checkout.html'),
      },
    },
  },
});
