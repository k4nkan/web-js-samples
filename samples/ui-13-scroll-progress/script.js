{
  const bar = document.querySelector("#progressBar");

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / max) * 100;

    bar.style.width = `${percent}%`;
  });
}
