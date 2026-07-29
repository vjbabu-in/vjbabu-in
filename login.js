setTimeout(function(){
    document.getElementById("login").style.display="block";
},4000);
setTimeout(() => {
    const login = document.getElementById("login");
    login.style.display = "block";

    setTimeout(() => {
        login.classList.add("show");
    }, 100);
}, 4000);

function login(){
    window.location.href="dashboard.html";
}
function loginUser() {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username === "vijay" && password === "1234"){
      alert("✅ Login Successful");
      window.location.href = "dashboard.html";
  } else {
      alert("❌ Invalid Username or Password");
  }

  return false;
}
function togglePassword() {
    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

window.onload = function () {
    let savedUser = localStorage.getItem("username");

    if (savedUser) {
        document.getElementById("username").value = savedUser;
        document.getElementById("remember").checked = true;
    }
};

function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "vijay" && password === "1234") {

        if (document.getElementById("remember").checked) {
            localStorage.setItem("username", username);
        } else {
            localStorage.removeItem("username");
        }

        alert("✅ Login Successful");
        window.location.href = "dashboard.html";

    } else {
        alert("❌ Invalid Username or Password");
    }

    return false;
}
