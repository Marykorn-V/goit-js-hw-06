function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

function handleClickButtonColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
btnColor.addEventListener('click', handleClickButtonColor);
