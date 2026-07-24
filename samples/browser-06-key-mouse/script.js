const detectArea = document.querySelector("#detectArea");
const keyText = document.querySelector("#keyText");
const mouseText = document.querySelector("#mouseText");

detectArea.addEventListener("keydown", (event) => {
  keyText.textContent = `Key: ${event.key}`;
});

detectArea.addEventListener("mousemove", (event) => {
  mouseText.textContent = `Mouse: ${event.offsetX}, ${event.offsetY}`;
});
