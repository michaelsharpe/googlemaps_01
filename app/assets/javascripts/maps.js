
var map;
var mapCenter;
var currentPositionMarker;
var positionTimer;
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
	currentPositionMarker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude),
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10
    },
    animation: google.maps.Animation.DROP,
    animation: google.maps.Animation.BOUNCE,
	  title: "You are here."
	});
	map.panTo(new google.maps.LatLng(
    position.coords.latitude,
    position.coords.longitude));
}

function watchCurrentPosition(){
  var positionTimer = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions)
}

function watchSuccess(position){
  setMarkerPosition(currentPositionMarker, position);
}

function watchError(err){
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

var watchOptions = {
  enableHighAccuracy: true
}

function setMarkerPosition(marker, position) {
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	var updatedPosition = new google.maps.LatLng(lat, lng);
  console.log(updatedPosition)
	marker.setPosition(updatedPosition);
	// map.panTo(updatedPosition);
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

  $("#populate").on("click", function(){
    var request = $.ajax("/nodes.json", { 
      success: function(data) {
        for (i = 0; i < data.length ; i++) {
          var location = new google.maps.LatLng(data[i].latitude, data[i].longitude)
          var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: data[i].name,
            animation: google.maps.Aqnimation.DROP
          })
          google.maps.event.addListener(marker, 'click', function(){
            map.setZoom(18);
            map.setCenter(marker.getPosition());
          }); 
        }
      }
    });
  });

});

