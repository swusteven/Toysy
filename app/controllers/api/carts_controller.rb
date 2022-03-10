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

    ##destroy all items in cart_items that belong to the cart, not the cart itself.
    # /api/carts/:id
    def destroy
        @cart = Cart.find(params[:id])
        @cart_items = @cart.products
        @cart_items.each do |item|
            @cart_item = CartItem.find(item.id)
            if @cart_item
                @cart_item.destroy
            else
                render json: @cart_item.errors.full_messages, status: 401
            end
        end

        render json: ["Deleted all successfully"]
   
    end

    private
    def cart_params
        params.require(:cart).permit(:user_id)
    end

end
