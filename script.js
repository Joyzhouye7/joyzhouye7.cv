/* ==========================================================
   Joy Zhou Ye Portfolio
   Modern Portfolio Script
========================================================== */

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );

    });

}

window.addEventListener("scroll", updateActiveNav);



/* ==========================================
   FADE UP ANIMATION
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(`
.hero-card,
.about-highlight,
.about-right,
.stat-card,
.timeline-item,
.skill-card,
.education-card,
.contact-card
`).forEach(el => {

    el.classList.add("fade-up");
    observer.observe(el);

});



/* ==========================================
   COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 70));

        function animate() {

            current += increment;

            if (current >= target) {

                counter.textContent = target + "+";

            } else {

                counter.textContent = current;

                requestAnimationFrame(animate);

            }

        }

        animate();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: .4
});

counters.forEach(counter => counterObserver.observe(counter));



/* ==========================================
   HERO TYPING
========================================== */

const heroSubtitle = document.querySelector(".hero h2");

const text = heroSubtitle.textContent;

heroSubtitle.textContent = "";

let i = 0;

function type() {

    if (i < text.length) {

        heroSubtitle.textContent += text.charAt(i);

        i++;

        setTimeout(type, 35);

    }

}

window.addEventListener("load", () => {

    setTimeout(type, 500);

});



/* ==========================================
   NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(246,245,242,.95)";
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "rgba(246,245,242,.82)";
        navbar.style.boxShadow = "none";

    }

});



/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});



/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress = document.createElement("div");

progress.style.cssText = `
position:fixed;
top:0;
left:0;
height:3px;
width:0;
background:#e0b321;
z-index:9999;
`;

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const height = document.documentElement.scrollHeight - window.innerHeight;

    const percent = window.scrollY / height * 100;

    progress.style.width = percent + "%";

});



/* ==========================================
   SUBTLE PARALLAX
========================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    hero.style.transform = `translateY(${window.scrollY * 0.08}px)`;

});



/* ==========================================
   FOOTER YEAR
========================================== */

const footer = document.querySelector(".footer p:last-child");

footer.innerHTML = `© ${new Date().getFullYear()} Joy Zhou Ye. All rights reserved.`;
