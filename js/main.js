import { countup } from "./animations.js";
import { toggleVisibility, observer } from './app.js';

// Variables
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const lendersElement = document.querySelector('.js-lenders-count');
const hiddenElements = document.querySelectorAll('.hidden-elm');
const openPopup = document.querySelectorAll('.js-open-popup');
const popup = document.getElementById('popup');
const bodyoverflow = document.getElementById('body-overflow');



const menu = (menuBtn, mobileMenu) => {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
    })
};


async function loadData(dataName){
    const response = await fetch('../js/content.json');
    const contentData = await response.json();
    return contentData[String(dataName)];;
}

function popUp(openPopup){
    openPopup.forEach(element => {
        element.addEventListener('click', async(event) => {
            let dataName = event.currentTarget.dataset.name;
            const contentData = await loadData(dataName);
            
            try {
                if (contentData) {
                    const {title, description } = contentData;
                    const popupElm = document.getElementById('popup')
                    popupElm.innerHTML =
                    `
                    <div class="bg-white p-5 rounded-lg shadow-lg max-w-[60rem] max-h-[50rem] min-h-[5rem] overflow-y-auto">
        
                        <div class="space-y-5 p-5 relative items-center">
                            <div class="absolute align-top-right cursor-pointer text-xl font-bold" id="close-popup">X</div>
                            <h1 class="text-black text-2xl">${title}</h1>
                            <p class="text-black">
                            ${description}
                            </p>
                            
                        </div>
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
            } catch (error) {
                console.log(error)
            }
            
        })
    });
}


function nextStep(currentStepId, nextStepId) {
  const form = document.getElementById(currentStepId);
  if (form.checkValidity()) {
    document.getElementById(currentStepId).classList.add('hidden');
    document.getElementById(nextStepId).classList.remove('hidden');
    
  } else {
    form.reportValidity();
  }
}

function backStep(currentStepId, previousStepId) {
    document.getElementById(currentStepId).classList.add('hidden');
    document.getElementById(previousStepId).classList.remove('hidden');
}

function calculateLoanAmount() {
    const vehiclePrice = parseFloat(document.getElementById('js-price').value) || 0;
    const deposit = parseFloat(document.getElementById('js-deposit').value) || 0;
    const totalLoan = vehiclePrice - deposit;
    document.getElementById('js-total-loan').textContent = totalLoan >= 0 ? `$${totalLoan.toFixed(2)}` : `$${0}`;

}


//Functions
menu(menuBtn, mobileMenu);
toggleVisibility(".js-about-menu", "about-menu");
toggleVisibility(".js-site-menu", "site-menu");
popUp(openPopup);

if (lendersElement) {
    countup(lendersElement, 100);
};

hiddenElements.forEach((el) => observer.observe(el));
window.nextStep = nextStep;
window.backStep = backStep;
document.getElementById('js-price').addEventListener('input', calculateLoanAmount)
document.getElementById('js-deposit').addEventListener('input', calculateLoanAmount)


