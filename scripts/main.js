import { countup } from "./animations.js";
import { toggleVisibility, observer } from './app.js'

// Variables
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const lendersElement = document.querySelector('.js-lenders-count');

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


const hiddenElements = document.querySelectorAll('.hidden-elm')
hiddenElements.forEach((el) => observer.observe(el));

toggleVisibility(".js-about-menu", "about-menu")
toggleVisibility(".js-site-menu", "site-menu")

// Count Up Function
if (lendersElement) {
    countup(lendersElement, 100); // Pass the DOM element
}

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    // Only trigger the animation when scrolling down
    if (window.scrollY > lastScrollTop) {
        requestAnimationFrame(() => {
            // Your scroll-based animation logic here
            document.body.classList.add('scrolling');
        });
    }
    lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY;
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Scroll to the top (0,0) when the page loads
});


// Pop-up Function 
const openPopup = document.getElementById('open-popup');
const closePopUp = document.getElementById('close-popup')
const popup = document.getElementById('popup');
const bodyoverflow = document.getElementById('body-overflow');

openPopup.addEventListener('click', () => {
    popup.classList.remove('hidden');
    bodyoverflow.classList.add('overflow-y-hidden');
});

closePopUp.addEventListener('click', () => {
    popup.classList.add('hidden');
    bodyoverflow.classList.remove('overflow-y-hidden');
});



