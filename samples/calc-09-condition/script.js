{
  const score = document.querySelector("#score");
  const button = document.querySelector("#check");
  const result = document.querySelector("#result");

  const checkScore = () => {
    const value = Number(score.value);

    if (value >= 80) {
      result.textContent = "よくできています";
    } else if (value >= 60) {
      result.textContent = "合格です";
    } else {
      result.textContent = "もう少しです";
    }
  };

  button.addEventListener("click", checkScore);
  checkScore();
}
