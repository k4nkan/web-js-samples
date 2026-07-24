const input = document.querySelector("#word");
const button = document.querySelector("#search");
const result = document.querySelector("#result");

const searchWord = async () => {
  result.textContent = "Searching...";

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(input.value)}`;
  const data = await fetch(url).then((response) => response.json());
  const item = data[0];
  const meaning = item.meanings[0];

  result.innerHTML = `<div class="card"><h3>${item.word}</h3><p>${item.phonetic || ""}</p><p>${meaning.partOfSpeech}: ${meaning.definitions[0].definition}</p></div>`;
};

button.addEventListener("click", searchWord);
searchWord();
