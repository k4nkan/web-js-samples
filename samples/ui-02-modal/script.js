{
  const modal = document.querySelector("#modal");
  const openButton = document.querySelector("#openModal");
  const closeButton = document.querySelector("#closeModal");

  openButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });
}
