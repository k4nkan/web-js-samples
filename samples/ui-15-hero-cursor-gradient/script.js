{
  const hero = document.querySelector("#cursorGradientHero");
  const cursor = document.querySelector("#cursorGradientDot");

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hero.style.setProperty("--x", `${x}px`);
    hero.style.setProperty("--y", `${y}px`);
    cursor.style.opacity = 1;
  });

  hero.addEventListener("pointerleave", () => {
    cursor.style.opacity = 0;
  });
}
