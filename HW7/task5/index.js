const input = document.querySelector("#name-input");
input.addEventListener("input", (e) => {
  let txt = document.querySelector("#name-output");
  if (e.target.value.length === 0) {
    return (txt.innerHTML = "незнакомец");
  } else {
    txt.innerHTML = e.target.value;
  }
});
