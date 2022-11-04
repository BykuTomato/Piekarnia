const hamburgerMenuBtnElement = document.getElementById("hamburger-icons");
const hamburgerMenuElement = document.getElementById("hamburger-menu");

const registerElement = document.getElementById("register-section");
const loginElement = document.getElementById("login-section");

function toggleMenu() {
  hamburgerMenuElement.classList.toggle("active");
}

hamburgerMenuBtnElement.addEventListener("click", toggleMenu);
