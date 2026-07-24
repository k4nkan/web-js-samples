{
  const base = document.querySelector("#base");
  const percent = document.querySelector("#percent");
  const button = document.querySelector("#calculate");
  const result = document.querySelector("#result");

  const calculatePercent = () => {
    const value = Number(base.value);
    const rate = Number(percent.value) / 100;
    const answer = value * rate;

    result.textContent = `${percent.value}% は ${answer.toLocaleString()} です`;
  };

  button.addEventListener("click", calculatePercent);
  calculatePercent();
}
