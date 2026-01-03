const range = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');

function updateRangeValue () {
    rangeValue.value = range.value;
}; 

function updateRangeSlider () {
    range.value = rangeValue.value
}