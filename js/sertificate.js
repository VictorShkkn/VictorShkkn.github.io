let button = document.querySelector('.skills__point-js');
let sertificat = document.querySelector('.skills__sertificat-js');
let arrowSertificat = document.querySelector('.skills__arrow');

button.addEventListener("click", moveArrow);

function moveArrow() {
    sertificat.classList.toggle("skills__sertificat-js-active");
    arrowSertificat.classList.toggle("skills__arrow-acive");
}


