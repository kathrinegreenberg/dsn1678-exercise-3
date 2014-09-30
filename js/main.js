var salesA = $('.sales1');
var salesB = $('.sales2');
 
var salesDetailsA = $('.sales__details1');
var salesDetailsB = $('.sales__details2');

var salesClickA = function () {
	
	var isActive = salesDetailsA.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsA.attr('data-state', 'inactive');
	} else {
		salesDetailsA.attr('data-state', 'active');
	}
};

var salesClickB = function () {
	
	var isActive = salesDetailsB.attr('data-state');
	
	if (isActive == 'active') {
		salesDetailsB.attr('data-state', 'inactive');
	} else {
		salesDetailsB.attr('data-state', 'active');
	}
};

salesA.on('click', salesClickA);
salesB.on('click', salesClickB);
