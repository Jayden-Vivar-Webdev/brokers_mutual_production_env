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


