let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let navLink = document.querySelectorAll(".nav__link");

function openCloseBurger() {
    document.querySelector(".header-conainer").classList.toggle("active");
    document.querySelector(".header__logo").classList.toggle("active");
    document.querySelector(".body").classList.toggle("active");
    nav.classList.toggle("active");
    burger.classList.toggle("active");

    if (nav.classList.contains("active")) {
        burger.innerHTML = '<img src="img/close.svg" alt="">';
    }

    else  {
        burger.innerHTML = '<img src="img/burger.svg" alt="">';
    }
}

burger.onclick = openCloseBurger;

window.addEventListener("resize", widthScreen);

for (i of navLink) {
    i.addEventListener("click", openCloseBurger);
}

widthScreen();
function widthScreen() {
    if (window.innerWidth <= 992) {
        for (i of navLink) {
            i.addEventListener("click", openCloseBurger);
        }
        
    }
    else {
        for (i of navLink) {
            i.removeEventListener("click", openCloseBurger);
        }
    }
}