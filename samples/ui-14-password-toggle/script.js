const password = document.querySelector("#password");
const button = document.querySelector("#togglePassword");

button.addEventListener("click", () => {
  const isHidden = password.type === "password";

  password.type = isHidden ? "text" : "password";
  button.textContent = isHidden ? "非表示" : "表示";
});
