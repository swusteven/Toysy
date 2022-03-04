class Api::ReviewsController < ApplicationController
    def show
        @review = User.find(params[:id])
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json @review.errors.full_messages, status: 401
        end 
    end

    private
    def review_params
        require
    end
end
