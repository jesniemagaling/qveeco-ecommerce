// Import Swiper and its styles at the top of the file
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Initialize the Swiper once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const ratingSwiper = new Swiper('.rating-swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.rating-btn-next',
      prevEl: '.rating-btn-prev',
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  });
  window.ratingSwiper = ratingSwiper;
});
