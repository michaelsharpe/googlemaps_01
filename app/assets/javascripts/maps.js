// var getLocation = function() {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(currentPosition)
// 	} else {
// 		alert("You need Geolocation enabled to continue.")
// 	};
// }

// var currentPosition = function(position) {
// 	var lat = 
// }

// var getLongitude = function()



// function initialize() {
// 	getLocation();
// 	var mapOptions = {
//         center: new google.maps.LatLng(currentPosition.),
//         zoom: 8
//         };
//     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
// }


$(document).ready(function(){
	
	function initialize() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var mapOptions = {
			        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			        zoom: 12
			        };
			    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			    var marker = new google.maps.Marker({
			    	position: map.getCenter(),
			    	map: map,
			    	title: "You are here!"
			    });

			    google.maps.event.addListener(marker, 'click', function(){
			    					map.setZoom(18);
			    					map.setCenter(marker.getPosition());
			    				}); 

			    $("#populate").on("click", function(){
			    	var request = $.ajax("/nodes.json", { 
		    			success: function(data) {
		    				for (i = 0; i < data.length ; i++) {
								var location = new google.maps.LatLng(data[i].latitude, data[i].longitude)
								var marker = new google.maps.Marker({
									position: location,
									map: map,
									title: data[i].name
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
		} else {
			alert("You need Geolocation enabled to continue.")
		};
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	 google.maps.event.addListener(marker, 'click', function(){
			    	map.setZoom(10);
			    	map.setCenter(marker.getPosition());
			    	var position = marker.getPosition();
			    }); 
});

