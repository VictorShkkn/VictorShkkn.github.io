let titleMedium = document.querySelector(".title");
let titleSecond = document.querySelectorAll(".title-second");
let text = document.querySelectorAll (".text");
let bodyTitle = document.querySelector(".body");
let topNavLine = document.querySelector(".top-nav__link-contacts");
let textFooter = document.querySelectorAll(".footer__text");
let navColor = document.querySelector(".nav");
let topNav = document.querySelectorAll(".top-nav__element");


if (bodyTitle.classList.contains("body_dark-theme")) {

    titleMedium.classList.add("title_dark-theme");
    topNavLine.classList.add("top-nav__link-contacts_dark-theme");
    navColor.classList.add("nav__container-main_color-dark");

    for (let i of titleSecond) {
        i.classList.add("title-second_dark-theme");
    }

    for (let i of text) {
        i.classList.add("text_dark-theme");
    }

    for (let i of textFooter) {
        i.classList.add("text_dark-theme-white");
    }

    for (let i of topNav) {
        i.classList.add("top-nav__element-back");
    }

}