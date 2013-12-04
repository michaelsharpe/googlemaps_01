gm_init = ->
  gm_center = new google.maps.LatLng(54, 12)
  gm_map_type = google.maps.MapTypeId.ROADMAP
  map_options = {center: gm_center, zoom: 8, mapTypeId: gm_map_type}
  new google.maps.Map(@map_canvas,map_options);