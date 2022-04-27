 class Api::ReviewsController < ApplicationController
    def index
        product = Product.find(params[:product_id])
        @reviews = product.reviews
    end
    
    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end 
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review
            @review.destroy
            render :show
        else
            render json @review.errors.full_messages, status: 401
        end
    end
    
    private
    def review_params
        params.require(:review).permit(:user_id, :comment, :product_id, :rating)
    end
end
