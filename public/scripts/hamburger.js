const hamburgerMenuBtnElement = document.getElementById("hamburger-icons");
const hamburgerMenuElement = document.getElementById("hamburger-menu");

function toggleMenu() {
    hamburgerMenuElement.classList.toggle("active");
}

hamburgerMenuBtnElement.addEventListener("click", toggleMenu);