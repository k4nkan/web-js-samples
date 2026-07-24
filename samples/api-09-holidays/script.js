{
  const year = document.querySelector("#year");
  const button = document.querySelector("#load");
  const result = document.querySelector("#result");

  async function loadHolidays() {
    result.textContent = "Loading...";

    const url = "https://holidays-jp.github.io/api/v1/date.json";
    const holidays = await fetch(url).then((response) => response.json());

    result.innerHTML = Object.entries(holidays)
      .filter(([date]) => date.startsWith(year.value))
      .slice(0, 6)
      .map(
        ([date, name]) =>
          `<div class="list-item"><strong>${name}</strong><p>${date}</p></div>`,
      )
      .join("");
  }

  button.addEventListener("click", loadHolidays);
  loadHolidays();
}
