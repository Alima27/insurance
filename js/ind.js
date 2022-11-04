$(document).ready(function(){
	var cities = {
		bat: ["Баткенский", "Кадамжайский","Лейлекский"],
		dja: ["Аксыйский", "Ала-Букинский","Базар-Коргонский", "Ноокенский", "Сузакский", "Тогуз-Тороуский", "Токтогульский", "Чаткальский"],
		ik: ["Ак-Суйский", "Джети-Огузский", "Иссык-Кульский", "Тонский", "Тюпский"],
		nar: ["Ак-Талинский", "Ат-Башинский", "Жумгальский", "Кочкорский", "Нарынский"],
		osh: ["Алайский", "Араванский", "Кара-Кулджинский", "Кара-Суйский", "Ноокатский", "Узгенский", "Чон-Алайский"],
		tls: ["Бакай-Атинский", "Кара-Бууринский","Манасский район", "Таласский"],
		chu: ["Аламединский", "Жайыльский", "Кеминский", "Московский", "Панфиловский", "Сокулукский", "Чуйский", "Ысык-Атинский"] 
	};
	var country = document.getElementById("country");
	var city = document.querySelector("#city");
	window.onload = selectCountry;
	country.onchange = selectCountry;
	
	function selectCountry(ev){
		city.innerHTML = "";
		var c = this.value || "obl", o;
		for(let i = 0; i < cities[c].length; i++){
			o = new Option(cities[c][i],i,false,false);
			city.add(o);
		};
	}
});

$(document).ready(function(){
	var cities = {
		bat: ["Баткенский", "Кадамжайский","Лейлекский"],
		dja: ["Аксыйский", "Ала-Букинский","Базар-Коргонский", "Ноокенский", "Сузакский", "Тогуз-Тороуский", "Токтогульский", "Чаткальский"],
		ik: ["Ак-Суйский", "Джети-Огузский", "Иссык-Кульский", "Тонский", "Тюпский"],
		nar: ["Ак-Талинский", "Ат-Башинский", "Жумгальский", "Кочкорский", "Нарынский"],
		osh: ["Алайский", "Араванский", "Кара-Кулджинский", "Кара-Суйский", "Ноокатский", "Узгенский", "Чон-Алайский"],
		tls: ["Бакай-Атинский", "Кара-Бууринский","Манасский район", "Таласский"],
		chu: ["Аламединский", "Жайыльский", "Кеминский", "Московский", "Панфиловский", "Сокулукский", "Чуйский", "Ысык-Атинский"] 
	};
	var country = document.getElementById("country1");
	var city = document.querySelector("#city1");
	window.onload = selectCountry1;
	country.onchange = selectCountry1;
	
	function selectCountry1(ev){
		city.innerHTML = "";
		var c = this.value || "obl", o;
		for(let i = 0; i < cities[c]?.length; i++){
			o = new Option(cities[c][i],i,false,false);
			city.add(o);
		};
	}
});


$(document).ready(function(){
	var cities = {
		bat: ["Баткенский", "Кадамжайский","Лейлекский"],
		dja: ["Аксыйский", "Ала-Букинский","Базар-Коргонский", "Ноокенский", "Сузакский", "Тогуз-Тороуский", "Токтогульский", "Чаткальский"],
		ik: ["Ак-Суйский", "Джети-Огузский", "Иссык-Кульский", "Тонский", "Тюпский"],
		nar: ["Ак-Талинский", "Ат-Башинский", "Жумгальский", "Кочкорский", "Нарынский"],
		osh: ["Алайский", "Араванский", "Кара-Кулджинский", "Кара-Суйский", "Ноокатский", "Узгенский", "Чон-Алайский"],
		tls: ["Бакай-Атинский", "Кара-Бууринский","Манасский район", "Таласский"],
		chu: ["Аламединский", "Жайыльский", "Кеминский", "Московский", "Панфиловский", "Сокулукский", "Чуйский", "Ысык-Атинский"] 
	};
	var country = document.getElementById("country3");
	var city = document.querySelector("#city3");
	window.onload = selectCountry3;
	country.onchange = selectCountry3;
	
	function selectCountry3(ev){
		city.innerHTML = "";
		var c = this.value || "obl", o;
		for(let i = 0; i < cities[c]?.length; i++){
			o = new Option(cities[c][i],i,false,false);
			city.add(o);
		};
	}
});

