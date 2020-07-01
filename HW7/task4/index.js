let counterValue = 0;
let count = document.querySelector("#value");

const decrement = document.querySelector("[data-action=decrement]");
decrement.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  count.innerHTML = counterValue;
});

const increment = document.querySelector("[data-action=increment]");
increment.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  count.innerHTML = counterValue;
});
