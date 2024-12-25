document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".navbar-links");

  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", !isExpanded);
    navbarLinks.classList.toggle("active");
  });
});
