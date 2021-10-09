/* Mobile Menu Show when scren less than 900 */
function openNav() {
    document.getElementById('myNav').style.width = "100%";
};
function closeNav() {
    document.getElementById('myNav').style.width = "0";
}

// Go to top btn automatictly when cross hero section
topBtn = document.getElementById("scrollUp")

function scroll() {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
        topBtn.style.display = "block";
    }
    else { topBtn.style.display = "none"; }
}
// Go to top when click button
function topScroll() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onscroll = function () {
    navSticky();
    scroll();
}
/* Functional Sticky Navbar */
const navbar = document.querySelector("nav");
const services = document.querySelector("#about");
const sticky = services.offsetTop;


function navSticky() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}
