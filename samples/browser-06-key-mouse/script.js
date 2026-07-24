{
  const detectArea = document.querySelector("#detectArea");
  const keyText = document.querySelector("#keyText");

  detectArea.addEventListener("keydown", (event) => {
    keyText.textContent = `Key: ${event.key}`;
  });
}
