const button = document.querySelector("#getLocation");
const result = document.querySelector("#result");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  if (!navigator.geolocation) {
    message.textContent = "このブラウザでは使えません";
    return;
  }

  message.textContent = "取得中です";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude.toFixed(4);
      const longitude = position.coords.longitude.toFixed(4);
      result.textContent = `${latitude}, ${longitude}`;
      message.textContent = "";
    },
    () => {
      message.textContent = "位置情報を取得できませんでした";
    },
  );
});
