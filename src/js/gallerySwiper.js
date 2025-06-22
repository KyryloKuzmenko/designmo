import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  // const prevBtn = document.querySelector('.gameplay-btn-prev');
  // const nextBtn = document.querySelector('.gameplay-btn-next');

  const swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 60,
    initialSlide: 0,
    mousewheel: true,
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
    },
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        centeredSlides: false,
        slidesPerView: 2.5,
        spaceBetween: 43,
      },
    },
  });

  // prevBtn.addEventListener('click', () => {
  //   swiper.slidePrev();
  // });

  // nextBtn.addEventListener('click', () => {
  //   swiper.slideNext();
  // });
});
