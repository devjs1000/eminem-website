var swiper = new Swiper(".mySwiper", {
    effect: "slide",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
