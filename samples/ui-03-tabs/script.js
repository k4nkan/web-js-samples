const buttons = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll(".tab-panel");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    panels.forEach((panel) => {
      panel.hidden = panel.id !== button.dataset.tab;
    });
  });
});
