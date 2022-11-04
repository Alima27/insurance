// мобилка
	$('.navigation-mobile-collapse').on('click', function(e) {
		e.preventDefault();
		
		$(this).toggleClass('navigation-mobile-collapse_active');
		$('.navigation-menu').toggleClass('navigation-menu_show');
	});


	// index - список услуг

$(document).ready(function(){
	const showMenu = (toggleId, navbarId, bodyId)=>{
		const toggle = document.getElementById(toggleId),
		navbar = document.getElementById(navbarId),
		bodypadding = document.getElementById(bodyId)

		if(toggle && navbar){
			toggle.addEventListener('click', ()=>{
				navbar.classList.toggle('expander')

				bodypadding.classList.toggle('body-pd')
			})
		}
	}
	showMenu('nav-toggle','navbar','body-pd')

	/*===== LINK ACTIVE  =====*/ 
	const linkColor = document.querySelectorAll('.nav__link')
	function colorLink(){
		linkColor.forEach(l=> l.classList.remove('active'))
		this.classList.add('active')
	}
	linkColor.forEach(l=> l.addEventListener('click', colorLink))
});

// валидация
$(document).ready(function() {
	(function() {
		'use strict';
		window.addEventListener('load', function() {
			var forms = document.getElementsByClassName('needs-validation');
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener('submit', function(event) {
					if (form.checkValidity() === false) {
						event.preventDefault();
						event.stopPropagation();
					}
					form.classList.add('was-validated');
				}, false);
			});
		}, false);
	})();
});

// обновляемые табы
$(document).ready(function(){
	const nav = qs('tab');
	console.log(nav)
		if (nav && document.getElementById(nav)) {
			document.getElementById(nav).click()
		}
	
	function qs(key) {
		key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&');
		var match = location.search.match(new RegExp('[?&]'+key+'=([^&]+)(&|$)'));
		return match && decodeURIComponent(match[1].replace(/\+/g, ''));
	}
	
	$('#v-pills-tab .nav-link').on('click', function (e) {
		var url = window.location.href;       
		var urlSplit = url.split( '?' );       
		var obj = { title : '', url: urlSplit[0] + '?tab=' + this.getAttribute('id')};       
		history.pushState(obj, obj.title, obj.url);
		$('html, body').animate({scrollTop : 0});
	})
});

$(document).ready(function(){
	const nav = qs('tab');
	console.log(nav)
		if (nav && document.getElementById(nav)) {
			document.getElementById(nav).click()
		}
	
	function qs(key) {
		key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, '\\$&');
		var match = location.search.match(new RegExp('[?&]'+key+'=([^&]+)(&|$)'));
		return match && decodeURIComponent(match[1].replace(/\+/g, ''));
	}
	
	$('#myTab .nav-link').on('click', function (e) {
		var url = window.location.href;       
		var urlSplit = url.split( '?' );       
		var obj = { title : '', url: urlSplit[0] + '?tab=' + this.getAttribute('id')};       
		history.pushState(obj, obj.title, obj.url);
		$('html, body').animate({scrollTop : 0});
	})
});


$(document).ready(function(){
	$('#myTab a').on('click', function (event) {
		event.preventDefault()
		$(this).tab('show')
	})

	var url = window.location.href;
	if (url.indexOf('?tab=v-pills-3-tab') != -1) {
		$("#str").modal('show');
	}

	var url = window.location.href;
	if (url.indexOf('?tab=v-pills-3-tab') != -1) {
		$("#sto").modal('show');
	}
	
});


