import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    open: '/pages/product.html', // Automatically open this page in the browser
  },

  build: {
    rollupOptions: {
      input: {
        homepage: resolve(__dirname, 'pages/homepage.html'),
        product: resolve(__dirname, 'pages/product.html'),
        productDetails: resolve(__dirname, 'pages/product-details.html'),
        cart: resolve(__dirname, 'pages/cart.html'),
        checkout: resolve(__dirname, 'pages/checkout.html'),
      },
    },
  },
});
