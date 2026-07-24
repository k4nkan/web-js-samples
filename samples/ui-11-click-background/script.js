const stage = document.querySelector("#colorStage");
const colors = ["#f8f9fa", "#d8f3dc", "#fde2e4", "#dbeafe"];
let colorIndex = 0;

stage.addEventListener("click", () => {
  colorIndex += 1;
  if (colorIndex >= colors.length) colorIndex = 0;

  stage.style.backgroundColor = colors[colorIndex];
});
