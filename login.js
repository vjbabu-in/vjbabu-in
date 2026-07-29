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
