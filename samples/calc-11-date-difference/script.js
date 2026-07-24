{
  const targetDate = document.querySelector("#targetDate");
  const button = document.querySelector("#calculate");
  const result = document.querySelector("#result");
  const oneDay = 1000 * 60 * 60 * 24;

  const setDefaultDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    targetDate.valueAsDate = date;
  };

  const calculateDays = () => {
    const today = new Date();
    const target = new Date(targetDate.value);
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const days = Math.ceil((target - today) / oneDay);
    result.textContent = `あと${days}日`;
  };

  button.addEventListener("click", calculateDays);
  setDefaultDate();
  calculateDays();
}
