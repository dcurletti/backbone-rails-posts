class PostsController < ApplicationController

  def index
    @posts = Post.all
    render :json => @posts
  end

  def new
    render :json => {}
  end

  def create
    @post = Post.new(post_params)

    if @post.save!
      render :json => @post
    else
      render :json => @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :json => {}
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

  private
  def post_params
    params.require(:post).permit(:body, :title)
  end
end
