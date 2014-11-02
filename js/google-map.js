function initialize() {

	var myLatlng = new google.maps.LatLng(45.507865, 9.116277);
	var dealer = new google.maps.LatLng(45.438969, 10.990815);
	var startingPosition = new google.maps.LatLng(44.656058, 10.171665);

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

	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
		'<div id="bodyContent">'+
		'<p><b>Zdarova pacans, aš Australijoj!</b>...' +
		' also referred to as <b>Ayers Rock</b>, is a large ' +
		'sandstone rock formation in the southern part of the '+
		'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
		'south west of the nearest large town, Alice Springs; 450&#160;km '+
		'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
		'features of the Uluru - Kata Tjuta National Park. Uluru is '+
		'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
		'Aboriginal people of the area. It has many springs, waterholes, '+
		'rock caves and ancient paintings. Uluru is listed as a World '+
		'Heritage Site.</p>'+
		'<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
		'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
		'(last visited June 22, 2009).</p>'+
		'</div>'+
		'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Dealer Marker #1'
	});

	var dealerMarker2 = new google.maps.Marker({
		position: dealer,
		map: map,
		title: 'Dealer Marker #2'
	});


	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);