const sliderContainer = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sliderLength = rightSlider.querySelectorAll('div').length;
let ActiveSlideIndex = 0;
leftSlider.style.top = `-${(sliderLength - 1) * 100}vh`;
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));


const changeSlide = (direction) => {
    let sliderheight = sliderContainer.clientHeight;
    if (direction === 'up') {
        ActiveSlideIndex++;
        if (ActiveSlideIndex > sliderLength - 1) {
            ActiveSlideIndex = 0
        }
    }
    else if (direction === 'down') {
        ActiveSlideIndex--;
        if (ActiveSlideIndex < 0) {
            ActiveSlideIndex = sliderLength - 1;
        }
    }
    rightSlider.style.transform = `translateY(-${ActiveSlideIndex * sliderheight}px)`
    leftSlider.style.transform = `translateY(${ActiveSlideIndex * sliderheight}px)`

}





