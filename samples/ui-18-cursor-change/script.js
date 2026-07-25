{
  const area = document.querySelector("#topPageDemo");
  const cursor = document.querySelector("#circleCursor");

  area.addEventListener("pointermove", (event) => {
    const rect = area.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    cursor.style.opacity = 1;
  });

  area.addEventListener("pointerleave", () => {
    cursor.style.opacity = 0;
  });
}
