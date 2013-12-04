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


50.times do |num|
  Node.create(name: Faker::Name.name, address: "#{address()} Glebeholme Blvd, Toronto" )
end