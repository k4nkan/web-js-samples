const speechText = document.querySelector("#speechText");
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
const message = document.querySelector("#message");

speakButton.addEventListener("click", () => {
  if (!window.speechSynthesis) {
    message.textContent = "このブラウザでは使えません";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(speechText.value);
  utterance.lang = "ja-JP";
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
  message.textContent = "読み上げ中です";
});

stopButton.addEventListener("click", () => {
  speechSynthesis.cancel();
  message.textContent = "停止しました";
});
