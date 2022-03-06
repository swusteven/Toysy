class UpdateNameinCart < ActiveRecord::Migration[5.2]
  def change
    rename_column :carts, :product_id, :cart_item_id
    add_column :carts, :valid, :boolean, default: true
  end
end
