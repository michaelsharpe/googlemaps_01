class Node < ActiveRecord::Base
  acts_as_taggable_on :tags
  geocoded_by :address
end
