const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 4300,
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

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const glow = document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (event) => {
    glow.style.setProperty("--x", `${event.clientX}px`);
    glow.style.setProperty("--y", `${event.clientY}px`);
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
