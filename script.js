 
// =====================
// TYPING EFFECT
// =====================


const text = [
    "Frontend Web Developer",
    "UI/UX Designer",
    "Website Creator",
    "Founder of VjBabu.in"
];


let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");


function typeEffect(){


    if(charIndex < text[index].length){

        typing.innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){


    if(charIndex > 0){

        typing.innerHTML =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }


        setTimeout(typeEffect,300);

    }

}



typeEffect();






// =====================
// MOBILE MENU
// =====================


const menuBtn =
document.querySelector(".menu-btn");


const navLinks =
document.querySelector(".nav-links");



menuBtn.onclick = function(){


    navLinks.classList.toggle("active");


};






// CLOSE MENU AFTER CLICK


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.onclick = ()=>{

        navLinks.classList.remove("active");

    }


});








// =====================
// TOP BUTTON
// =====================


const topBtn =
document.getElementById("topBtn");



window.onscroll = function(){


    if(document.documentElement.scrollTop > 400){


        topBtn.style.display="block";


    }

    else{


        topBtn.style.display="none";


    }


};





topBtn.onclick=function(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};






// =====================
// CONTACT FORM
// =====================


const form =
document.querySelector("form");



if(form){


form.addEventListener("submit",
function(e){


    e.preventDefault();


    alert(
    "Thank you for contacting Vijay! I will reply soon."
    );


    form.reset();


});


}
