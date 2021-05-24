const colourCode = document.getElementById("colour-code");
const randomBtn = document.getElementById("randomBtn");

const color = [
  "#BA371B",
  "#BA991B",
  "#6FBA1B",
  "#1BBA4E",
  "#1BBAA8",
  "#1B7FBA",
  "#1B1CBA",
  "#861BBA",
  "#BA1B90",
  "#BA1B32",
];

//Function
function changeColour() {
  let randomColour = getRandomColourCode();
  document.body.style.background = randomColour;
  colourCode.style.color = randomColour;
  colourCode.innerHTML = randomColour;
}

function getRandomColourCode() {
  let index = Math.floor(Math.random() * color.length);
  return color[index];
}

//Event listener
randomBtn.addEventListener("click", changeColour);
