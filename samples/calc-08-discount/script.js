const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const button = document.querySelector("#calculate");
const result = document.querySelector("#result");

const calculateDiscount = () => {
  const total = Number(price.value) * (1 - Number(discount.value) / 100);
  result.textContent = `${Math.floor(total).toLocaleString()} 円`;
};

button.addEventListener("click", calculateDiscount);
calculateDiscount();
