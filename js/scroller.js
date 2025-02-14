const scrollers = document.querySelectorAll('.scroller');

function addAnimation() {
    scrollers.forEach((scrollers => {
        scrollers.setAttribute("data-animated", true);

        const scrollerInner = scrollers.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })

    }));
}

addAnimation();