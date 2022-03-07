class Api::CartItemsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @item = CartItem.new(cart_items_params)

        if @item.save
            render :show
        else
            render json: @item.errors.full_messages, status: 401
        end
    end

    private
    def cart_items_params
        params.require(:item).permit(:cart_id, :product_id, :quantity)
    end
end


 