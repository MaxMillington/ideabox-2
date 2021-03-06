class IdeasController < ApplicationController
  respond_to :html, :json
  before_action :set_idea, only: [:edit, :update, :destroy, :thumbs_up, :thumbs_down]

  def index
    @ideas = Idea.order("created_at DESC" && "updated_at DESC")
    @idea = Idea.new
  end

  def monkey
    respond_with Idea.all
    @ideas = Idea.order("created_at DESC" && "updated_at DESC")
    @idea = Idea.new
  end

  def new
  end

  def create
    @idea = Idea.new(idea_params)
    if @idea.save
      respond_to do |format|
        format.html { redirect_to root_path, notice: "The idea was created." }
        format.json { render json: @idea }
      end
    else
      respond_to do |format|
        format.html { redirect_to root_path, notice: "The idea was not created." }
        format.json { render json: { messages: @idea.errors.messages} }
      end
    end

  end

  def edit
  end

  def update
    # respond_with Idea.update(params[:id], idea_params)
    if @idea.update_attributes(idea_params)
      redirect_to root_path, notice: 'Idea was successfully updated.'
    else
      flash.now[:errors] = @idea.errors.full_messages.join(", ")
      render :edit
    end

  end

  def destroy
    # respond_with Idea.destroy(params[:id])
    @idea.destroy
    flash.now[:success] = "Idea was successfully deleted."
    redirect_to root_path
  end

  def thumbs_up
    @idea.upvote
    @idea.save
    respond_with @idea
  end

  def thumbs_down
    @idea.downvote
    @idea.save
    respond_with @idea
  end

  private

  def idea_params
    params.require(:idea).permit(:title, :body, :quality)
  end

  def set_idea
    @idea = Idea.find(params[:id])
  end
end