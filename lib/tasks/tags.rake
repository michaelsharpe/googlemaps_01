namespace :tags do
  desc "TODO"
  task seed_tags: :environment do

    def randomTagList()
      array = []
      tags = ["#trees", "#shrubs", "#cherrys", "#apples", "#food", "#art", "#things", "#stuff"]
      r = Random.new
      3.times do |i|
        num = r.rand(7)
        array << tags[num]
      end
      list = array.join(', ')
      list
    end 

    nodes = Node.all
    nodes.each do |node|
      tag_list = randomTagList()
      node.tag_list = tag_list
      puts ("#{node.tag_list}")
      node.save
    end
  end

end
