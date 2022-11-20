const body = document.getElementById('body');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const h3 = document.querySelector('h3');

h3.innerHTML = 'Color 1: ' + color1.value + '<br>' + 'Color 2: ' + color2.value;

function updateColor(event){
  body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  h3.innerHTML = 'Color 1: ' + color1.value + '<br>' + 'Color 2: ' + color2.value;
}


color1.addEventListener('input', updateColor);
color2.addEventListener('input', updateColor);

