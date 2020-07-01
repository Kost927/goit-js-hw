const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

let resize = (e) => {
  text.style.fontSize = e.currentTarget.value + "px";
};

size.addEventListener("input", resize);
