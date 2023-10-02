function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const span = document.querySelector(".color");
const widget = document.querySelector(".widget");

colorButton.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = getRandomHexColor();
  span.textContent = ` ${selectedColor}`;
  widget.style.backgroundColor = selectedColor;
}
