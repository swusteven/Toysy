class Api::CartsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @cartItems = @user.products_on_cart.all
    end

    def create
        @cart = Cart.new(cart_params)
        if @cart.save 
            render json: ["cart created"]
        else
            render json: @cart.errors.full_messages, status: 401
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:user_id)
    end

end
