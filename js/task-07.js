const scrollBar = document.querySelector("#font-size-control");
const ourText = document.querySelector("#text");
scrollBar.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  ourText.style.fontSize = event.currentTarget.value + 'px';
}