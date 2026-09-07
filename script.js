// ===============================
// VjBabu.in JavaScript
// ===============================


// Typing Effect
let typingText; = document.getElementById("typing");

let text = "Frontend Web Developer";
let index = 0;

function typingEffect() {

    if(index < text.length){

        typingText.innerHTML += text.charAt(index);
        index++;

        setTimeout(typingEffect,100);

    }

}

window.addEventListener("load", ()=>{

    typingText = document.getElementById("typing");

    if(typingText){
        typingEffect();
    }

});



// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        let target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Back To Top Button

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", ()=>{

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    }

});



if(topBtn){

    topBtn.addEventListener("click", ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}




// Scroll Reveal Animation

const cards = document.querySelectorAll(
".skill-card, .service-card, .project-card, .about-card"
);


window.addEventListener("scroll", ()=>{


cards.forEach(card=>{


let position = card.getBoundingClientRect().top;

let screenHeight = window.innerHeight;


if(position < screenHeight - 100){

    card.classList.add("show");

}


});


});




// Contact Form Message

const form = document.querySelector("form");


if(form){

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting Vijay Babu! 🚀");

    form.reset();

});

}




// Console Message

console.log(
"Welcome to VjBabu.in 🚀 Designed & Developed by Vijay Babu"
);
// Mobile Navbar Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

}
// Skills Progress Animation

const progressBars = document.querySelectorAll(".progress-bar");


window.addEventListener("scroll", ()=>{

    progressBars.forEach(bar=>{

        let position = bar.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;


        if(position < screenHeight - 50){

            bar.classList.add("animate");

        }

    });

});
