const loginEmailInputElement = document.querySelector("#login-section #user-email");
const loginPasswordInputElement = document.querySelector("#login-section #user-password");

const signupEmailInputElement = document.querySelector("#register-section #user-email");
const signupPasswordInputElement = document.querySelector("#register-section #user-confirmpassword");
const signupConfirmpasswordInputElement = document.querySelector("#register-section #user-name");
const signupNameInputElement = document.querySelector("#register-section #user-name");
const signupLastnameInputElement = document.querySelector("#register-section #user-lastname");

const loginButtonElement = document.getElementById("login-btn");
const signupButtonElement = document.getElementById("signup-btn")

const warningLoginMessageElement = document.getElementById("warning-login");
const warningSignupMessageElement = document.getElementById("warning-signup");

function flashLoginErrors(event) {
    if(loginEmailInputElement.value === "" || loginPasswordInputElement.value === "") {
        event.preventDefault();

        warningLoginMessageElement.style.display = "block";
        warningLoginMessageElement.innerText = "Wprowadź prawdiłowe dane";
    }
}

function flashSignupErrors(event) {
    if(signupEmailInputElement.value === "" || 
    signupNameInputElement.value === "" || 
    signupLastnameInputElement.value === "")
    {
        event.preventDefault();

        warningSignupMessageElement.style.display = "block";
        warningSignupMessageElement.innerText = "Wprowadź prawidłowe dane";
    }
}

loginButtonElement.addEventListener("click", flashLoginErrors);
signupButtonElement.addEventListener("click", flashSignupErrors);