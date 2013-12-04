json.array!(@nodes) do |node|
  json.extract! node, :id, :name, :latitude, :longitude
end
