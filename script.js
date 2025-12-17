function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
