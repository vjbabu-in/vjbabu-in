/* =========================
TYPING EFFECT
========================= */

const typing = document.getElementById("typing");

const words = [
"Frontend Developer",
"UI / UX Designer",
"Web Designer",
"JavaScript Developer",
"Founder of VjBabu.in"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

let current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}

else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex = (wordIndex + 1) % words.length;

}

}

setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();



/* =========================
BACK TO TOP
========================= */

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

};

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// Welcome Message
window.onload = function () {
    console.log("Welcome to Vijay Learning Hub 🚀");
};


// Smooth Scroll
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if(this.hash !== "") {
            e.preventDefault();

            let section = document.querySelector(this.hash);
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Explore Courses Button
function exploreCourses() {
    window.location.href = "courses.html";
}


// Loading Animation
setTimeout(() => {
    document.body.style.opacity = "1";
}, 500);
