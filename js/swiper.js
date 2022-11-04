
// swiper index
$(document).ready(function(){
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		autoplay: {
			delay: 1,
			disableOnInteraction: false
		},
		slidesPerView: '5',
		speed: 2700,
		grabCursor: true,
		mousewheelControl: true,
		keyboardControl: true,
	});
});

$(document).ready(function(){
	var swiper = new Swiper(".mySwiper1", {
		spaceBetween: 100,
		loop: true,
		speed: 2000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
},
	});
});