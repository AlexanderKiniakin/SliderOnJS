const slider_container = document.querySelector('.slider-container');
const images = document.querySelectorAll('.image');
const next_btn = document.querySelector('.next-btn');
const prev_btn = document.querySelector('.prev-btn');
let slider_position = 0;
const slider_track_width = images.length * slider_container.offsetWidth - slider_container.offsetWidth;

next_btn.addEventListener('click',() => {
    clearInterval(interval);
    return next_slide()
});

prev_btn.addEventListener('click', () => {
    clearInterval(interval);
    return prev_slide()
});

const next_slide = () => {
    if (slider_track_width <= slider_position) {
        slider_position = -slider_container.offsetWidth;
    }

    slider_position += slider_container.offsetWidth;

    images[0].style.marginLeft = `-${slider_position}px`;
};

const prev_slide = () => {
    if (slider_position < 0) {
        slider_position = slider_track_width +slider_container.offsetWidth;
    } else if (slider_position === 0) {
        slider_position = slider_track_width + slider_container.offsetWidth;
    }

    slider_position -= slider_container.offsetWidth;

    images[0].style.marginLeft = `-${slider_position}px`;
};

const interval = setInterval(() => {
    next_slide()
}, 3000);