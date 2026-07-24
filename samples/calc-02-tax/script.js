const price = document.querySelector("#price");
const rate = document.querySelector("#rate");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

const calculateTax = () => {
  const basePrice = Number(price.value);
  const taxRate = Number(rate.value) / 100;
  const total = Math.floor(basePrice * (1 + taxRate));

  result.textContent = `税込 ${total.toLocaleString()} 円`;
};

button.addEventListener("click", calculateTax);
calculateTax();
