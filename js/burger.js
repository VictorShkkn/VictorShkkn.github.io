let burgerIcon = document.querySelector('.top-nav__burger-icon')
let navContainer =  document.querySelector('.nav');
let body =  document.querySelector('.body');

burgerIcon.addEventListener("click", moveAdaptiveMenu);

function moveAdaptiveMenu () {
    navContainer.classList.toggle('nav-animation');
    burgerIcon.classList.toggle("top-nav__link-burger_active");

    if (burgerIcon.getAttribute("src") == "images/burger.svg") {
        burgerIcon.setAttribute("src", "images/clouse-menu.svg")
    }

    else { burgerIcon.setAttribute("src", "images/burger.svg") }

    body.classList.toggle('body-lock-scrolling');
}














 