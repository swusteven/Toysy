class RenameColumnNameCarts < ActiveRecord::Migration[5.2]
  def change
    rename_column :carts, :cart_item_id, :product_id
    remove_column :carts, :quantity
  end
end