$(document).ready(function(){
	var cities = {
		bat: ["Баткенский", "Кадамжайский","Лейлекский"],
		dja: ["Аксыйский", "Ала-Букинский","Базар-Коргонский", "Ноокенский", "Сузакский", "Тогуз-Тороуский", "Токтогульский", "Чаткальский"],
		ik: ["Ак-Суйский", "Джети-Огузский", "Иссык-Кульский", "Тонский", "Тюпский"],
		nar: ["Ак-Талинский", "Ат-Башинский", "Жумгальский", "Кочкорский", "Нарынский"],
		osh: ["Алайский", "Араванский", "Кара-Кулджинский", "Кара-Суйский", "Ноокатский", "Узгенский", "Чон-Алайский"],
		tls: ["Бакай-Атинский", "Кара-Бууринский","Манасский район", "Таласский"],
		chu: ["Аламединский", "Жайыльский", "Кеминский", "Московский", "Панфиловский", "Сокулукский", "Чуйский", "Ысык-Атинский"] 
	};
	var country = document.getElementById("country4");
	var city = document.querySelector("#city4");
	window.onload = selectCountry4;
	country.onchange = selectCountry4;
	
	function selectCountry4(ev){
		city.innerHTML = "";
		var c = this.value || "obl", o;
		for(let i = 0; i < cities[c]?.length; i++){
			o = new Option(cities[c][i],i,false,false);
			city.add(o);
		};
	}


});

$(document).ready(function(){
	var cities = {
		bat: ["Баткенский", "Кадамжайский","Лейлекский"],
		dja: ["Аксыйский", "Ала-Букинский","Базар-Коргонский", "Ноокенский", "Сузакский", "Тогуз-Тороуский", "Токтогульский", "Чаткальский"],
		ik: ["Ак-Суйский", "Джети-Огузский", "Иссык-Кульский", "Тонский", "Тюпский"],
		nar: ["Ак-Талинский", "Ат-Башинский", "Жумгальский", "Кочкорский", "Нарынский"],
		osh: ["Алайский", "Араванский", "Кара-Кулджинский", "Кара-Суйский", "Ноокатский", "Узгенский", "Чон-Алайский"],
		tls: ["Бакай-Атинский", "Кара-Бууринский","Манасский район", "Таласский"],
		chu: ["Аламединский", "Жайыльский", "Кеминский", "Московский", "Панфиловский", "Сокулукский", "Чуйский", "Ысык-Атинский"] 
	};
	var country = document.getElementById("country6");
	var city = document.querySelector("#city6");
	window.onload = selectCountry6;
	country.onchange = selectCountry6;
	
	function selectCountry(ev){
		city.innerHTML = "";
		var c = this.value || "obl", o;
		for(let i = 0; i < cities[c]?.length; i++){
			o = new Option(cities[c][i],i,false,false);
			city.add(o);
		};
	}

	var cities = {
		bat: ["Баткенский", "Кадамжайский","Лейлекский"],
		dja: ["Аксыйский", "Ала-Букинский","Базар-Коргонский", "Ноокенский", "Сузакский", "Тогуз-Тороуский", "Токтогульский", "Чаткальский"],
		ik: ["Ак-Суйский", "Джети-Огузский", "Иссык-Кульский", "Тонский", "Тюпский"],
		nar: ["Ак-Талинский", "Ат-Башинский", "Жумгальский", "Кочкорский", "Нарынский"],
		osh: ["Алайский", "Араванский", "Кара-Кулджинский", "Кара-Суйский", "Ноокатский", "Узгенский", "Чон-Алайский"],
		tls: ["Бакай-Атинский", "Кара-Бууринский","Манасский район", "Таласский"],
		chu: ["Аламединский", "Жайыльский", "Кеминский", "Московский", "Панфиловский", "Сокулукский", "Чуйский", "Ысык-Атинский"] 
	};
	var country = document.getElementById("country5");
	var city = document.querySelector("#city5");
	window.onload = selectCountry5;
	country.onchange = selectCountry5;
	
	function selectCountry5(ev){
		city.innerHTML = "";
		var c = this.value || "obl", o;
		for(let i = 0; i < cities[c]?.length; i++){
			o = new Option(cities[c][i],i,false,false);
			city.add(o);
		};
	}
});


function checkAll() {
				var inputs = document.querySelectorAll('.pr-ch'); 
				for (var i = 0; i < inputs.length; i++) { 
						inputs[i].checked = true; 
				} 
}

