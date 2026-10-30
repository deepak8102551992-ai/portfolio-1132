const themeButton = document.getElementById("themeToggle");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    themeButton.textContent = dark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  });
}

const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const projectSearchEmpty = document.getElementById("projectSearchEmpty");

if (projectSearch) {
  projectSearch.addEventListener("input", () => {
    const query = projectSearch.value.trim().toLowerCase();
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const matches = !query || card.textContent.toLowerCase().includes(query) || (card.dataset.technologies || "").toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    projectSearchEmpty.hidden = visibleCount > 0;
  });
}
