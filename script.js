/* ==========================================================
   Joy Zhou Ye Portfolio Website
   script.js
========================================================== */

/* ---------- Smooth active navigation ---------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ---------- Fade In Animation ---------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


const animatedElements = document.querySelectorAll(
    ".experience-card, .education-card, .stat-card, .skill-tag, .about-text"
);

animatedElements.forEach(element => {

    element.classList.add("fade-up");

    observer.observe(element);

});


/* ---------- Counter Animation ---------- */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.ceil(target / 50);

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = current;

                requestAnimationFrame(updateCounter);

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ---------- Navbar Shadow ---------- */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";

        navbar.style.background = "rgba(255,255,255,0.98)";

    } else {

        navbar.style.boxShadow = "none";

        navbar.style.background = "rgba(255,255,255,0.95)";

    }

});


/* ---------- Typing Effect ---------- */

const subtitle = document.querySelector(".hero h2");

const text = "Bridging Manufacturing, Global Trade, and Sustainability";

subtitle.innerHTML = "";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        subtitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 40);

    }

}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 400);

});


/* ---------- Reveal Hero ---------- */

window.addEventListener("load", () => {

    document.querySelector(".hero-content").style.opacity = "0";
    document.querySelector(".hero-content").style.transform = "translateY(30px)";

    setTimeout(() => {

        document.querySelector(".hero-content").style.transition =
            "all 1s ease";

        document.querySelector(".hero-content").style.opacity = "1";

        document.querySelector(".hero-content").style.transform =
            "translateY(0px)";

    }, 100);

});


/* ---------- Current Year ---------- */

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Joy Zhou Ye. All Rights Reserved.`;
