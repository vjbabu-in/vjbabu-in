// ===============================
// VjBabu Technologies
// Premium JavaScript
// ===============================

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
menuBtn.addEventListener("click",()=>{
navLinks.classList.toggle("active");
});
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){
e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

navLinks.classList.remove("active");

}

});
});

// Navbar Blur
const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(5,8,22,.92)";
navbar.style.boxShadow="0 8px 30px rgba(0,245,255,.2)";

}else{

navbar.style.background="rgba(5,8,22,.75)";
navbar.style.boxShadow="none";

}

});

// Scroll Reveal
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(
".about-card,.info-box,.skill-card,.service-card,.project-card,.contact-info,form"
).forEach(el=>{
observer.observe(el);
});

// Progress Bars
const progressBars=document.querySelectorAll(".progress-bar");

const progressObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.width=
entry.target.classList.contains("html")?"95%":
entry.target.classList.contains("css")?"90%":
entry.target.classList.contains("js")?"80%":
entry.target.classList.contains("python")?"70%":
entry.target.classList.contains("cpp")?"75%":"80%";

}

});

});

progressBars.forEach(bar=>progressObserver.observe(bar));

// Counter Animation
const stats=document.querySelectorAll(".stat h2");

stats.forEach(stat=>{

const finalValue=parseInt(stat.innerText);

let count=0;

const timer=setInterval(()=>{

count++;

stat.innerText=count+"+";

if(count>=finalValue){

clearInterval(timer);

if(finalValue===100){
stat.innerText="100%";
}

if(finalValue===24){
stat.innerText="24/7";
}

}

},40);

});

// Back To Top
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Contact Form
const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you for contacting VjBabu Technologies!");

form.reset();

});

}

console.log("VjBabu Technologies Loaded Successfully 🚀");
// FAQ Accordion

document.querySelectorAll(".faq-question").forEach(question=>{

question.addEventListener("click",()=>{

const item=question.parentElement;

item.classList.toggle("active");

});

});
// ===============================
// Loading Screen
// ===============================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("hide");

},1200);

});
// ===============================
// Dark / Light Mode
// ===============================

const themeBtn=document.getElementById("themeToggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("light")){
icon.className="fa-solid fa-sun";
}else{
icon.className="fa-solid fa-moon";
}

});

}
// ===============================
// Scroll Progress Bar
// ===============================

const progressBar=document.getElementById("progressBar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});
// ===============================
// Mouse Glow Effect
// ===============================

const cursorGlow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

if(cursorGlow){

cursorGlow.style.left=e.clientX+"px";
cursorGlow.style.top=e.clientY+"px";

}

});
// ===============================
// Achievement Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;
const target=+counter.dataset.target;
let count=0;

const speed=Math.max(1,Math.ceil(target/50));

const update=()=>{

count+=speed;

if(count>=target){

counter.textContent=target;
if(target===100){
counter.textContent="100%";
}
if(target===24){
counter.textContent="24/7";
}

}else{

counter.textContent=count;
requestAnimationFrame(update);

}

};

update();
counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));
// ===============================
// Custom Cursor
// ===============================

const cursorDot=document.querySelector(".cursor-dot");
const cursorOutline=document.querySelector(".cursor-outline");

document.addEventListener("mousemove",(e)=>{

cursorDot.style.left=e.clientX+"px";
cursorDot.style.top=e.clientY+"px";

cursorOutline.style.left=e.clientX+"px";
cursorOutline.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursorOutline.style.width="55px";
cursorOutline.style.height="55px";

});

item.addEventListener("mouseleave",()=>{

cursorOutline.style.width="35px";
cursorOutline.style.height="35px";

});

});
// Newsletter

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thank you for subscribing!");

newsletter.reset();

});

}
