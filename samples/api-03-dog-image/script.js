const button = document.querySelector("#load");
const result = document.querySelector("#result");

const loadImage = async () => {
  result.textContent = "Loading...";

  const data = await fetch("https://dog.ceo/api/breeds/image/random").then((response) => response.json());

  result.innerHTML = `<img class="hero-image" src="${data.message}" alt="Random dog">`;
};

button.addEventListener("click", loadImage);
loadImage();
