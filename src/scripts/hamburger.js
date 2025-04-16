const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".page__navbar-items");

function toggleHamburger() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleHamburger);
navMenu.addEventListener("click", toggleHamburger);
