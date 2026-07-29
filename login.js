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
