class Api::CartsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @cartItems = @user.products_on_cart.all
    end
end
