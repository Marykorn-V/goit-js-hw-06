const elements = {
  listCategories: document.querySelector("#categories"),
  listItems: document.querySelectorAll(".item"),
};
const { listCategories, listItems } = elements;

console.log(`Number of categories: ${listItems.length}`);

for (let i = 0; i < listItems.length; i += 1) {
  const hiddens = listItems[i].querySelector("h2").textContent;
  console.log(`Category: ${hiddens}`);
  const liLength = listItems[i].querySelectorAll("li");
  console.log(`Elements: ${liLength.length}`);
}
