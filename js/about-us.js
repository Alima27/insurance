// modal
$(document).ready(function(){
	$('.modal').on('shown.bs.modal', function (e) {
		window.location.href = '#' + $(this).attr('data-m');
	});

	$('.modal').on('hidden.bs.modal', function (e) {
		history.pushState('', document.title, window.location.pathname);
	});

	$(window).bind('hashchange', function() {
		if(window.location.hash == ''){
			$('.modal').modal('hide');
		}
	});
	})

// 1
$(document).ready(function(){
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
		type:'bar',
		data:{
			labels:["2019", "2020", "2021"],
			datasets:[{
				label:"Собственный капитал:",
				backgroundColor:'#e9cb76',
				data:[181.08, 174.95, 181.90]
			}]
		},
		options:{
				plugins:{
					legend:{
						labels:{
							font:{
								weight:600,
								size:18
							}
						}
					}
				}
			}
	})
});

// 2
$(document).ready(function(){
	var ctx = document.getElementById('myChart2').getContext('2d');
	var chart = new Chart(ctx, {
		type:'bar',
		data:{
			labels:["2019", "2020", "2021"],
			datasets:[{
				label:"Уставный капитал:",
				backgroundColor:'#0B3C32',
				borderWidth: 1,
				data:[150.50,150.50,150.50]
			}]
		},
		options:{
				plugins:{
					legend:{
						labels:{
							font:{
								weight:600,
								size:18
							}
						}
					}
				}
			}
	})
});

// 3
$(document).ready(function(){
	var ctx = document.getElementById('myChart3').getContext('2d');
	var chart = new Chart(ctx, {
		type:'bar',
		data:{
			labels:["2019", "2020", "2021"],
			datasets:[{
				label:"Страховые резервы:",
				backgroundColor:'#e9cb76',
				data:[31.89,43.86,44.14]
			}]
		},
		options:{
				plugins:{
					legend:{
						labels:{
							font:{
								weight:600,
								size:18
							}
						}
					}
				}
			}
	})
});

// 4
$(document).ready(function(){
	var ctx = document.getElementById('myChart4').getContext('2d');
	var chart = new Chart(ctx, {
		type:'bar',
		data:{
			labels:["2019", "2020", "2021"],
			datasets:[{
				label:"Активы:",
				backgroundColor:'#0B3C32',
				data:[276.83,231.59,234.12]
			}]
		},
		options:{
				plugins:{
					legend:{
						labels:{
							font:{
								weight:600,
								size:18
							}
						}
					}
				}
			}
	})
});
// 5
$(document).ready(function(){
	var ctx = document.getElementById('myChart5').getContext('2d');
	var chart = new Chart(ctx, {
		type:'bar',
		data:{
			labels:["2019", "2020", "2021"],
			datasets:[{
				label:"Поступления страховых платежей:",
				backgroundColor:'#e9cb76',
				data:[96.16,99.51,112.81]
			}]
		},
		options:{
				plugins:{
					legend:{
						labels:{
							font:{
								weight:600,
								size:18
							}
						}
					}
				}
			}
	})
});

// 6
$(document).ready(function(){
	var ctx = document.getElementById('myChart6').getContext('2d');
	var chart = new Chart(ctx, {
		type:'bar',
		data:{
			labels:["2019", "2020", "2021"],
			datasets:[{
				label:"Выплаты:",
				backgroundColor:'#0B3C32',
				data:[19.92,11.01,26.74]
			}]
			},
			options:{
				plugins:{
					legend:{
						labels:{
							font:{
								weight:600,
								size:18
							}
						}
					}
				}
			}
	})
});
