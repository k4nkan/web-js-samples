{
  const input = document.querySelector("#keyword");
  const items = document.querySelectorAll(".list-item");

  input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase();

    items.forEach((item) => {
      item.hidden = !item.dataset.name.includes(keyword);
    });
  });
}
