const input = document.querySelector("#scores");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

const calculateAverage = () => {
  const scores = input.value.split(",").map((score) => Number(score.trim()));
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / scores.length;

  result.textContent = `平均 ${average.toFixed(1)} 点`;
};

button.addEventListener("click", calculateAverage);
calculateAverage();
