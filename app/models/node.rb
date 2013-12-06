class Node < ActiveRecord::Base
  acts_as_taggable
  geocoded_by :address
end
