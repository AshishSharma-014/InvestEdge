document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showLogin = document.getElementById("showLogin");
    const showRegister = document.getElementById("showRegister");
    const switchToRegister = document.getElementById("switchToRegister");
    const switchToLogin = document.getElementById("switchToLogin");

    // Show Login Form
    showLogin.addEventListener("click", function () {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    // Show Register Form
    showRegister.addEventListener("click", function () {
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Switch to Register
    switchToRegister.addEventListener("click", function (e) {
        e.preventDefault();
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    // Switch to Login
    switchToLogin.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });
});
