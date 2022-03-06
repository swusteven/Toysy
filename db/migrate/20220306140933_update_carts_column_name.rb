class UpdateCartsColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :carts, :buyer_id, :user_id
  end
end
