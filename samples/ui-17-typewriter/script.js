{
  const button = document.querySelector("#typewriterButton");
  const text = document.querySelector("#typewriterText");
  const message = "JavaScriptで文字を少しずつ表示します。";

  let timer = null;

  const showTypingText = () => {
    let index = 0;
    text.textContent = "";
    clearInterval(timer);

    timer = setInterval(() => {
      text.textContent += message[index];
      index += 1;

      if (index >= message.length) {
        clearInterval(timer);
      }
    }, 80);
  };

  button.addEventListener("click", showTypingText);
}
