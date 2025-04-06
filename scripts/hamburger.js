const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__items");

function toggleHamburger() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
