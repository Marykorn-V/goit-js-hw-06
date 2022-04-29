function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestoy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}


refs.btnCreate.addEventListener('click', () => handleBoxes(refs.input.value));
refs.btnDestoy.addEventListener('click', () => { refs.boxes.textContent = '';  refs.input.value = ''})
const handleBoxes = (amount) => {
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement('div');

    
    createDiv.style.width = `${boxSize}px`;
    createDiv.style.height = `${boxSize}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(createDiv);
    boxSize += 10;
  }
}
