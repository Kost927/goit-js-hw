// const list = document.querySelector("#categories");
// console.log(list);
// const item = document.querySelector(".item");
// console.log(item.firstElementChild);
// const itemQuantity = list.children.length;
// console.log(`item quantity: ${itemQuantity}`);

const array = document.querySelectorAll(".item");
console.log(array);

// const newArray = Array.from(array);
// console.log(newArray);
for (let i = 0; i < array.length; i += 1) {
  console.log(`category: ${array[i].children[0].textContent}`);
  //   console.log(newArray[i].childNodes[0]);
  console.log(`quantity: ${array[i].children[1].children.length}`);
}
