const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

const calculateBmi = () => {
  const meter = Number(height.value) / 100;
  const bmi = Number(weight.value) / (meter * meter);

  result.textContent = `BMI ${bmi.toFixed(1)}`;
};

button.addEventListener("click", calculateBmi);
calculateBmi();
