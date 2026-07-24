const button = document.querySelector("#showToast");
const toast = document.querySelector("#toast");

button.addEventListener("click", () => {
  toast.classList.add("is-show");

  setTimeout(() => {
    toast.classList.remove("is-show");
  }, 1600);
});
