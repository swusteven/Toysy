class AddUniqueToCartItem < ActiveRecord::Migration[5.2]
  def change
    add_index :cart_items, [:cart_id, :product_id], :unique => true
  end
end
