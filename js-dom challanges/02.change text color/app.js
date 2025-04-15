const headingText = document.querySelector("h1");
const spanElem = document.querySelector("span");

const buttons = document.querySelector(".buttons");
const btnElem = document.querySelector(".btn");

function getRandomColor() {
  // Generate a random hex color code
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

["Red", "Blue", "Yellow", "Green", "Random", "Reset"].forEach((color) => {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = color;
  button.style.backgroundColor = color.toLowerCase();
  if (color === "Random") {
    button.style.background =
      "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
  }
  buttons.appendChild(button);
});

buttons.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  switch (e.target.innerText) {
    case "Red":
      changeTextColor(e.target.innerText);
      break;
    case "Blue":
      changeTextColor(e.target.innerText);
      break;
    case "Green":
      changeTextColor(e.target.innerText);
      break;
    case "Yellow":
      changeTextColor(e.target.innerText);
      break;
    case "Random":
      changeTextColor(e.target.innerText);
      break;
    case "Reset":
      changeTextColor(e.target.innerText);
      break;
  }
});

function changeTextColor(value) {
  let color;

  if (value.toLowerCase() === "random") {
    color = getRandomColor();
  } else {
    color = value.toLowerCase();
  }
  if (value.toLowerCase() === "reset") {
    headingText.style.color = "#000";
    spanElem.style.backgroundColor = "#000";
  }
  headingText.style.color = color;
  spanElem.style.backgroundColor = color;
}
