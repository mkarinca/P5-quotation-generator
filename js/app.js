const data = {
  animal: {
    first: [
      "My dog",
      "My black cat",
      "The cow",
      "My Fish",
      "The Rabbit",
      "My daughter's bird",
      "My son's iguana",
      "My neighbour's dog",
    ],
    middle: [
      "is jumping",
      "is running",
      "eats",
      "sleeps",
      "like to play",
      "swims",
    ],
    last: [
      "too much",
      "everyday",
      "whenever possible",
      "all the time",
      "at night",
      "everytime I come home",
    ],
  },
  human: {
    first: [
      "My brother",
      "My son",
      "The old lady next door",
      "Jack",
      "My teacher",
      "My neighbour",
      "The blonde girl in my school",
    ],
    middle: [
      "is eating",
      "likes to watch tv",
      "smiles",
      "is sulking",
      "is playing guitar",
    ],
    last: [
      "too much",
      "all the time",
      "every night",
      "in the morning",
      "like crazy",
    ],
  },
};

// Define UI Variables
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const qtyInput = document.getElementById("numInput");
const typeInput = document.getElementById("toggle");
const generateBtn = document.getElementById("generateBtn");
const quoteContainer = document.getElementById("quoteContainer");

//Selection Of Type

let type = "human";
typeInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    type = "animal";
  } else {
    type = "human";
  }
});

//Event Listeners for Counter Elements

addBtn.addEventListener("click", () => {
  if (qtyInput.value < 5) {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  }
});

subtractBtn.addEventListener("click", () => {
  if (qtyInput.value > 0) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
});

// Generating Random Quote
let generateQuote = () => {
  const randomFirst = Math.floor(Math.random() * data[type].first.length);
  const randomMiddle = Math.floor(Math.random() * data[type].middle.length);
  const randomLast = Math.floor(Math.random() * data[type].last.length);

  return `${data[type].first[randomFirst]} ${data[type].middle[randomMiddle]} ${
    data[type].last[randomLast] + "."
  }`;
};

// Change Generate Button to/from Reset and Display Quotes

generateBtn.addEventListener("click", () => {
  if (generateBtn.innerText === "GENERATE") {
    for (let i = 0; i < qtyInput.value; i++) {
      quoteContainer.innerHTML += `<div class="quotebox">${generateQuote()}</div>`;
    }
    generateBtn.innerText = "RESET";
    generateBtn.classList.add("resetBtn-shown");
  } else {
    quoteContainer.innerHTML = "";
    generateBtn.innerText = "GENERATE";
    generateBtn.classList.remove("resetBtn-shown");
  }
});
