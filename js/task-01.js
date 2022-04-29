const elements = {
  listCategories: document.querySelector("#categories"),
  listItems: document.querySelectorAll(".item"),
};
const { listCategories, listItems } = elements;

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(function (listItems, i) {
  const hiddens = elements.listItems[i].querySelector("h2").textContent;
  console.log(`Category: ${hiddens}`);
  const liLength = elements.listItems[i].querySelectorAll("li");
  console.log(`Elements: ${liLength.length}`);
});