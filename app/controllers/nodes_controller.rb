class NodesController < ApplicationController
  before_action :set_node, only: [:show, :edit, :update, :destroy]

  def index
    @nodes = Node.all

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

end
