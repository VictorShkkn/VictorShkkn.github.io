let formGuide = document.querySelector(".form-guide");
let formGuideContainer = document.querySelector(".container-form-guide");
let formGuideButton = document.querySelector(".guide__button");
let GuideButtonClose = document.querySelector(".form-guide__close");
let GuideСontainerClose = document.querySelector(".form-guide-close");
let GuideButtonSubmit = document.querySelector(".form-guide__button");

formGuideButton.onclick = function () {
	formGuideContainer.classList.add("container-form-guide-active");
	GuideСontainerClose.classList.add("form-guide-close-active");
}

function hideContainer() {
	formGuideContainer.classList.remove("container-form-guide-active");
	GuideСontainerClose.classList.remove("form-guide-close-active");
}

GuideButtonClose.onclick = function () {
	hideContainer();
}

GuideСontainerClose.onclick = function () {
	hideContainer();
}


//validatoin form

let email = document.querySelector(".form-guide__email");
let phone = document.querySelector(".form-guide__phone");
let guideName = document.querySelector(".form-guide__name");

let errorEmail = document.querySelector(".form-guide__error-email");
let errorGuideName = document.querySelector(".form-guide__error-name");
let errorPhone = document.querySelector(".form-guide__error-phone");

//Phone mask settings
let formPhone = document.querySelector('.form-guide__phone');
let maskOptions = {
	mask: '+1 ( 000 ) 00-00-00',
	lazy: false
};
let mask = IMask(formPhone, maskOptions);
//Phone mask settings

//submit - проверка каждого поля по изменению - input и перед отправкой формы - submit
formGuide.addEventListener("submit", checkValidForm);
email.addEventListener("input", checkEmail);
guideName.addEventListener("input", checkName);
phone.addEventListener("input", checkPhone);

function checkValidForm(event) {
	checkEmail(event);
	checkName(event);
	checkPhone(event);
}

function checkEmail(event) {

	if (email.validity.valid) {
		// В случае появления сообщения об ошибке, если поле
		// является корректным, мы удаляем сообщение об ошибке.
		errorEmail.innerHTML = ""; // Сбросить содержимое сообщения
		email.classList.remove("error-input");
		console.log(event);
		event.preventDefault();

	}
	else {
		errorEmail.innerHTML = "enter correct email";
		email.classList.add("error-input");
		event.preventDefault();
	}

}

function checkName(event) {

	if ((/\s/).test(guideName.value) && !(/\S/).test(guideName.value) || guideName.value.length == 0) { //имя состоит не из пустой строки имеет символ и не равно дефолту импут
		errorGuideName.innerHTML = "enter your name";
		guideName.classList.add("error-input");
		event.preventDefault();
	}

	else {
		errorGuideName.innerHTML = "";
		guideName.classList.remove("error-input");
		event.preventDefault();
	}

}

function checkPhone(event) {

	if (mask.unmaskedValue.length < 9) {
		errorPhone.innerHTML = "enter your phone";
		phone.classList.add("error-input");
		event.preventDefault();
	}

	else {
		errorPhone.innerHTML = "";
		phone.classList.remove("error-input");
		event.preventDefault();
	}

}


/*

formGuide.addEventListener("input", function (event) {
	// Каждый раз, когда пользователь вводит что-либо, мы проверяем,
	// является ли корректным поле электронной почты.
	console.log(event);
	if (email.validity.valid) {
		console.log(1);
		// В случае появления сообщения об ошибке, если поле
		// является корректным, мы удаляем сообщение об ошибке.
		error.innerHTML = ""; // Сбросить содержимое сообщения
		email.classList.remove("error-input");
		event.preventDefault();
	}
	else {
		error.innerHTML = "enter correct email";
		email.classList.add("error-input");
		event.preventDefault();
	}
}, false);
*/





/*
let element = document.getElementById('selector');
let cleave = new Cleave(element, {
	prefix: '+7',
	delimiter: '-',
	blocks: [2, 3, 3],
	uppercase: true

});
*/




