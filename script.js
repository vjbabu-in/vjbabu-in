// ===============================
// VjBabu.in JavaScript
// ===============================


// Typing Effect
window.addEventListener("DOMContentLoaded", () => {

    const typingText = document.getElementById("typing");

    if(typingText){

        const text = "Frontend Web Developer";
        let index = 0;

        typingText.innerHTML = "";

        function typingEffect(){

            if(index < text.length){

                typingText.innerHTML += text.charAt(index);
                index++;

                setTimeout(typingEffect,100);

            }

        }

        typingEffect();

    }

});




// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

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


window.addEventListener("scroll",()=>{

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    }

});


if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}




// Scroll Animation

const cards = document.querySelectorAll(
".skill-card, .service-card, .project-card, .about-card"
);


function revealCards(){

    cards.forEach(card=>{

        let top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.classList.add("show");

        }

    });

}


window.addEventListener("scroll",revealCards);
window.addEventListener("load",revealCards);





// Contact Form

const form = document.querySelector("form");


if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you for contacting Vijay Babu 🚀");

        form.reset();

    });

}





// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}





// Skills Progress Animation

const progressBars = document.querySelectorAll(".progress-bar");


function progressAnimation(){

    progressBars.forEach(bar=>{

        let top = bar.getBoundingClientRect().top;


        if(top < window.innerHeight - 50){

            bar.classList.add("animate");

        }

    });

}


window.addEventListener("scroll",progressAnimation);
window.addEventListener("load",progressAnimation);





console.log(
"Welcome to VjBabu.in 🚀 Designed & Developed by Vijay Babu"
);
