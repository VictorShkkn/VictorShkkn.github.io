/*  jq

$(document).ready(function() {
	$('.top-nav__burger').click(function(event) {
		$('.top-nav__burger, .top-nav').toggleClass('active');
	});
});

*/ 


//js

document.querySelector('.top-nav__burger').onclick = function() {
	document.querySelector('.top-nav').classList.toggle('active');
	document.querySelector('.top-nav__burger').classList.toggle('active');
	document.querySelector('.header').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock-scrolling');
}

	function bsn(b)
	{
    if(b==1)
        document.getElementById("bsn").style.visibility="hidden"; 
    else
        document.getElementById("bsn").style.visibility="visible";
	}


	