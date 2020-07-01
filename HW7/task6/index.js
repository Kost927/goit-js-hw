const input = document.querySelector("#validation-input");
input.addEventListener("blur", (e) => {
  console.log(e.target.value.length);
  if (e.target.value.length > 6) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
