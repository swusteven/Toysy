class Api::OrderItemsController < ApplicationController
    def index

    end

    def create
        @user = User.find(params[:user_id])
        debugger
        if @user
            ##data will come in an array with each product as elelment. Need to check how it looks like first
            @order = Order.new(order_items_params)
            if @order.save
                render :show
            else
                render json: @order.errors.full_messages, status: 401
            end
        end
    end

    private
    def order_items_params
        params.require(:order_items).permit(:order_id, :product_id, :quantity, :price)
    end
end
