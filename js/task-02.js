const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
    const listEl = document.createElement('li');
    listEl.classList.add('item');
    listEl.textContent = ingredient;
    return listEl;
  });
list.append(...elements);
console.log(...elements);