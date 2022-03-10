class Api::OrderItemsController < ApplicationController
    def index

    end

    def create
        @user = User.find(params[:user_id])
        @order = Order.create!('user_id' =>@user.id)
        debugger
        @data = params[:itemsInArray]
        @data.each do |key, val|
            OrderItem.create!('product_id'=> val['product_id'].to_i, 'quantity' => val['quantity'].to_i, 'price' => val['price'].to_i, 'order_id' => @order.id)
        end
    end

    private
    def order_items_params
        params.require(:order_items).permit(:order_id, :product_id, :quantity, :price)
    end
end
