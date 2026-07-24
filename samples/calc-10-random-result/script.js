const button = document.querySelector("#pick");
const result = document.querySelector("#result");
const items = ["Aプラン", "Bプラン", "Cプラン", "おすすめなし"];

const pickItem = () => {
  const index = Math.floor(Math.random() * items.length);
  result.textContent = items[index];
};

button.addEventListener("click", pickItem);
pickItem();
