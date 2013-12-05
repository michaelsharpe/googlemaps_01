
var map;
var mapCenter;
var currentPositionMarker;
var markers = new Array();

function initializeMap(){
	map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 18,
		center: mapCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
}

function locError(error) {
	alert("The current position could not be found!");
}

function setCurrentPosition(position){
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var currentPosition = new google.maps.LatLng(lat, lng);

	currentPositionMarker = new google.maps.Marker({
		map: map,
		position: currentPosition,
		title: "You are here."
	})
		map.panTo(currentPosition);
}

function watchCurrentPosition(){
	navigator.geolocation.watchPosition(
		function (position) {
			console.log("Updated!");
			setMarkerPosition(currentPositionMarker, position);
		});
}

function setMarkerPosition(marker, position) {
	var lat = position.coords.lat;
	var lng = position.coords.lng;
	var updatedPosition = new google.maps.LatLng(lat, lng);
	console.log(updatedPosition);
	marker.setPosition(updatedPosition);
}

function mapController(position){
	setCurrentPosition(position);
	watchCurrentPosition();


}

function initMapProcedure(){
	initializeMap();
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(mapController, locError);
	} else {
		alert("Get a better browser!");
	}
}

$(document).ready(function(){
  initMapProcedure();
});
