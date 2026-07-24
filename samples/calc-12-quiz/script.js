{
  const choices = document.querySelectorAll(".quiz-choices button");
  const message = document.querySelector("#quizMessage");
  const explanation = document.querySelector("#quizExplanation");

  const answerQuiz = (event) => {
    const button = event.target;
    const isCorrect = button.dataset.correct === "true";

    choices.forEach((choice) => {
      choice.classList.remove("is-selected");
    });

    button.classList.add("is-selected");

    if (isCorrect) {
      message.textContent = "正解です";
      explanation.textContent =
        "textContentは、HTML要素の中に表示する文字を変更するときに使えます。";
    } else {
      message.textContent = "不正解です";
      explanation.textContent = "";
    }
  };

  choices.forEach((button) => {
    button.addEventListener("click", answerQuiz);
  });
}
