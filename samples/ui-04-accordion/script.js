const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const body = button.nextElementSibling;
    body.classList.toggle("is-open");
  });
});
