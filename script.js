const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  speed: 900,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  slidesPerView: "auto",
  spaceBetween: 22,
  grabCursor: true,
  pagination: {
    el: ".gallery-pagination",
    clickable: true
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
