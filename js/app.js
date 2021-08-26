var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 400,
    speedAsDuration: true,
    easing: 'easeInQuad'
});

var open = document.getElementById("open-btn");
var close = document.getElementById("close-btn");

open.addEventListener('click', () => {
    document.getElementById("mobile-menu").classList.add("open-navbar");
});

close.addEventListener('click', () => {
    document.getElementById("mobile-menu").classList.remove("open-navbar");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}