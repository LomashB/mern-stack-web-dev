// The Window Scroller:
// You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
    const scrollStep = window.scrollY / 200;

    function scrollAnimation() {
        window.scrollTo(0, window.scrollY - scrollStep);

        if (window.scrollY > 0) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    scrollAnimation();
}

let btn = document.querySelector(".smoothScroll")
btn.addEventListener("click",()=>{
    smoothScrollToTop();
})