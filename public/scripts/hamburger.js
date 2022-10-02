const hamburgerMenuBtnElement = document.getElementById("hamburger-icons");
const hamburgerMenuElement = document.getElementById("hamburger-menu");

const registerElement = document.getElementById("register-section");
const loginElement = document.getElementById("login-section");

function toggleMenu() {
    hamburgerMenuElement.classList.toggle("active");
}

function adjustExtras() {
    if(!registerElement.classList.contains("is-invisible")) {
        registerElement.classList.toggle("is-invisible")
    }

    if(!loginElement.classList.contains("is-invisible")) {
        loginElement.classList.toggle("is-invisible")
    }
}

hamburgerMenuBtnElement.addEventListener("click", toggleMenu);
hamburgerMenuBtnElement.addEventListener("click", adjustExtras)