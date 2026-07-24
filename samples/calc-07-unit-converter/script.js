const cm = document.querySelector("#cm");
const button = document.querySelector("#convert");
const result = document.querySelector("#result");

const convert = () => {
  const meter = Number(cm.value) / 100;
  result.textContent = `${meter} m`;
};

button.addEventListener("click", convert);
convert();
