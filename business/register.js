// ===================================
// REGISTER PAGE
// VjBabu Technologies
// ===================================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.querySelector('input[type="text"]').value.trim();

const email = document.querySelector('input[type="email"]').value.trim();

const passwords = document.querySelectorAll('input[type="password"]');

const password = passwords[0].value;

const confirmPassword = passwords[1].value;

// Validation

if(name === "" || email === "" || password === "" || confirmPassword === ""){

alert("Please fill in all fields.");

return;

}

if(password.length < 6){

alert("Password must be at least 6 characters.");

return;

}

if(password !== confirmPassword){

alert("Passwords do not match.");

return;

}

// Save demo user

const user = {

name,

email,

password

};

localStorage.setItem("demoUser", JSON.stringify(user));

// Loading Button

const btn = document.querySelector(".register-btn");

btn.disabled = true;

btn.innerHTML = "Creating Account...";

setTimeout(()=>{

alert("🎉 Account Created Successfully!");

window.location.href = "login.html";

},1500);

});

console.log("Register Page Loaded Successfully 🚀");
