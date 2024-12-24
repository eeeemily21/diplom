$(function () {

  var swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
});