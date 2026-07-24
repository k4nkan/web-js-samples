{
  const input = document.querySelector("#userName");
  const button = document.querySelector("#load");
  const result = document.querySelector("#result");

  async function loadUser() {
    result.textContent = "Loading...";

    const url = `https://api.github.com/users/${input.value}`;
    const user = await fetch(url).then((response) => response.json());

    result.innerHTML = `
    <div class="card user-card">
      <img src="${user.avatar_url}" alt="">
      <div>
        <h3>${user.login}</h3>
        <p>followers: ${user.followers}</p>
      </div>
    </div>
  `;
  }

  button.addEventListener("click", loadUser);
  loadUser();
}
