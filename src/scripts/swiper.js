const ratingSwiper = new Swiper('.rating-swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1.1,
  grabCursor: true,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.rating-btn-next',
    prevEl: '.rating-btn-prev',
  },
  breakpoints: {
    640: { slidesPerView: 1.1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
