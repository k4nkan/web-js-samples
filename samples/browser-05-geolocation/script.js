const button = document.querySelector("#getLocation");
const result = document.querySelector("#result");
const message = document.querySelector("#message");

const getErrorMessage = (error) => {
  if (error.code === error.PERMISSION_DENIED) {
    return "位置情報が許可されていません。ブラウザやOSの位置情報設定を確認してください。";
  }

  if (error.code === error.POSITION_UNAVAILABLE) {
    return "現在地を取得できませんでした。Wi-FiやGPSの状態を確認してください。";
  }

  if (error.code === error.TIMEOUT) {
    return "取得に時間がかかりすぎました。もう一度試してください。";
  }

  return "位置情報を取得できませんでした。";
};

button.addEventListener("click", () => {
  if (!navigator.geolocation) {
    message.textContent = "このブラウザでは使えません";
    return;
  }

  if (!window.isSecureContext) {
    message.textContent = "HTTPSまたはlocalhostで開くと位置情報を使えます。";
    return;
  }

  button.disabled = true;
  result.textContent = "";
  message.textContent = "取得中です";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude.toFixed(4);
      const longitude = position.coords.longitude.toFixed(4);
      result.textContent = `${latitude}, ${longitude}`;
      message.textContent = "";
      button.disabled = false;
    },
    (error) => {
      message.textContent = getErrorMessage(error);
      button.disabled = false;
    },
    {
      enableHighAccuracy: false,
      maximumAge: 0,
      timeout: 10000,
    },
  );
});
