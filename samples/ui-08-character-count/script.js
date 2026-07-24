const message = document.querySelector("#message");
const count = document.querySelector("#count");

message.addEventListener("input", () => {
  count.textContent = message.value.length;
});
