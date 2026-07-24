{
  const button = document.querySelector("#changeGradient");
  const box = document.querySelector("#gradientBox");
  let index = 1;

  button.addEventListener("click", () => {
    index += 1;
    if (index > 3) index = 1;

    box.className = `gradient-box gradient-${index}`;
  });
}
