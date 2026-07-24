{
  const area = document.querySelector("#cursorArea");
  const dot = document.querySelector("#cursorDot");

  area.addEventListener("mousemove", (event) => {
    const rect = area.getBoundingClientRect();

    dot.style.left = `${event.clientX - rect.left}px`;
    dot.style.top = `${event.clientY - rect.top}px`;
    dot.style.opacity = 1;
  });

  area.addEventListener("mouseleave", () => {
    dot.style.opacity = 0;
  });
}
