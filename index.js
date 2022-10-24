var slider = document.querySelector('#canvas-slider');
var oldSliderValue = slider.value;
var sliderValue = document.querySelector('.canvas-slider-area > p');
sliderValue.textContent = slider.value + " x " + slider.value;
var gridContent = document.querySelector('.grid-content');

// On slider change
slider.addEventListener('input', () => {
    // Change the canvas grid size
        // Get the new slider value
        let newSliderValue = slider.value;
        // Get the difference between the two: new - old
        let difference = newSliderValue - oldSliderValue;
        // If difference is negative (new < old):
            // Delete all rows and columns based on the difference
        if (difference < 0) {
            gridContent.setAttribute('style', 'grid-template-columns: repeat(' + newSliderValue + ', 1fr);');
            // Get the difference of the squared values which indicates the number of divs to remove
            let divsToRemove = Math.abs(Math.pow(newSliderValue, 2) - Math.pow(oldSliderValue, 2));
            // Remove the divs
            for (let i = 0; i < divsToRemove*2; i++) {
                // Need to multiply number of loop by 2 because div whitespacing in .html file causes the creation of unintended child texts (can also format it in .html file but at the cost of readability)
                gridContent.removeChild(gridContent.lastChild);
            }
        }
        // If difference is positive (new > old):
            // Add all rows and columns based on the difference
        else if (difference > 0) {
            gridContent.setAttribute('style', 'grid-template-columns: repeat(' + newSliderValue + ', 1fr);');
            // Get the difference of the squared values which indicates the number of divs to add
            let divsToAdd = Math.abs(Math.pow(newSliderValue, 2) - Math.pow(oldSliderValue, 2));
            // Add the divs
            for (let i = 0; i < divsToAdd*2; i++) {
                // Need to multiply number of loop by 2 because div whitespacing in .html file causes the creation of unintended child texts (can also format it in .html file but at the cost of readability)
                // Need to add additional child texts to maintain html DOM structure if i is odd
                let newGrid = document.createElement('div');
                newGrid.classList.add('grid');
                if (i % 2 == 0) {
                    gridContent.appendChild(newGrid);
                }
                else {
                    gridContent.appendChild(document.createTextNode(''));
                }
            }
        }
    // Update the old slider value
    oldSliderValue = slider.value;
    sliderValue.textContent = slider.value + " x " + slider.value;
});