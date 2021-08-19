let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");

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