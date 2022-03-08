class Api::CartItemsController < ApplicationController
    def create
        @item = CartItem.new(cart_items_params)

        if @item.save
            render :show
        else
            render json: @item.errors.full_messages, status: 401
        end
    end

    def update
        @item = CartItem.find(params[:id])

        if @item.update(cart_items_params)
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


 