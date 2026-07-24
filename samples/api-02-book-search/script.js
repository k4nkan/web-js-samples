const input = document.querySelector("#keyword");
const button = document.querySelector("#search");
const result = document.querySelector("#result");

const searchBooks = async () => {
  result.textContent = "Searching...";

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(input.value)}&limit=5&fields=title,author_name,first_publish_year`;
  const data = await fetch(url).then((response) => response.json());

  result.innerHTML = data.docs
    .map((book) => `<div class="list-item"><strong>${book.title}</strong><p>${book.author_name?.[0] || "Unknown"} / ${book.first_publish_year || "-"}</p></div>`)
    .join("");
};

button.addEventListener("click", searchBooks);
searchBooks();
