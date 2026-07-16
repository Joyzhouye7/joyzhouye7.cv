/* ==========================================================
   Joy Zhou Ye Portfolio
   script.js
========================================================== */


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});



/* ==========================================
   FADE UP ANIMATION
========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.18
});


document.querySelectorAll(
`
.timeline-item,
.stat-card,
.education-card,
.skill-group,
.about-left,
.about-right,
.contact,
.section-header
`
).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});



/* ==========================================
   COUNTERS
========================================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)return;

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const increment=Math.ceil(target/60);

function update(){

current+=increment;

if(current>=target){

counter.innerHTML=target+"+";

}else{

counter.innerHTML=current;

requestAnimationFrame(update);

}

}

update();

counterObserver.unobserve(counter);

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});



/* ==========================================
   HERO TYPING
========================================== */

const heroTitle=document.querySelector(".hero h2");

const originalText=heroTitle.textContent;

heroTitle.textContent="";

let index=0;

function typing(){

if(index<originalText.length){

heroTitle.textContent+=originalText.charAt(index);

index++;

setTimeout(typing,40);

}

}

window.addEventListener("load",()=>{

setTimeout(typing,500);

});



/* ==========================================
   NAVBAR EFFECT
========================================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(0,0,0,.97)";

navbar.style.borderBottom="1px solid rgba(255,209,0,.25)";

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.45)";

}else{

navbar.style.background="rgba(0,0,0,.93)";

navbar.style.borderBottom="1px solid #2A2A2A";

navbar.style.boxShadow="none";

}

});



/* ==========================================
   SMOOTH BUTTON SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({

top:target.offsetTop-80,

behavior:"smooth"

});

}

});

});



/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0";

progress.style.background="#FFD100";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});



/* ==========================================
   PARALLAX HERO
========================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.35+"px";

});



/* ==========================================
   GLOW FOLLOW MOUSE
========================================== */

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="350px";

glow.style.height="350px";

glow.style.borderRadius="50%";

glow.style.pointerEvents="none";

glow.style.background="radial-gradient(circle, rgba(255,209,0,.08), transparent 70%)";

glow.style.transform="translate(-50%,-50%)";

glow.style.zIndex="0";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



/* ==========================================
   CARD HOVER LIFT
========================================== */

document.querySelectorAll(

".timeline-content,.education-card,.stat-card,.skill-group"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});



/* ==========================================
   FOOTER YEAR
========================================== */

const footer=document.querySelector("footer p");

footer.innerHTML=`© ${new Date().getFullYear()} Joy Zhou Ye | Industrial & Technical Commercial Professional`;



/* ==========================================
   HERO FADE
========================================== */

window.addEventListener("load",()=>{

const heroContent=document.querySelector(".hero-content");

heroContent.style.opacity="0";

heroContent.style.transform="translateY(40px)";

setTimeout(()=>{

heroContent.style.transition="all 1.2s ease";

heroContent.style.opacity="1";

heroContent.style.transform="translateY(0)";

},100);

});
