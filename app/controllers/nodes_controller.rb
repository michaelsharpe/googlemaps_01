class NodesController < ApplicationController
  before_action :set_node, only: [:show, :edit, :update, :destroy]

  def index
    @nodes = Node.all
    respond_to do |format|
      format.js do
        ne = params[:ne].split(',').collect{|e|e.to_f}
        sw = params[:sw].split(',').collect{|e|e.to_f}
        @nodes = Node.find(:all, limit: 100, bounds: [sw, ne])
      end
      format.json { render json: @nodes}
    end

  end

  def show
    @node = ode.find(params[:id])
  end

  def new
    @node = Node.new(node_params)
  end

  def edit
  end

  def create
    @node = Node.new(node_params)
    if @node.save
      redirect_to node_path(@node)
    else
      @node
    end
  end

  def update
  end

  def destroy
  end

  private

  def node_params
    params.require(:nodes).permit(:name, :latitude, :longitude, :address, :tag_list)
  end

end
