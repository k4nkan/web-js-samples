{
  const a = document.querySelector("#a");
  const b = document.querySelector("#b");
  const operator = document.querySelector("#operator");
  const button = document.querySelector("#calculate");
  const result = document.querySelector("#result");

  const calculate = () => {
    const x = Number(a.value);
    const y = Number(b.value);
    const op = operator.value;

    if (op === "+") result.textContent = x + y;
    if (op === "-") result.textContent = x - y;
    if (op === "*") result.textContent = x * y;
    if (op === "/") result.textContent = y === 0 ? "0では割れません" : x / y;
  };

  button.addEventListener("click", calculate);
  calculate();
}
