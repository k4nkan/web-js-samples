{
  const button = document.querySelector("#randomTextButton");
  const result = document.querySelector("#randomTextResult");
  const message = "JavaScript Sample";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let timer = null;

  const showRandomText = () => {
    let frame = 0;
    clearInterval(timer);

    timer = setInterval(() => {
      result.textContent = [...message]
        .map((letter, index) => {
          if (letter === " ") return " ";
          if (index < frame - 8) return letter;

          const randomIndex = Math.floor(Math.random() * letters.length);
          return letters[randomIndex];
        })
        .join("");

      frame += 1;

      if (frame > message.length + 8) {
        result.textContent = message;
        clearInterval(timer);
      }
    }, 50);
  };

  button.addEventListener("click", showRandomText);
  showRandomText();
}
