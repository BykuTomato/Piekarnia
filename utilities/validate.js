function userCredentialsAreValid(email, password, name, lastname) {
    return email.trim().length > 4 && email.includes("@") && password.trim().length > 4 && name.trim() !== "" && lastname.trim() !== "";
}