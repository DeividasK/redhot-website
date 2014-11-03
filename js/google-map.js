function initialize() {

	/*
	====	DEALERS' MARKERS 	====
	*/

	var dealer1 = new google.maps.LatLng(45.507865, 9.116277);
	var dealer2 = new google.maps.LatLng(45.438969, 10.990815);
	var dealer3 = new google.maps.LatLng(44.410133, 9.018664);
	var dealer4 = new google.maps.LatLng(45.297969, 8.282580);
	var dealer5 = new google.maps.LatLng(45.065655, 11.809191);
	var dealer6 = new google.maps.LatLng(46.095986, 13.105578);
	var dealer7 = new google.maps.LatLng(43.921528, 11.215929);
	var dealer8 = new google.maps.LatLng(44.363025, 8.073839);
	var startingPosition = new google.maps.LatLng(44.656058, 10.171665);

	/*
	====	MAP PLACE ('ID') AND ITS SETTINGS 	====
	*/

	var mapCanvas = document.getElementById('map_canvas');

	var mapOptions = {
		center: startingPosition,
		zoom: 6,
		panControl: true,
		zoomControl: true,
	    disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	}

	var map = new google.maps.Map(mapCanvas, mapOptions)



	/*
	====	DEALER #1 	====
	*/

	//Set the content of the marker
	var dealer1description = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Dealer #1</h1>'+
		'<div id="bodyContent">'+
		'<p><b>This is a demo content!</b></p>' +
		'</div>'+
		'</div>';

	//Set infowindow
	var infoWindowOne = new google.maps.InfoWindow({
		content: dealer1description
	});

	//Create a marker
	var dealerMarkerOne = new google.maps.Marker({
		position: dealer1,
		map: map,
		title: 'Dealer Marker #1'
	});

	//Open the marker on click
	google.maps.event.addListener(dealerMarkerOne, 'click', function() {
		infoWindowOne.open(map,dealerMarkerOne);
	});



	/*
	====	DEALER #2 	====
	*/

	var dealer2description = '<div id="content">'+
	'<div id="siteNotice">'+
	'</div>'+
	'<h1 id="firstHeading" class="firstHeading">Dealer #2</h1>'+
	'<div id="bodyContent">'+
	'<p><b>This is a anthr demo dealer!</b></p>' +
	'</div>'+
	'</div>';

	var infoWindowTwo = new google.maps.InfoWindow({
		content: dealer2description
	});

	var dealerMarkerTwo = new google.maps.Marker({
		position: dealer2,
		map: map,
		title: 'Dealer Marker #2'
	});

	//Open the marker on click
	google.maps.event.addListener(dealerMarkerTwo, 'click', function() {
		infoWindowTwo.open(map,dealerMarkerTwo);
	});


	/*
	====	DEALER #3 	====
	*/

	//Set the content of the marker
	var dealerDescription3 = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Dealer #3</h1>'+
		'<div id="bodyContent">'+
		'<p><b>This is a third content window!</b></p>' +
		'</div>'+
		'</div>';

	//Set infowindow
	var infoWindow3 = new google.maps.InfoWindow({
		content: dealerDescription3
	});

	var dealerMarker3 = new google.maps.Marker({
		position: dealer3,
		map: map,
		title: 'Dealer Marker #3'
	});

	//Open the marker on click
	google.maps.event.addListener(dealerMarker3, 'click', function() {
		infoWindow3.open(map,dealerMarker3);
	});



	/*
	====	DEALER #4 	====
	*/

	var dealerMarkerFour = new google.maps.Marker({
		position: dealer4,
		map: map,
		title: 'Dealer Marker #4'
	});



	/*
	====	DEALER #5 	====
	*/

	var dealerMarkerFive = new google.maps.Marker({
		position: dealer5,
		map: map,
		title: 'Dealer Marker #5'
	});



	/*
	====	DEALER #6 	====
	*/

	var dealerMarkerSix = new google.maps.Marker({
		position: dealer6,
		map: map,
		title: 'Dealer Marker #6'
	});



	/*
	====	DEALER #7 	====
	*/

	var dealerMarkerSeven = new google.maps.Marker({
		position: dealer7,
		map: map,
		title: 'Dealer Marker #7'
	});


}

google.maps.event.addDomListener(window, 'load', initialize);