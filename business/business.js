// ===============================
// BUSINESS PAGE
// VjBabu Technologies
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// Navbar Shadow
const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.boxShadow="0 10px 30px rgba(0,245,255,.15)";

}else{

navbar.style.boxShadow="none";

}

});

// Scroll Reveal
const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".card, section h2, section p").forEach(el=>{
revealObserver.observe(el);
});

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"flex":"none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

// Button Style
topBtn.style.cssText=`
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00f5ff;
color:#050816;
font-size:20px;
cursor:pointer;
display:none;
align-items:center;
justify-content:center;
box-shadow:0 0 20px rgba(0,245,255,.4);
z-index:999;
`;

console.log("Business Demo Loaded Successfully 🚀");
