{
  const copyTarget = document.querySelector("#copyTarget");
  const copyButton = document.querySelector("#copyButton");
  const message = document.querySelector("#message");

  copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(copyTarget.textContent);
    message.textContent = "コピーしました";
  });
}
