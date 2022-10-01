const showRegisterFormButtonElement = document.getElementById("show-register");
const showLoginFormButtonElement = document.getElementById("show-login");

const registerFormElement = document.getElementById("register-section");
const loginFormElement = document.getElementById("login-section");

function showRegisterForm() {
        registerFormElement.classList.toggle("is-invisible");

        if(!loginFormElement.classList.contains("is-invisible")) {
            loginFormElement.classList.toggle("is-invisible");
        }
}

function showLoginForm() {
        loginFormElement.classList.toggle("is-invisible");

        if(!registerFormElement.classList.contains("is-invisible")) {
            registerFormElement.classList.toggle("is-invisible");
        }
}



showRegisterFormButtonElement.addEventListener("click", showRegisterForm);
showLoginFormButtonElement.addEventListener("click", showLoginForm);