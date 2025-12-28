let sliderPercent = 0
const sliderWidth = 100
const slidersCount = document.querySelectorAll(".slider__item").length

const updateSliderPosition = () => {
    const sliderTrack = document.querySelector(".slider__track");
    const contents = document.querySelectorAll(".slider__content");
    const dots = document.querySelectorAll(".slider__radio");
    
    sliderTrack.style.transform = `translateX(-${sliderPercent}%)`;

    contents.forEach(content => {
        content.style.animation = 'none';
        content.offsetHeight;
        content.style.animation = null; 
    });

    const index = sliderPercent / 100;
    if(dots[index]){
            dots[index].checked = true;
    }
    console.log(slidersCount)
}

const sliderNext = () => { 
    if(sliderPercent < (slidersCount * sliderWidth - 100)) {
        sliderPercent += sliderWidth
        updateSliderPosition()
    } else {
        sliderPercent = 0
    }
    updateSliderPosition()

}
const sliderPrev = () => {
    if(sliderPercent > 0) {
        sliderPercent -= sliderWidth
    } else {
        sliderPercent = slidersCount * sliderWidth - 100
    }
    updateSliderPosition()
}

const sliderRadio = (radio) => {
    sliderPercent = radio;
    updateSliderPosition()
}