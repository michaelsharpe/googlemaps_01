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
  end

  def new

  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def node_params
    params.permit(:node).permit(:name, :latitude, :longitude, :tag_list)
  end

end
