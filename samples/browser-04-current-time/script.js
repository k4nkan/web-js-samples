{
  const button = document.querySelector("#update");
  const time = document.querySelector("#time");

  const updateTime = () => {
    const now = new Date();
    time.textContent = now.toLocaleString("ja-JP");
  };

  button.addEventListener("click", updateTime);
  updateTime();
}
