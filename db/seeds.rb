# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

def address()
  r = Random.new
  number = r.rand(100..400)
end

def location()
	loc = Random.new.location(43.6482552, -79.3884569, 1000)
end


500.times do |num|
	location = location()
  lat = location[0]
  lng = location[1]
  Node.create(name: Faker::Name.name, latitude: lat, longitude: lng)
end