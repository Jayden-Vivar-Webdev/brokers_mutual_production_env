const lendersElement = document.querySelector('.js-lenders-count'); // Fix the selector

function countup(element) {
    let i = 1;
    const interval = setInterval(() => {
        if (i > 40) {
            clearInterval(interval); // Stop when count exceeds 40
        } else {
            element.innerHTML = `${i}+ Lenders`; // Update the DOM
            i++;
        }
    }, 100); // Adjust time interval as needed (100ms here)
}

if (lendersElement) {
    countup(lendersElement); // Pass the DOM element
}
