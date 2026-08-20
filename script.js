/* =====================================================
   MOBILE NAVIGATION
   ===================================================== */

// Get the menu button
const menuBtn = document.getElementById("menuBtn");

// Get the navigation links
const navLinks = document.getElementById("navLinks");


// When the menu button is clicked,
// add/remove the "active" class.
menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close the mobile menu when a navigation link is clicked.

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
   ===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   SCROLL REVEAL
   ===================================================== */

// Select elements that should animate
// when they enter the screen.

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .timeline-item, .education-card"
);


// IntersectionObserver watches whether
// an element has entered the visible part of the screen.

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                // Stop observing after animation happens.
                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Start observing every selected element.

revealElements.forEach((element) => {

    observer.observe(element);

});


/* =====================================================
   CURRENT YEAR
   ===================================================== */

// Find the copyright paragraph in the footer.

const footerText = document.querySelector(
    ".footer-container p:first-child"
);


// Automatically update the year.

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent = `© ${currentYear} Gauri Rawat`;

}