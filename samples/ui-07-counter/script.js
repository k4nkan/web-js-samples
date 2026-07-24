{
  const count = document.querySelector("#count");
  const plus = document.querySelector("#plus");
  const minus = document.querySelector("#minus");
  let value = 0;

  const render = () => {
    count.textContent = value;
  };

  plus.addEventListener("click", () => {
    value += 1;
    render();
  });

  minus.addEventListener("click", () => {
    value -= 1;
    render();
  });
}
