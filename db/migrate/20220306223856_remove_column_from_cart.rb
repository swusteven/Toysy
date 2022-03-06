class RemoveColumnFromCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :valid
  end
end
