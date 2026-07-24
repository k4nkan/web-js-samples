{
  const input = document.querySelector("#qrText");
  const button = document.querySelector("#make");
  const image = document.querySelector("#qrImage");

  function makeQrCode() {
    const text = encodeURIComponent(input.value);
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${text}`;
  }

  button.addEventListener("click", makeQrCode);
  makeQrCode();
}
