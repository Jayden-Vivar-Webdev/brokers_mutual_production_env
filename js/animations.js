/**
 * Multiplies two numbers.
 * @param {divElement} element - The first number.
 * @param {maxNum} limit - The second number.
 */
export function countup(element, limit) {
    let i = 1;
    const interval = setInterval(() => {
        if (i > limit) {
            clearInterval(interval); // Stop when count exceeds 40
        } else {
            element.innerHTML = `${i}+ Lenders`; // Update the DOM
            i++;
        }
    }, 80); // Adjust time interval as needed (100ms here)
}


