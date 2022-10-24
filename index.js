var slider = document.querySelector('#canvas-slider');
var sliderValue = document.querySelector('.canvas-slider-area > p');
sliderValue.textContent = slider.value + " x " + slider.value;

slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value + " x " + slider.value;
});