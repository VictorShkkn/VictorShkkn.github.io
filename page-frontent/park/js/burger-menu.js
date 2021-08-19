let elementsList = document.querySelectorAll(".top-nav__link");

function toggleBurgerMenu() {
	document.querySelector('.top-nav').classList.toggle('active');
	document.querySelector('.top-nav').classList.add('top-nav-animation');
	document.querySelector('.top-nav__burger').classList.toggle('active');
	document.querySelector('.header').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock-scrolling');
	for (let i = 0; i < elementsList.length; i++) {
		elementsList[i].classList.toggle('active');
	}
}

function removeBurgerMenu() {
	document.querySelector('.top-nav').classList.remove('active');
	document.querySelector('.top-nav__burger').classList.remove('active');
	document.querySelector('.header').classList.remove('active');
	document.querySelector('body').classList.remove('lock-scrolling');
	for (let i = 0; i < elementsList.length; i++) {
		elementsList[i].classList.remove('active');
	}
}

document.querySelector(".top-nav__burger").addEventListener("click", workMobileMenu); 

function workMobileMenu() {
	window.addEventListener("resize", defaultSettings);
	toggleBurgerMenu();
	
	for (let i = 0; i < elementsList.length; i++) {	
		elementsList[i].onclick = function () {
			removeBurgerMenu();
		}	
	}
}

function defaultSettings() {
	let widthScreen = window.innerWidth;
	if (widthScreen >= 768) {
		removeBurgerMenu();
		window.removeEventListener("resize", defaultSettings);
		document.querySelector('.top-nav').classList.remove('top-nav-animation');
	}
}