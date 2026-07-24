{
  const total = document.querySelector("#total");
  const people = document.querySelector("#people");
  const round = document.querySelector("#round");
  const button = document.querySelector("#calculate");
  const result = document.querySelector("#result");

  const splitBill = () => {
    const amount = Number(total.value);
    const count = Number(people.value);
    const unit = Number(round.value);

    if (count <= 0) {
      result.textContent = "人数を入力してください";
      return;
    }

    const each = Math.ceil(amount / count / unit) * unit;
    result.textContent = `1人 ${each.toLocaleString()} 円`;
  };

  button.addEventListener("click", splitBill);
  splitBill();
}
