$(document).ready(function () {
	
	$('.slider-small').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.slider',
		focusOnSelect: true,
		speed: 500,
		swipe: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 6,
				}
			}
		]
	});
	
	$('.slider').slick({
		
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		asNavFor: '.slider-small',
		infinite: true,
		arrows: true,
		swipe: true,
		speed: 0,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
					dots: true,
					speed: 500
				}
			},


			{
				breakpoint: 600,
				settings: {
					arrows: false,
					dots: true
					
				}
			}

		],
		
		initialSlide: 3
		
	});	

});

	let gallery = document.querySelectorAll(".gallery__link");
	for (let i = 0; i < gallery.length; i++ ) {
		gallery[i].onclick = function () {
			
			$('.slider-small').slick('slickGoTo', i, true);
			//$('.slider').slick('slickGoTo', i, true);
			
			showSlickSlider();
			document.querySelector(".close-slider-btn").addEventListener("click", hideSlickSlider);
			//setTimeout(t2, 0)
			startScroll();
		}
	}

	document.querySelector(".slider__closing-container").addEventListener("click", hideSlickSlider);

	function showSlickSlider() {
		document.querySelector(".fixed-overlay").style.visibility = "visible";
	}

	function hideSlickSlider() {
		document.querySelector(".fixed-overlay").style.visibility = "hidden";
		stopScroll();
	}

	$('.slider').on('setPosition', function(slick) {
		document.querySelector(".close-slider-btn").addEventListener("click", hideSlickSlider);
	 });

	 
	 window.onload = function() {
		let track = document.querySelector(".slider");
		let next = document.querySelector(".slick-next");
	 }
	 
	 function stopScroll() {
		$('.slider').slick('slickSetOption',"speed", 0);
	 }

	 function startScroll() {
		$('.slider').slick('slickSetOption',"speed", 500);
	 }


	
	
		
		
	 
	