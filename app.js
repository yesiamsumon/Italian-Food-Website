const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close");
const navbar = document.querySelector("nav ul");

open_menu.addEventListener("click", () => {
  navbar.classList.add("active");
});
close_menu.addEventListener("click", () => {
  navbar.classList.remove("active");
});
