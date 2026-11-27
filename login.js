// ===================================
// LOGIN PAGE
// VjBabu Technologies
// ===================================

const form = document.getElementById("loginForm");
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const remember = document.querySelector('input[type="checkbox"]');

// Restore remembered email
window.addEventListener("DOMContentLoaded", () => {
    const savedEmail = localStorage.getItem("rememberEmail");

    if(savedEmail){
        email.value = savedEmail;
        remember.checked = true;
    }
});

// Login Form
form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(email.value.trim()==="" || password.value.trim()===""){
        alert("Please fill in all fields.");
        return;
    }

    if(remember.checked){
        localStorage.setItem("rememberEmail", email.value);
    }else{
        localStorage.removeItem("rememberEmail");
    }

    const btn = document.querySelector(".login-btn");

    btn.disabled = true;
    btn.innerHTML = "Logging in...";

    setTimeout(() => {

        alert("✅ Login Successful!");

        window.location.href = "dashboard.html";

    },1500);

});

console.log("Login Page Loaded Successfully 🚀");
