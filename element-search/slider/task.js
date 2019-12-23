const slidesItem = document.querySelectorAll('.slider__item');
const nextSlide = document.querySelector('.slider__arrow_next');
const prevSlide = document.querySelector('.slider__arrow_prev');

let num = 0;

nextSlide.onclick = function () {
    num++;
    for (let slide of Array.from(slidesItem)) {
        slide.className = 'slider__item';
    }
    if (num >= slidesItem.length) {
        num = 0;
    }
    slidesItem[num].className = 'slider__item slider__item_active';
};

prevSlide.onclick = function () {
    num--;
    for (let slide of Array.from(slidesItem)) {
        slide.className = 'slider__item';
    }
    if (num < 0) {
        num = slidesItem.length - 1;
    }
    slidesItem[num].className = 'slider__item slider__item_active';
};