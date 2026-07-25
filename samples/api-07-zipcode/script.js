{
  const zipcode = document.querySelector("#zipcode");
  const button = document.querySelector("#search");
  const result = document.querySelector("#result");

  async function searchAddress() {
    result.textContent = "Loading...";

    const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode.value}`;
    const data = await fetch(url).then((response) => response.json());
    const address = data.results && data.results[0];

    if (!address) {
      result.innerHTML = `<div class="card">見つかりませんでした。</div>`;
      return;
    }

    result.innerHTML = `
      <div class="card">
        <h3>${address.address1}${address.address2}</h3>
        <p>${address.address3}</p>
      </div>
    `;
  }

  button.addEventListener("click", searchAddress);
  searchAddress();
}
