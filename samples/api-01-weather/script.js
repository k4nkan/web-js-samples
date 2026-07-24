const city = document.querySelector("#city");
const button = document.querySelector("#load");
const result = document.querySelector("#result");

const loadWeather = async () => {
  const [latitude, longitude, name] = city.value.split(",");
  result.textContent = "Loading...";

  const params = new URLSearchParams({
    latitude,
    longitude,
    current: "temperature_2m,wind_speed_10m",
  });
  const url = `https://api.open-meteo.com/v1/forecast?${params}`;
  const data = await fetch(url).then((response) => response.json());
  const current = data.current;

  result.innerHTML = `
    <div class="card">
      <h3>${name}</h3>
      <p>${current.temperature_2m}°C</p>
      <p>Wind: ${current.wind_speed_10m} km/h</p>
    </div>
  `;
};

button.addEventListener("click", loadWeather);
loadWeather();
