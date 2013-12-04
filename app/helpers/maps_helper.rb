module MapsHelper

  def google_maps_api_key
    "AIzaSyDaRvabAYS92dcakNurSFDiaK_dA7FRB7c"
  end

  def google_api_url
    "http://maps.googleapis.com/maps/api/js"
  end

  def google_api_access
    "#{google_api_url}?key=#{google_maps_api_key}&sensor=false"
  end

end
