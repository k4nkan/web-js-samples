{
  const amount = document.querySelector("#amount");
  const base = document.querySelector("#base");
  const quote = document.querySelector("#quote");
  const button = document.querySelector("#convert");
  const result = document.querySelector("#result");

  const convert = async () => {
    result.textContent = "Loading...";

    if (base.value === quote.value) {
      result.innerHTML = `
      <div class="card">
        <h3>${amount.value} ${base.value} = ${amount.value} ${quote.value}</h3>
        <p>Rate: 1</p>
      </div>
    `;
      return;
    }

    const data = await fetch(
      `https://api.frankfurter.dev/v2/rate/${base.value}/${quote.value}`,
    ).then((response) => response.json());
    const total = Number(amount.value) * data.rate;

    result.innerHTML = `
    <div class="card">
      <h3>${amount.value} ${data.base} = ${total.toFixed(2)} ${data.quote}</h3>
      <p>Rate: ${data.rate}</p>
    </div>
  `;
  };

  button.addEventListener("click", convert);
  convert();
}
