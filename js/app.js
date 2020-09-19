// Select Counter Elements
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const input = document.getElementById("numInput");

//Event Listeners for Counter Elements

addBtn.addEventListener("click", () => {
  if (input.value < 5) {
    input.value = parseInt(input.value) + 1;
  }
});

subtractBtn.addEventListener("click", () => {
  if (input.value > 0) {
    input.value = parseInt(input.value) - 1;
  }
});
