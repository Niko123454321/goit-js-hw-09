console.log('faina_super_dog');

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;
let buttonValue = false;

buttonStart.addEventListener('click', onColorPicker);
buttonStop.addEventListener('click', offColorPicker);

function onColorPicker(params) {
  if (buttonValue) {
    return;
  }
  buttonValue = true;
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    console.log('color: ', getRandomHexColor());
  }, 1000);
}

function offColorPicker(params) {
  if (!buttonValue) {
    return;
  }
  buttonValue = false;
  buttonStop.disabled = true;
  buttonStart.disabled = false;
  clearInterval(intervalId);
  console.log('stop');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