function checkAll1() {
	var inputs = document.querySelectorAll('.list1'); 
	for (var i = 0; i < inputs.length; i++) { 
			inputs[i].checked = true; 
	} 
}

function checkAll2() {
	var inputs = document.querySelectorAll('.list2'); 
	for (var i = 0; i < inputs.length; i++) { 
			inputs[i].checked = true; 
	} 
}

function checkAll3() {
	var inputs = document.querySelectorAll('.list3'); 
	for (var i = 0; i < inputs.length; i++) { 
			inputs[i].checked = true; 
	} 
}

function checkAll4() {
	var inputs = document.querySelectorAll('.list4'); 
	for (var i = 0; i < inputs.length; i++) { 
			inputs[i].checked = true; 
	} 
}

// маска для input tel
$(document).ready(function() {
	$(".phone").mask("(+999) 99-99-99");
});

$(document).ready(function() {
	$('#myTab2 a').on('click', function (event) {
		event.preventDefault()
		$(this).tab('show')
	})
});


$(document).ready(function(){
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	})
});

// checkbox

$(document).ready(function() {
	$('input.ShowOrHide').click(function() {
			$("div.ShowOrHide").toggle();
	});

	$('input.ShowOrHide1').click(function() {
		$("div.ShowOrHide1").toggle();
});
});

// зарегистрировано

document.getElementById('citizenship').onchange = function() {
  document.getElementById('additional').hidden = this.value !== 'oth';
}

// дни
$(document).ready(function(){
	var result;
	var res;
const dateStart = document.querySelector(".date-start");
const dateEnd = document.querySelector(".date-end");
const totalPrice = document.querySelector(".total-price");

dateStart.addEventListener("input", () => calculerPrix());
dateEnd.addEventListener("input", () => calculerPrix());
const calculerPrix = () => {
  if (dateEnd.value === "" || dateStart.value === "") return;
  totalPrice.innerText = `${getNumberOfDays(dateStart.value, dateEnd.value)} days`;
}

const getNumberOfDays = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);  
    return get(diffInDays);
}
function get(dif){
	console.log(dif);
  if(dif < 60){
		console.log('1', 0.25 * 5000);
    return 0.25 * 5000
  }
  if(dif > 60 && dif < 90) {
    return dif * 0.4 * 5000
  }
  if(dif > 90 && dif < 120) {
    return dif * 0.5 * 5000
  }
  if(dif > 120 && dif < 150) {
    return dif * 0.6 * 5000
  }
  if(dif > 150 && dif < 180) {
    return dif * 0.7 * 5000
  }
    if(dif > 210 && dif < 240) {
    return dif * 0.75 * 5000
  }
  if(dif > 240 && dif < 270) {
    return dif * 0.8 * 5000
  }
  if(dif > 270 && dif < 300) {
    return dif * 0.85 * 5000
  }
  if(dif > 300 && dif < 330) {
    return dif * 0.9 * 5000
  }
  if(dif > 330 && dif < 360) {
    return dif * 0.95 * 5000
  }
  if(dif > 360) {
    return dif * 0.85 * 5000
  }
}

$('#date1').bind('blur', function() {
	const d = new Date();
	const val = new Date($(this).val());
	const year = val.getFullYear()
	console.log(year)
	const inputVal = $(this).val().split('-')[0];
	console.log(inputVal);
	const now = d.getFullYear();
	let difference = now - inputVal;
	if (difference < 0) {
		difference *= -1;
	}
	result = difference < 25 ? res * 1.25 : res* 1.5;

	console.log(result);
	
	const dsagoResult = $('#dsago-result'); 
	// console.log(dsagoResult)
	// const num1 = getNumberOfDays(dateStart.value, dateEnd.value);
	// const num2 = result;
	// const num3 = res;
	dsagoResult.val(result)

});

const input = document.getElementById('dsago013');
input.addEventListener('blur', function() {
	const val = +input.value
	res = val < 2000 ? getNumberOfDays(dateStart.value, dateEnd.value)  * 1.2 : getNumberOfDays(dateStart.value, dateEnd.value) 
		
	console.log(res);  
})

