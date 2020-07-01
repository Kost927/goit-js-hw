const body = document.querySelector("body");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

for (const item of ingredients) {
  const li = document.createElement("li");
  li.textContent = item;
  fragment.appendChild(li);
}
ul.appendChild(fragment);
