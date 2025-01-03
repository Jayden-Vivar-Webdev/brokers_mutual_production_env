import { countup } from "./animations.js";
import { toggleVisibility, observer } from './app.js'
import { loanInfo } from "./loan-info.js";


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
const openPopup = document.querySelectorAll('.js-open-popup');
const popup = document.getElementById('popup');
const bodyoverflow = document.getElementById('body-overflow');


openPopup.forEach(element => {
    element.addEventListener('click', event => {
        let dataName = event.currentTarget.dataset.name;
        
        if (loanInfo[dataName]) {

            const {title, description } = loanInfo[dataName];
            const popupElm = document.getElementById('popup')
            popupElm.innerHTML =
            `
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-full max-h-full" style="overflow: overlay">

            <div class="space-y-5 p-5 relative max-h-96">
                <div class="absolute align-top-right cursor-pointer text-xl font-bold" id="close-popup">X</div>
                <h1 class="text-black text-2xl">${title}</h1>
                <p class="text-black">
                ${description}
                </p>
                
            </div>
            `
            popup.classList.remove('hidden');
            bodyoverflow.classList.add('overflow-hidden');

            const closePopUp = document.getElementById('close-popup');
            closePopUp.addEventListener('click', () => {
            popup.classList.add('hidden');
            
            bodyoverflow.classList.remove('overflow-hidden');
            });
        };
    })
});


// main.js
function nextStep(currentStepId, nextStepId) {
    document.getElementById(currentStepId).classList.add('hidden');
    document.getElementById(nextStepId).classList.remove('hidden');
}
// Attach to window to make it globally available
window.nextStep = nextStep;
