//Toggle Visibility Fields
export function toggleVisibility(toggleClass, toggleId, toggleVisible = "hidden") {
    const aboutMenu = document.querySelector(toggleClass)
    const aboutMobile = document.getElementById(toggleId)

    aboutMenu.addEventListener("click", () => {
        aboutMobile.classList.toggle(toggleVisible);
    });
}

//Appearing elements function 
export const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});