// $('#dsago-result').bind('blur', function() {
// 	const dsagoResult = this; 
// 	console.log()
// 	const num1 = getNumberOfDays(dateStart.value, dateEnd.value);
// 	const num2 = result;
// 	const num3 = res;
// 	dsagoResult.innerText = num1 * num2 * num3
// }); 
});
// date1
$(document).ready(function(){
	// дсаго
		// тип авто
		const coefficients = {
			'auto1-1': 1.0,
			'auto1-2': 1.20,
			'auto1-3': 1.45,
			'auto2-1': 1.0,
			'auto2-2': 1.20,
			'auto3-1': 1.60,
			'auto3-2': 2.0,
			'auto4-1': 1.45,
			'auto4-2': 1.65,
			'auto5': 0.8,
			'auto6': 0.45,
			'auto7': 0.45,
			'auto8': 0.45,
			'auto9': 0.45,
			'auto10': 0.45,
			'auto11': 0.45,
			'auto12': 0.45,
		};
		
		//гражданство 
		const citizenship ={
			'kg': 1.0,
			'oth': 2.20,
		};
		
		// количество дней
		var total
		const dateStart = document.querySelector(".date-start");
		const dateEnd = document.querySelector(".date-end");
		const totalPrice = document.querySelector(".total-price");
		
		dateStart.addEventListener("input", () => calculerPrix());
		dateEnd.addEventListener("input", () => calculerPrix());
		const calculerPrix = () => {
			if (dateEnd.value === "" || dateStart.value === "") return;
			totalPrice.innerText = `${getNumberOfDays(dateStart.value, dateEnd.value)} days`;
		}
		
		const getNumberOfDays = (start, end) => {
				const date1 = new Date(start);
				const date2 = new Date(end);
				const oneDay = 1000 * 60 * 60 * 24;
				const diffInTime = date2.getTime() - date1.getTime();
				const diffInDays = Math.round(diffInTime / oneDay);  
				return get(diffInDays);
		}
		function get(dif){
			if(dif > 5 && dif < 15) {
				return 0.2
			}
			if(dif > 16 && dif < 31) {
				return 0.3
			}
			if(dif > 90) {
				return 0.5
			}
			if(dif > 180) {
				return 0.7
			}
			if(dif > 270) {
				return 0.9
			}
			if(dif > 365) {
				return 1
			}
		}
		
		const selectCarType = document.querySelector('#carType');
		const selectCountry = document.querySelector('#citizenship');
		const checkDiagnostics = document.querySelector('#checkDiagnostics');
		const checkNoAmount = document.querySelector('#checkNoAmount');
		const result = document.querySelector('#result');
		
		const update = () => {
			const sType = coefficients[selectCarType.value];
			const cType = citizenship[selectCountry.value];
			const cDiag = checkDiagnostics.checked ? 0.8 : 1;
			const cAmount = checkNoAmount.checked ? 1 : 1.6;
			const cDays = getNumberOfDays(dateStart.value, dateEnd.value);
			console.log('cDays', cDays);
			
			const total = 1680 * sType * cType * cDiag * cAmount * cDays;
			result.innerText = `Итоговая цена: ${total.toFixed(5)} руб`;
		}
		
		update(); // initial
		
		selectCarType.addEventListener('change', update);
		selectCountry.addEventListener('change', update);
		checkDiagnostics.addEventListener('change', update);
		checkNoAmount.addEventListener('change', update);
		dateStart.addEventListener('change', update);
		dateEnd.addEventListener('change', update);

		// марки и модели авто
		var marksAuto = {
			m1: ["CL", "INTEGRA", "MDX", "RDX", "TL", "TLX"],
			m2: ["145", "146", "147", "155", "156", "159"],
			m3: ["100", "80", "90", "A1", "A2", "A4"],
			m4: ["116", "118", "120", "123", "125", "130"],
			m5: ["ESPERO", "GENTRA", "LANOS", "MATIZ", "NEXIA", "NUBIRA", "TICO"],
			m6: ["190", "200", "300", "A 150", "A 170", "A-KLASSE"],
			m7: ["3000", "ASX", "CANTER (категория B)", "CARISMA", "COLT", "ECLIPSE"]
		};
		var country = document.getElementById("marksAuto");
		var city = document.querySelector("#modelAuto");
		window.onload = selectmarksAuto1;
		country.onchange = selectmarksAuto1;
		
		function selectmarksAuto1(ev){
			city.innerHTML = "";
			var c = this.value || "m0", o;
			for(let i = 0; i < marksAuto[c]?.length; i++){
				o = new Option(marksAuto[c][i],i,false,false);
				city.add(o);
			};
		} 
});